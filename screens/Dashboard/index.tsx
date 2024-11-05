import React from 'react';
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

const Home = () => {
  const style = styles();
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

        <ScrollView style={style.tokenList}>
          <View style={style.tokenItem}>
            <Image
              source={{ uri: 'https://via.placeholder.com/24' }}
              style={style.tokenIcon}
            />
            <View>
              <Text style={style.tokenName}>1INCH Token</Text>
              <Text style={style.tokenPrice}>
                $3.77 <Text style={style.tokenGain}>+ 3.22%</Text>
              </Text>
            </View>
            <Text style={style.tokenBalance}>10.059 1INCH</Text>
          </View>

          <View style={style.tokenItem}>
            <Image
              source={{ uri: 'https://via.placeholder.com/24' }}
              style={style.tokenIcon}
            />
            <View>
              <Text style={style.tokenName}>APY Governance Token</Text>
              <Text style={style.tokenPrice}>
                $2.35 <Text style={style.tokenLoss}>- 0.24%</Text>
              </Text>
            </View>
            <Text style={style.tokenBalance}>9,993.32 APY</Text>
          </View>

          <View style={style.tokenItem}>
            <Image
              source={{ uri: 'https://via.placeholder.com/24' }}
              style={style.tokenIcon}
            />
            <View>
              <Text style={style.tokenName}>Basic Attention Token</Text>
              <Text style={style.tokenPrice}>
                $0.66 <Text style={style.tokenGain}>+ 0.44%</Text>
              </Text>
            </View>
            <Text style={style.tokenBalance}>84.444 BAT</Text>
          </View>
        </ScrollView>

        <View style={style.buttonContainer}>
          <TouchableOpacity style={style.button}>
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
    </SafeAreaView>
  );
};

export default Home;
