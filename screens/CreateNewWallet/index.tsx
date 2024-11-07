import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Switch,
  TouchableOpacity,
  Modal,
  ImageBackground,
  Image,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { ArrowBackSvg } from '@/assets/svg/arrowBack.tsx';
import { useNavigation } from '@react-navigation/native';
import { authenticateWithFaceID } from '@/components/faceId.tsx';
import { BlurView } from 'expo-blur';
import { InformationSvg } from '@/assets/svg/information.tsx';
import { styles } from './style.ts';

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
  const [openSecondMainModal, setOpenSecondMainModal] = useState(false);
  const [laterModal, setLaterModal] = useState(false);
  const [laterSecondModal, setLaterSecondModal] = useState(false);
  const style = styles();

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
    <SafeAreaView style={style.container}>
      <View style={style.container}>
        <View style={style.progressContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowBackSvg />
          </TouchableOpacity>
          <View style={style.progressWrapper}>
            <LinearGradient
              colors={['#6EE7B7', '#3B82F6', '#9333EA']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={style.progressCircle}
            />
            <View style={style.progressBar} />
            <View style={style.progressCircleInactive} />
            <View style={style.progressBar} />
            <View style={style.progressCircleInactive} />
          </View>
          <Text style={style.stepText}>1/3</Text>
        </View>

        <View style={style.textContainer}>
          <Text style={style.title}>Create Password</Text>
          <Text style={style.subtitle}>
            This password will unlock your ELLAset wallet only on this service
          </Text>
        </View>

        <View style={style.itemsCenter}>
          <View style={style.inputContainer}>
            <TextInput
              style={style.input}
              placeholder="New Password"
              placeholderTextColor="#666"
              secureTextEntry={!passwordVisible}
              onChangeText={handlePasswordChange}
              value={newPassword}
            />
            <TouchableOpacity
              onPress={togglePasswordVisibility}
              style={style.icon}>
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
                style.passwordStrength,
                { color: passwordStrength === 'Good' ? '#10B981' : '#FFA500' },
              ]}>
              Password strength: {passwordStrength}
            </Text>
          )}

          <View style={style.inputContainer}>
            <TextInput
              style={style.input}
              placeholder="Confirm Password"
              placeholderTextColor="#666"
              secureTextEntry={!passwordSecondVisible}
              onChangeText={setConfirmPassword}
              value={confirmPassword}
            />
            <TouchableOpacity
              onPress={togglePasswordSecondVisibility}
              style={style.icon}>
              <Ionicons
                name={passwordSecondVisible ? 'eye-off' : 'eye'}
                size={24}
                color="#ccc"
              />
            </TouchableOpacity>
          </View>
          <Text style={style.helperText}>Must be at least 8 characters</Text>

          <View style={style.switchContainer}>
            <Text style={style.switchLabel}>Sign in with Face ID?</Text>
            <Switch
              value={isFaceIdEnabled}
              onValueChange={faceIdSwitcher}
              trackColor={{ false: '#767577', true: '#4f94ef' }}
              thumbColor={isFaceIdEnabled ? '#6B50E1' : '#f4f3f4'}
            />
          </View>

          <TouchableOpacity
            onPress={() => setIsTermsChecked(!isTermsChecked)}
            style={style.checkboxContainer}>
            <Ionicons
              name={isTermsChecked ? 'checkbox' : 'square-outline'}
              size={24}
              color={isTermsChecked ? '#6B50E1' : '#ccc'}
            />
            <Text style={style.checkboxText}>
              I understand that ELLAset cannot recover this password for me.{' '}
              <Text style={style.learnMore}>Learn more</Text>
            </Text>
          </TouchableOpacity>
        </View>

        <View style={style.buttonContainer}>
          <TouchableOpacity
            style={style.button}
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
                style.buttonGradient,
                {
                  opacity:
                    isTermsChecked &&
                    newPassword === confirmPassword &&
                    newPassword.length >= 8
                      ? 1
                      : 0.5,
                },
              ]}>
              <Text style={style.buttonText}>Next</Text>
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
          <View style={style.mainModalContent}>
            <Text style={style.modalText}>Secure Your Wallet</Text>
            <ImageBackground
              resizeMode="stretch"
              style={style.imageBg}
              source={require('../../assets/images/bgLine.png')}>
              <Image source={require('../../assets/images/modalImage.png')} />
            </ImageBackground>
            <Text style={style.mainModalDescription}>
              Don't risk losing your funds. Protect your wallet by saving your{' '}
              <TouchableOpacity
                onPress={() => {
                  setLaterModal(true);
                }}>
                <Text style={{ color: '#0B6FFB', fontWeight: '500' }}>
                  Seed Phrase
                </Text>
              </TouchableOpacity>{' '}
              in a place you trust.
            </Text>
            <Text style={style.mainModalDescription}>
              It's the only way to recover your wallet if you get locked out of
              the app or get a new device.
            </Text>
            <TouchableOpacity
              style={style.remindMeLater}
              onPress={() => {
                setLaterSecondModal(true);
              }}>
              <Text
                style={[
                  style.buttonText,
                  { color: '#9333EA', fontWeight: '700' },
                ]}>
                Remind Me Later
              </Text>
            </TouchableOpacity>
            <View style={style.modalButtonContainer}>
              <TouchableOpacity
                style={style.buttonModal}
                onPress={() => {
                  setOpenMainModel(false);
                  setOpenSecondMainModal(true);
                }}>
                <LinearGradient
                  colors={['#6EE7B7', '#3B82F6', '#9333EA']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={style.buttonGradient}>
                  <Text style={style.buttonText}>Next</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
          {laterModal && (
            <>
              <BlurView intensity={50} style={style.blurBg} />
              <Modal
                animationType="slide"
                transparent={true}
                visible={laterModal}
                onRequestClose={() => setLaterModal(false)}>
                <View style={style.modalContent}>
                  <Text style={style.modalText}>What is a "Seed Phrase"</Text>
                  <Text style={style.modalDescription}>
                    A seed phrase is a set of twelve words that contains all the
                    information about your wallet, including your funds. It's
                    like a secret code used to access your entire wallet.
                    {'\n\n'}
                    You must keep your seed phrase secret and safe. If someone
                    gets your seed phrase, they'll gain control over your
                    accounts.
                    {'\n\n'}
                    Save it in a place where only you can access it.{'\n'}
                    If you lose it, not even MetaMask can help you recover it.
                  </Text>
                  <View style={style.modalButtonContainer}>
                    <TouchableOpacity
                      style={style.buttonModal}
                      onPress={() => {
                        setLaterModal(false);
                      }}>
                      <LinearGradient
                        colors={['#6EE7B7', '#3B82F6', '#9333EA']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={style.buttonGradient}>
                        <Text style={style.buttonText}>Understood</Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            </>
          )}
          {laterSecondModal && (
            <>
              <BlurView intensity={50} style={style.blurBg} />
              <Modal
                animationType="slide"
                transparent={true}
                visible={laterSecondModal}
                onRequestClose={() => setLaterSecondModal(false)}>
                <View style={style.modalContent}>
                  <Text style={style.modalText}>Skip Account Security?</Text>
                  <TouchableOpacity
                    onPress={() =>
                      setIsSecondTermsChecked(!isSecondTermsChecked)
                    }
                    style={[
                      style.checkboxContainer,
                      { paddingHorizontal: 20 },
                    ]}>
                    <Ionicons
                      name={
                        isSecondTermsChecked ? 'checkbox' : 'square-outline'
                      }
                      size={24}
                      color={isSecondTermsChecked ? '#6B50E1' : '#ccc'}
                    />
                    <Text style={style.checkboxText}>
                      I dunderstand that if i lose mt seed phrase i will not be
                      able to access my wallet.
                    </Text>
                  </TouchableOpacity>
                  <View style={style.modalButtonsContainer}>
                    <TouchableOpacity
                      style={style.buttonsModal}
                      disabled={isSecondTermsChecked}
                      onPress={() => {
                        setLaterSecondModal(false);
                        setOpenMainModel(false);
                        navigation.navigate('SeedPhrase');
                      }}>
                      <LinearGradient
                        colors={
                          isSecondTermsChecked
                            ? ['#555', '#555']
                            : ['#6EE7B7', '#3B82F6', '#9333EA']
                        }
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={[
                          style.buttonGradient,
                          {
                            opacity: isSecondTermsChecked ? 0.5 : 1,
                          },
                        ]}>
                        <Text style={style.buttonText}>Secure Now</Text>
                      </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={style.buttonsModal}
                      disabled={!isSecondTermsChecked}
                      onPress={() => {
                        setOpenMainModel(false);
                        setLaterSecondModal(false);
                        navigation.navigate('Tabs' as never);
                      }}>
                      <LinearGradient
                        colors={
                          isSecondTermsChecked
                            ? ['#6EE7B7', '#3B82F6', '#9333EA']
                            : ['#555', '#555']
                        }
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={[
                          style.buttonGradient,
                          {
                            opacity: isSecondTermsChecked ? 1 : 0.5,
                          },
                        ]}>
                        <Text style={style.buttonText}>Skip</Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            </>
          )}
        </Modal>
      )}
      {openSecondMainModal && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={openSecondMainModal}
          onRequestClose={() => setOpenSecondMainModal(false)}>
          <View style={style.mainModalContent}>
            <View style={style.secondMainModalTop}>
              <TouchableOpacity
                style={style.arrowBackModal}
                onPress={() => {
                  setOpenSecondMainModal(false);
                  setOpenMainModel(true);
                }}>
                <ArrowBackSvg />
              </TouchableOpacity>
              <Text style={style.modalText}>Secure Your Wallet</Text>
            </View>
            <View style={style.seedPhrasewhyImportant}>
              <Text style={{ color: '#ABABB0' }}>
                Secure your wallet's "
                <TouchableOpacity
                  onPress={() => {
                    setLaterModal(true);
                  }}>
                  <Text style={{ color: '#0B6FFB' }}>Seed Phrase</Text>
                </TouchableOpacity>
                "
              </Text>
              <TouchableOpacity
                style={style.whyImportant}
                onPress={() => {
                  setLaterSecondModal(true);
                }}>
                <InformationSvg />
                <Text style={{ color: '#0B6FFB' }}>Why is it important?</Text>
              </TouchableOpacity>
            </View>
            <View style={style.informationModalBlock}>
              <View style={style.informationModalBlockTop}>
                <Text style={style.modalText}>Manual</Text>
                <Text style={style.modalText}>
                  Security Level:{' '}
                  <Text style={{ color: '#6AD598' }}>Very Strong</Text>
                </Text>
              </View>
              <Text style={{ color: '#ABABB0' }}>
                Write down your seed phrase on a piece of paper and store in a
                safe place.
              </Text>
              <Text style={{ color: '#ABABB0', marginVertical: 20 }}>
                Risks are:{'\n'}• You lose it{'\n'}• You forget where you put it
                {'\n'}• Someone else finds it
              </Text>
            </View>
            <View style={style.informationModalBlock}>
              <View style={style.informationModalBlockTop}>
                <Text style={style.modalText}>
                  Other options: Doesn't have to be paper!
                </Text>
              </View>
              <Text style={{ color: '#ABABB0', marginBottom: 20 }}>
                Tips:{'\n'}• Store in bank vault{'\n'}• Store in a safe{'\n'}•
                Store in multiple secret places
              </Text>
            </View>
            <View style={[style.modalButtonContainer, { marginTop: 40 }]}>
              <TouchableOpacity
                style={style.buttonModal}
                onPress={() => {
                  setOpenSecondMainModal(false);
                  navigation.navigate('SeedPhrase');
                }}>
                <LinearGradient
                  colors={['#6EE7B7', '#3B82F6', '#9333EA']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={style.buttonGradient}>
                  <Text style={style.buttonText}>Next</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
          {laterModal && (
            <>
              <BlurView intensity={50} style={style.blurBg} />
              <Modal
                animationType="slide"
                transparent={true}
                visible={laterModal}
                onRequestClose={() => setLaterModal(false)}>
                <View style={style.modalContent}>
                  <Text style={style.modalText}>What is a "Seed Phrase"</Text>
                  <Text style={style.modalDescription}>
                    A seed phrase is a set of twelve words that contains all the
                    information about your wallet, including your funds. It's
                    like a secret code used to access your entire wallet.
                    {'\n\n'}
                    You must keep your seed phrase secret and safe. If someone
                    gets your seed phrase, they'll gain control over your
                    accounts.
                    {'\n\n'}
                    Save it in a place where only you can access it.{'\n'}
                    If you lose it, not even MetaMask can help you recover it.
                  </Text>
                  <View style={style.modalButtonContainer}>
                    <TouchableOpacity
                      style={style.buttonModal}
                      onPress={() => {
                        setLaterModal(false);
                      }}>
                      <LinearGradient
                        colors={['#6EE7B7', '#3B82F6', '#9333EA']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={style.buttonGradient}>
                        <Text style={style.buttonText}>Understood</Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            </>
          )}
          {laterSecondModal && (
            <>
              <BlurView intensity={50} style={style.blurBg} />
              <Modal
                animationType="slide"
                transparent={true}
                visible={laterSecondModal}
                onRequestClose={() => setLaterSecondModal(false)}>
                <View style={style.modalContent}>
                  <Text style={style.modalText}>Skip Account Security?</Text>
                  <TouchableOpacity
                    onPress={() =>
                      setIsSecondTermsChecked(!isSecondTermsChecked)
                    }
                    style={[
                      style.checkboxContainer,
                      { paddingHorizontal: 20 },
                    ]}>
                    <Ionicons
                      name={
                        isSecondTermsChecked ? 'checkbox' : 'square-outline'
                      }
                      size={24}
                      color={isSecondTermsChecked ? '#6B50E1' : '#ccc'}
                    />
                    <Text style={style.checkboxText}>
                      I dunderstand that if i lose mt seed phrase i will not be
                      able to access my wallet.
                    </Text>
                  </TouchableOpacity>
                  <View style={style.modalButtonsContainer}>
                    <TouchableOpacity
                      style={style.buttonsModal}
                      disabled={isSecondTermsChecked}
                      onPress={() => {
                        setLaterSecondModal(false);
                        setOpenMainModel(false);
                        setOpenSecondMainModal(false);
                        navigation.navigate('SeedPhrase');
                      }}>
                      <LinearGradient
                        colors={
                          isSecondTermsChecked
                            ? ['#555', '#555']
                            : ['#6EE7B7', '#3B82F6', '#9333EA']
                        }
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={[
                          style.buttonGradient,
                          {
                            opacity: isSecondTermsChecked ? 0.5 : 1,
                          },
                        ]}>
                        <Text style={style.buttonText}>Secure Now</Text>
                      </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={style.buttonsModal}
                      disabled={!isSecondTermsChecked}
                      onPress={() => {
                        setOpenMainModel(false);
                        setLaterSecondModal(false);
                        setOpenSecondMainModal(false);
                        navigation.navigate('Tabs' as never);
                      }}>
                      <LinearGradient
                        colors={
                          isSecondTermsChecked
                            ? ['#6EE7B7', '#3B82F6', '#9333EA']
                            : ['#555', '#555']
                        }
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={[
                          style.buttonGradient,
                          {
                            opacity: isSecondTermsChecked ? 1 : 0.5,
                          },
                        ]}>
                        <Text style={style.buttonText}>Skip</Text>
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

export default CreateNewWallet;
