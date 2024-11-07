import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Switch,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ImageBackground,
  Image,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { ArrowBackSvg } from '@/assets/svg/arrowBack';
import { useNavigation } from '@react-navigation/native';
import { authenticateWithFaceID } from '@/components/faceId';
import { BlurView } from 'expo-blur';

const CreateNewWallet = () => {
  const navigation = useNavigation();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isFaceIdEnabled, setIsFaceIdEnabled] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [isSecondTermsChecked, setIsSecondTermsChecked] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordSecondVisible, setPasswordSecondVisible] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('Weak');
  const [openMainModal, setOpenMainModel] = useState(false);
  const [laterModal, setLaterModal] = useState(false);
  const [laterSecondModal, setLaterSecondModal] = useState(false);

  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);
  const togglePasswordSecondVisibility = () =>
    setPasswordSecondVisible(!passwordSecondVisible);

  const handlePasswordChange = password => {
    setNewPassword(password);
    setPasswordStrength(password.length >= 8 ? 'Good' : 'Weak');
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.progressContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowBackSvg />
          </TouchableOpacity>
          <View style={styles.progressWrapper}>
            <LinearGradient
              colors={['#6EE7B7', '#3B82F6', '#9333EA']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.progressCircle}
            />
            <View style={styles.progressBar} />
            <View style={styles.progressCircleInactive} />
            <View style={styles.progressBar} />
            <View style={styles.progressCircleInactive} />
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
          {newPassword !== '' && (
            <Text
              style={[
                styles.passwordStrength,
                { color: passwordStrength === 'Good' ? '#10B981' : '#FFA500' },
              ]}>
              Password strength: {passwordStrength}
            </Text>
          )}

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="#666"
              secureTextEntry={!passwordSecondVisible}
              onChangeText={setConfirmPassword}
              value={confirmPassword}
            />
            <TouchableOpacity
              onPress={togglePasswordSecondVisibility}
              style={styles.icon}>
              <Ionicons
                name={passwordSecondVisible ? 'eye-off' : 'eye'}
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
              onValueChange={faceIdSwitcher}
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
          <TouchableOpacity
            style={styles.button}
            disabled={
              !(
                isTermsChecked &&
                newPassword === confirmPassword &&
                newPassword.length >= 8
              )
            }
            onPress={() => {
              setOpenMainModel(true);
            }}>
            <LinearGradient
              colors={
                isTermsChecked &&
                newPassword === confirmPassword &&
                newPassword.length >= 8
                  ? ['#6EE7B7', '#3B82F6', '#9333EA']
                  : ['#555', '#555']
              }
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={[
                styles.buttonGradient,
                {
                  opacity:
                    isTermsChecked &&
                    newPassword === confirmPassword &&
                    newPassword.length >= 8
                      ? 1
                      : 0.5,
                },
              ]}>
              <Text style={styles.buttonText}>Next</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>

      {openMainModal && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={openMainModal}
          onRequestClose={() => setOpenMainModel(false)}>
          <View style={styles.mainModalContent}>
            <Text style={styles.modalText}>Secure Your Wallet</Text>
            <ImageBackground
              resizeMode="stretch"
              style={styles.imageBg}
              source={require('../assets/images/bgLine.png')}>
              <Image source={require('../assets/images/modalImage.png')} />
            </ImageBackground>
            <Text style={styles.mainModalDescription}>
              Don't risk losing your funds. Protect your wallet by saving your{' '}
              <Text style={{ color: '#0B6FFB', fontWeight: '500' }}>
                Seed Phrase
              </Text>{' '}
              in a place you trust.
            </Text>
            <Text style={styles.mainModalDescription}>
              It's the only way to recover your wallet if you get locked out of
              the app or get a new device.
            </Text>
            <TouchableOpacity
              style={styles.remindMeLater}
              onPress={() => {
                setLaterModal(true);
              }}>
              <Text
                style={[
                  styles.buttonText,
                  { color: '#9333EA', fontWeight: '700' },
                ]}>
                Remind Me Later
              </Text>
            </TouchableOpacity>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={styles.buttonModal}
                onPress={() => setOpenMainModel(false)}>
                <LinearGradient
                  colors={['#6EE7B7', '#3B82F6', '#9333EA']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.buttonGradient}>
                  <Text style={styles.buttonText}>Next</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
          {laterModal && (
            <>
              <BlurView intensity={50} style={styles.blurBg} />
              <Modal
                animationType="slide"
                transparent={true}
                visible={laterModal}
                onRequestClose={() => setLaterModal(false)}>
                <View style={styles.modalContent}>
                  <Text style={styles.modalText}>What is a "Seed Phrase"</Text>
                  <Text style={styles.modalDescription}>
                    A seed phrase is a set of twelve words that contains all the
                    information about your wallet, including your funds. It's
                    like a secret code used to access your entire wallet.
                    {`\n\n`}
                    You must keep your seed phrase secret and safe. If someone
                    gets your seed phrase, they'll gain control over your
                    accounts.
                    {`\n\n`}
                    Save it in a place where only you can access it.{`\n`}
                    If you lose it, not even MetaMask can help you recover it.
                  </Text>
                  <View style={styles.modalButtonContainer}>
                    <TouchableOpacity
                      style={styles.buttonModal}
                      onPress={() => {
                        setLaterModal(false);
                        setLaterSecondModal(true);
                      }}>
                      <LinearGradient
                        colors={['#6EE7B7', '#3B82F6', '#9333EA']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.buttonGradient}>
                        <Text style={styles.buttonText}>Understood</Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            </>
          )}
          {laterSecondModal && (
            <>
              <BlurView intensity={50} style={styles.blurBg} />
              <Modal
                animationType="slide"
                transparent={true}
                visible={laterSecondModal}
                onRequestClose={() => setLaterSecondModal(false)}>
                <View style={styles.modalContent}>
                  <Text style={styles.modalText}>Skip Account Security?</Text>
                  <TouchableOpacity
                    onPress={() => setIsSecondTermsChecked(!isSecondTermsChecked)}
                    style={[styles.checkboxContainer, {paddingHorizontal: 20}]}>
                    <Ionicons
                      name={isSecondTermsChecked ? 'checkbox' : 'square-outline'}
                      size={24}
                      color={isSecondTermsChecked ? '#6B50E1' : '#ccc'}
                    />
                    <Text style={styles.checkboxText}>
                      I dunderstand that if i lose mt seed phrase i will not be
                      able to access my wallet.
                    </Text>
                  </TouchableOpacity>
                  <View style={styles.modalButtonsContainer}>
                    <TouchableOpacity
                        style={styles.buttonsModal}
                        disabled={isSecondTermsChecked}
                    >
                      <LinearGradient
                          colors={
                            isSecondTermsChecked
                                ? ['#555', '#555']
                                : ['#6EE7B7', '#3B82F6', '#9333EA']
                          }
                          start={{ x: 0, y: 0 }}
                          end={{ x: 1, y: 1 }}
                          style={[
                            styles.buttonGradient,
                            {
                              opacity:
                                  isSecondTermsChecked
                                      ? 0.5
                                      : 1,
                            },
                          ]}>
                        <Text style={styles.buttonText}>Secure Now</Text>
                      </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonsModal}
                        disabled={!isSecondTermsChecked}
                        onPress={() => {
                          setOpenMainModel(false);
                          setLaterSecondModal(false);
                          navigation.navigate('Tabs' as never);
                        }}
                       >
                      <LinearGradient
                          colors={
                            isSecondTermsChecked
                                ? ['#6EE7B7', '#3B82F6', '#9333EA']
                                : ['#555', '#555']
                          }
                          start={{ x: 0, y: 0 }}
                          end={{ x: 1, y: 1 }}
                          style={[
                            styles.buttonGradient,
                            {
                              opacity:
                                  isSecondTermsChecked
                                      ? 1
                                      : 0.5,
                            },
                          ]}>
                        <Text style={styles.buttonText}>Skip</Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            </>
          )}
        </Modal>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  blurBg: {
    width: '100%',
    height: '100%',
  },
  container: {
    backgroundColor: '#09080C',
    padding: 20,
    flex: 1,
  },
  textContainer: {
    alignItems: 'center',
  },
  progressIndicator: {
    width: 0,
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
    textAlign: 'center',
    width: 300,
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
  buttonModal: {
    width: '80%',
    borderRadius: 30,
    marginBottom: 80,
    overflow: 'hidden',
    marginHorizontal: 20,
  },
  buttonsModal: {
    width: '45%',
    borderRadius: 30,
    marginBottom: 80,
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
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  progressWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginLeft: 10,
  },
  progressBar: {
    flex: 1,
    height: 2,
    backgroundColor: '#3A3A3C',
  },
  progressCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#6EE7B7',
  },
  progressCircleInactive: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#3A3A3C',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  mainModalContent: {
    width: '100%',
    backgroundColor: '#131118',
    borderRadius: 10,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    height: '85%',
  },
  modalContent: {
    width: '100%',
    backgroundColor: '#131118',
    borderRadius: 10,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    //height: '85%',
  },
  modalText: {
    marginTop: 20,
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 24,
    fontWeight: 500,
    color: '#FFFFFF',
  },
  closeModalButton: {
    backgroundColor: '#4f94ef',
    padding: 10,
    borderRadius: 8,
  },
  closeModalButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  imageBg: {
    width: '100%',
    //height: 400,
    alignItems: 'center',
    marginBottom: 60,
  },
  mainModalDescription: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 400,
    color: '#FFFFFF',
    marginHorizontal: 20,
    textAlign: 'center',
  },
  modalDescription: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 400,
    color: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  modalButtonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  remindMeLater: {
    marginVertical: 50,
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 80,
  },
});

export default CreateNewWallet;
