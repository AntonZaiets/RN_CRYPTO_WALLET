import { StyleSheet } from 'react-native';

export const styles = () =>
  StyleSheet.create({
    switchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    switchLabel: {
      color: '#fff',
      fontSize: 16,
    },
    container: {
      backgroundColor: '#09080C',
      flex: 1,
    },
    headText: {
      color: '#FFFFFF',
      fontWeight: 500,
      fontSize: 16,
      lineHeight: 24,
      textAlign: 'center',
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
    mainView: {
      padding: 20,
    },
    buttonContainer: {
      justifyContent: 'flex-end',
      alignItems: 'center',
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
      color: '#fff',
      fontSize: 18,
    },
  });
