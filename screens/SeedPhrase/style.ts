import { StyleSheet } from 'react-native';

export const styles = () =>
  StyleSheet.create({
    blurBg: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1,
    },
    stepText: {
      color: '#fff',
      fontSize: 16,
      marginRight: 20,
      marginLeft: 10,
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
    container: {
      flex: 1,
      backgroundColor: '#09080C',
      padding: 20,
      alignItems: 'center',
    },
    title: {
      color: '#FFFFFF',
      fontSize: 24,
      fontWeight: 'bold',
      paddingTop: 20,
      marginBottom: 10,
      textAlign: 'center',
    },
    subtitle: {
      color: '#888888',
      fontSize: 16,
      marginBottom: 20,
      textAlign: 'center',
    },
    seedContainer: {
      alignSelf: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginVertical: 20,
      paddingTop: '10%',
    },
    wordBox: {
      width: '30%',
      margin: 5,
      padding: 10,
      backgroundColor: '#2A2A2A',
      borderRadius: 8,
      alignItems: 'center',
    },
    seedWord: {
      color: '#FFFFFF',
      fontSize: 16,
      textAlign: 'center',
    },
    continueButton: {
      backgroundColor: '#6A0DAD',
      paddingVertical: 15,
      paddingHorizontal: 80,
      borderRadius: 10,
      marginTop: 20,
    },
    disabledButton: {
      backgroundColor: '#444444',
    },
    continueButtonText: {
      color: '#FFFFFF',
      fontSize: 18,
    },
    viewButton: {
      position: 'absolute',
      alignSelf: 'center',
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      borderRadius: 8,
      zIndex: 10,
    },
    viewButtonText: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    buttonGradient: {
      paddingVertical: 15,
      alignItems: 'center',
    },
    button: {
      position: 'absolute',
      bottom: 20,
      width: '70%',
      borderRadius: 50,
      marginBottom: 20,
      overflow: 'hidden',
      alignSelf: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
    },
    confirmationContainer: {
      alignItems: 'center',
      marginVertical: 10,
    },
    instructionText: {
      color: '#888888',
      fontSize: 16,
      marginBottom: 10,
      textAlign: 'center',
    },
    wordIndicesContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: 10,
    },
    indexBox: {
      backgroundColor: '#2A2A2A',
      borderRadius: 8,
      padding: 10,
      marginHorizontal: 5,
      alignItems: 'center',
    },
    indexText: {
      color: '#FFFFFF',
      fontSize: 16,
    },
    wordSelection: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: 20,
    },
    errorText: {
      color: 'red',
      textAlign: 'center',
      marginVertical: 50,
    },
    optionalContainer: {
      padding: 20,
    },
    chosenWords: {
      backgroundColor: '#131118',
      padding: 20,
      borderRadius: 20,
    },
    selectedWordBox: {
      backgroundColor: '#1C1924',
    },
    selectedWordText: {
      color: '#2F2A3C',
    },
    checkSvg: {
      position: 'absolute',
      top: '15%',
      alignItems: 'center',
      padding: 40,
    },
    checkTitle: {
      color: '#FFFFFF',
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 28,
      textAlign: 'center',
      marginBottom: 20
    },
    checkDescription: {
      color: '#A6A0BB',
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 24,
      textAlign: 'center',
    },
  });
