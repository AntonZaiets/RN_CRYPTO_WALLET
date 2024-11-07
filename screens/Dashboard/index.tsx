import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './style.ts';
import axios from 'axios';
import TokenModal from '@/components/tokenModal/TokenModal.tsx';

const Home = () => {
  const style = styles();
  const [isModalVisible, setModalVisible] = useState(false);
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedCoins, setSelectedCoins] = useState({});

  useEffect(() => {
    fetchCoins();
  }, []);

  const fetchCoins = async () => {
    const data = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets',
      {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: 100,
          page: 1,
        },
      },
    );
    setCoins(data.data);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleCoinToggle = coinId => {
    setSelectedCoins(prevState => ({
      ...prevState,
      [coinId]: !prevState[coinId],
    }));
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <SafeAreaView style={style.container}>
      <View style={style.container}>
        <View style={style.header}>
          <Image
            source={{ uri: 'https://via.placeholder.com/40' }}
            style={style.avatar}
          />
          <View>
            <Text style={style.username}>Floyd Miles</Text>
            <Text style={style.network}>Ethereum Main network</Text>
          </View>
          <MaterialIcons
            name="qr-code-scanner"
            size={24}
            color="white"
            style={style.qrIcon}
          />
        </View>

        <View style={style.balanceContainer}>
          <Text style={style.balanceText}>70.42 ETH</Text>
          <Text style={style.balanceUSD}>
            $121,330 <Text style={style.gain}>+ 5.42%</Text>
          </Text>
        </View>

        <View style={style.actionButtons}>
          <TouchableOpacity style={style.actionButton}>
            <Ionicons name="send" size={24} color="#fff" />
            <Text style={style.actionText}>Send</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.actionButton}>
            <Ionicons name="arrow-down-circle" size={24} color="#fff" />
            <Text style={style.actionText}>Receive</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.actionButton}>
            <Ionicons name="cart" size={24} color="#fff" />
            <Text style={style.actionText}>Buy ETH</Text>
          </TouchableOpacity>
        </View>
        <View style={style.buttonContainer}>
          <TouchableOpacity style={style.button} onPress={toggleModal}>
            <LinearGradient
              colors={['#6EE7B7', '#3B82F6', '#9333EA']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={[style.buttonGradient, { opacity: 1 }]}>
              <Text style={style.buttonText}>+ Add Token</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={style.tokenList}>
        {coins.map(
          coin =>
            selectedCoins[coin.id] && (
              <View key={coin.id} style={style.tokenItem}>
                <Image source={{ uri: coin.image }} style={style.tokenIcon} />
                <View>
                  <Text style={style.tokenName}>{coin.name}</Text>
                  <Text style={style.tokenPrice}>
                    ${coin.current_price}{' '}
                    <Text style={style.tokenGain}>+ 3.22%</Text>
                  </Text>
                </View>
                <Text style={style.tokenBalance}>
                  0.00 {coin.symbol.toUpperCase()}
                </Text>
              </View>
            ),
        )}
      </ScrollView>
      <TokenModal
        isVisible={isModalVisible}
        toggleModal={toggleModal}
        coins={filteredCoins}
        selectedCoins={selectedCoins}
        handleCoinToggle={handleCoinToggle}
        setSearch={setSearch}
      />
    </SafeAreaView>
  );
};

export default Home;
