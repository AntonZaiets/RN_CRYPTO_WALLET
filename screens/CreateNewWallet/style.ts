import { StyleSheet } from 'react-native';

export const styles = () =>
  StyleSheet.create({
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
    secondMainModalTop: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    arrowBackModal: {
      position: 'absolute',
      left: '-25%',
    },
    seedPhrasewhyImportant: {
      alignItems: 'center',
    },
    whyImportant: {
      marginTop: 15,
      flexDirection: 'row',
      alignItems: 'center',
    },
    informationModalBlock: {
      backgroundColor: '#1C1924',
      borderRadius: 20,
      paddingHorizontal: 20,
      width: '94%',
      flexDirection: 'column',
      marginTop: 30,
    },
    informationModalBlockTop: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
