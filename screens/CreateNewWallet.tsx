import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Switch,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const CreateNewWallet = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isFaceIdEnabled, setIsFaceIdEnabled] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('Weak');

  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

  const handlePasswordChange = (password : any) => {
    setNewPassword(password);
    setPasswordStrength(password.length >= 8 ? 'Good' : 'Weak');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <LinearGradient
              colors={['#6EE7B7', '#3B82F6', '#9333EA']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.progressIndicator}
            />
          </View>
          <Text style={styles.stepText}>1/3</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Create Password</Text>
          <Text style={styles.subtitle}>
            This password will unlock your ELLAset wallet only on this service
          </Text>
        </View>

        <View style={styles.itemsCenter}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="New Password"
              placeholderTextColor="#666"
              secureTextEntry={!passwordVisible}
              onChangeText={handlePasswordChange}
              value={newPassword}
            />
            <TouchableOpacity
              onPress={togglePasswordVisibility}
              style={styles.icon}>
              <Ionicons
                name={passwordVisible ? 'eye-off' : 'eye'}
                size={24}
                color="#ccc"
              />
            </TouchableOpacity>
          </View>
          <Text
            style={[
              styles.passwordStrength,
              { color: passwordStrength === 'Good' ? '#10B981' : '#FFA500' },
            ]}>
            Password strength: {passwordStrength}
          </Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="#666"
              secureTextEntry={!passwordVisible}
              onChangeText={setConfirmPassword}
              value={confirmPassword}
            />
            <TouchableOpacity
              onPress={togglePasswordVisibility}
              style={styles.icon}>
              <Ionicons
                name={passwordVisible ? 'eye-off' : 'eye'}
                size={24}
                color="#ccc"
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.helperText}>Must be at least 8 characters</Text>

          <View style={styles.switchContainer}>
            <Text style={styles.switchLabel}>Sign in with Face ID?</Text>
            <Switch
              value={isFaceIdEnabled}
              onValueChange={setIsFaceIdEnabled}
              trackColor={{ false: '#767577', true: '#4f94ef' }}
              thumbColor={isFaceIdEnabled ? '#6B50E1' : '#f4f3f4'}
            />
          </View>

          <TouchableOpacity
            onPress={() => setIsTermsChecked(!isTermsChecked)}
            style={styles.checkboxContainer}>
            <Ionicons
              name={isTermsChecked ? 'checkbox' : 'square-outline'}
              size={24}
              color={isTermsChecked ? '#6B50E1' : '#ccc'}
            />
            <Text style={styles.checkboxText}>
              I understand that ELLAset cannot recover this password for me.{' '}
              <Text style={styles.learnMore}>Learn more</Text>
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} disabled={!isTermsChecked}>
            <LinearGradient
              colors={
                isTermsChecked
                  ? ['#6EE7B7', '#3B82F6', '#9333EA']
                  : ['#555', '#555']
              }
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={[
                styles.buttonGradient,
                { opacity: isTermsChecked ? 1 : 0.5 },
              ]}>
              <Text style={styles.buttonText}>Next</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#09080C',
    padding: 20,
    flex: 1,
  },
  textContainer: {
    alignItems: 'center',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  progressBar: {
    flex: 1,
    height: 5,
    backgroundColor: '#3A3A3C',
    borderRadius: 3,
  },
  progressIndicator: {
    width: '33%',
    height: '100%',
    borderRadius: 3,
  },
  stepText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  subtitle: {
    color: '#bbb',
    fontSize: 14,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#131118',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    height: 60,
    color: '#fff',
    fontSize: 16,
    paddingVertical: 10,
  },
  icon: {
    padding: 5,
  },
  passwordStrength: {
    fontSize: 14,
    marginVertical: 5,
    paddingBottom: 25,
  },
  helperText: {
    color: '#666',
    fontSize: 12,
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingTop: 30,
    paddingBottom: 15,
  },
  switchLabel: {
    color: '#fff',
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkboxText: {
    color: '#FFFFFF',
    marginLeft: 10,
    fontSize: 14,
    flex: 1,
  },
  learnMore: {
    color: '#4f94ef',
    textDecorationLine: 'underline',
  },
  button: {
    width: '80%',
    borderRadius: 30,
    marginBottom: 20,
    overflow: 'hidden',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonGradient: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  itemsCenter: {
    paddingTop: 50,
  },
});

export default CreateNewWallet;
