import React, { useState } from 'react';
import {
  View,
  Text,
  Switch,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { styles } from './style.ts';
import { authenticateWithFaceID } from '@/components/faceId.tsx';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const ImportSeed = () => {
  const style = styles();
  const [seedVisible, setSeedVisible] = useState(false);
  const [isFaceIdEnabled, setIsFaceIdEnabled] = useState(false);
  const [seed, setSeed] = useState('');
  const navigation = useNavigation();

  const togglePasswordVisibility = () => setSeedVisible(!seedVisible);

  const handlePasswordChange = seeded => {
    setSeed(seeded);
  };

  const faceIdSwitcher = async () => {
    if (!isFaceIdEnabled) {
      const success = await authenticateWithFaceID();
      if (success) {
        setIsFaceIdEnabled(true);
      }
    } else {
      setIsFaceIdEnabled(false);
    }
  };

  const getSeedPhrase = async () => {
    try {
      const phrase = await AsyncStorage.getItem('seedPhrase');
      if (phrase !== null) {
        return seed === JSON.parse(phrase).join(' ')
          ? navigation.navigate('Tabs' as never)
          : null;
      } else {
        console.log('No seed phrase found');
        return null;
      }
    } catch (error) {
      console.error('Failed to retrieve the seed phrase', error);
      return null;
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <View style={style.mainView}>
        <Text style={style.headText}>Import From Seed</Text>
        <View style={style.inputContainer}>
          <TextInput
            style={style.input}
            placeholder="New Password"
            placeholderTextColor="#666"
            secureTextEntry={!seedVisible}
            onChangeText={handlePasswordChange}
            value={seed}
          />
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={style.icon}>
            <Ionicons
              name={seedVisible ? 'eye-off' : 'eye'}
              size={24}
              color="#ccc"
            />
          </TouchableOpacity>
        </View>
        <View style={style.switchContainer}>
          <Text style={style.switchLabel}>Sign in with Face ID?</Text>
          <Switch
            value={isFaceIdEnabled}
            onValueChange={faceIdSwitcher}
            trackColor={{ false: '#767577', true: '#4f94ef' }}
            thumbColor={isFaceIdEnabled ? '#6B50E1' : '#f4f3f4'}
          />
        </View>
        <View style={style.buttonContainer}>
          <TouchableOpacity
            style={style.button}
            onPress={() => {
              getSeedPhrase();
            }}>
            <LinearGradient
              colors={
                /*isTermsChecked &&
                                                                                                                newPassword === confirmPassword &&
                                                                                                                newPassword.length >= 8
                                                                                                                  ? ['#6EE7B7', '#3B82F6', '#9333EA']
                                                                                                                  :*/ [
                  '#555',
                  '#555',
                ]
              }
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={[style.buttonGradient, { opacity: 1 }]}>
              <Text style={style.buttonText}>Next</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ImportSeed;
