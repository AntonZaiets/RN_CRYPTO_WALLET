import * as LocalAuthentication from 'expo-local-authentication';

export const authenticateWithFaceID = async () => {
  const hasHardware = await LocalAuthentication.hasHardwareAsync();
  const isEnrolled = await LocalAuthentication.isEnrolledAsync();

  if (!hasHardware || !isEnrolled) {
    alert('Face ID/biometric authentication is not available on this device.');
    return false;
  }

  const result = await LocalAuthentication.authenticateAsync({
    promptMessage: 'Authenticate with Face ID',
    fallbackLabel: 'Use Passcode',
  });

  if (result.success) {
    alert('Authentication successful!');
    return true;
  } else {
    alert('Authentication failed. Please try again.');
    return false;
  }
};
