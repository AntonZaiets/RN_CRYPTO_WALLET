import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Modal from 'react-native-modal';
import { styles } from './style.ts';

const TokenModal = ({
  isVisible,
  toggleModal,
  coins,
  selectedCoins,
  handleCoinToggle,
  setSearch,
}) => {
  const style = styles();

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={toggleModal}
      style={style.modalContainer}>
      <View style={style.modalContent}>
        <View style={style.searchContainer}>
          <TextInput
            placeholder="Search Token"
            placeholderTextColor="#fff"
            style={style.searchInput}
            onChangeText={setSearch}
          />
          <Ionicons
            name="search"
            size={24}
            color="white"
            style={style.searchIcon}
          />
        </View>
        <ScrollView>
          {coins.map(coin => (
            <TouchableOpacity
              key={coin.id}
              style={style.coinItem}
              onPress={() => handleCoinToggle(coin.id)}>
              <Image source={{ uri: coin.image }} style={style.coinIcon} />
              <View style={style.coinDetails}>
                <Text style={style.coinName}>{coin.name}</Text>
                <Text style={style.coinPrice}>${coin.current_price}</Text>
              </View>

              <LinearGradient
                colors={
                  selectedCoins[coin.id]
                    ? ['#6EE7B7', '#3B82F6', '#9333EA']
                    : ['#AAA', '#AAA', '#AAA']
                }
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={style.checkmarkIcon}>
                <Ionicons
                  name={selectedCoins[coin.id] ? 'checkmark-circle' : 'ellipse'}
                  size={25}
                  color="white"
                />
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </Modal>
  );
};

export default TokenModal;
