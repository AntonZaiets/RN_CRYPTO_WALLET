import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BackgroundImage from '../assets/images/splash.png';

const Home = () => {
  return (
    <ImageBackground source={BackgroundImage} style={styles.background}>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <LinearGradient
            colors={['#000', '#000']}
            style={styles.buttonGradient}>
            <Text style={styles.buttonText}>Import Using Seed Phrase</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <LinearGradient
            colors={['#6EE7B7', '#3B82F6', '#9333EA']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.buttonGradient}>
            <Text style={styles.buttonText}>Create a New Wallet</Text>
          </LinearGradient>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 50,
    fontFamily: 'Arial',
    textAlign: 'center',
    letterSpacing: 1.5,
  },
  button: {
    width: '80%',
    borderRadius: 30,
    marginBottom: 20,
    overflow: 'hidden',
  },
  buttonGradient: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;
