import { StyleSheet } from 'react-native';

export const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#09080C',
      padding: 20,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 10,
    },
    username: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    network: {
      color: '#666',
      fontSize: 14,
    },
    qrIcon: {
      marginLeft: 'auto',
    },
    balanceContainer: {
      alignItems: 'center',
      marginVertical: 20,
    },
    balanceText: {
      color: '#fff',
      fontSize: 32,
      fontWeight: 'bold',
    },
    balanceUSD: {
      color: '#fff',
      fontSize: 16,
    },
    gain: {
      color: '#10B981',
    },
    actionButtons: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 20,
    },
    actionButton: {
      alignItems: 'center',
    },
    actionText: {
      color: '#fff',
      marginTop: 5,
    },
    tokenList: {
      height: '25%',
      backgroundColor: '#131118',
      padding: 10,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      margin: 0,
    },
    tokenItem: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#131118',
      padding: 10,
      borderRadius: 8,
      marginBottom: 10,
    },
    tokenIcon: {
      width: 24,
      height: 24,
      marginRight: 10,
    },
    tokenName: {
      color: '#fff',
      fontSize: 16,
    },
    tokenPrice: {
      color: '#666',
      fontSize: 14,
    },
    tokenGain: {
      color: '#10B981',
    },
    tokenLoss: {
      color: '#EF4444',
    },
    tokenBalance: {
      color: '#fff',
      fontSize: 16,
      marginLeft: 'auto',
    },
    button: {
      width: '50%',
      borderRadius: 30,
      marginBottom: 20,
      overflow: 'hidden',
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
    },
    buttonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonGradient: {
      paddingVertical: 15,
      alignItems: 'center',
    },
  });
