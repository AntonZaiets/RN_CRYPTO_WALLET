import { StyleSheet } from 'react-native';

export const styles = () =>
  StyleSheet.create({
    modalContainer: {
      justifyContent: 'flex-end',
      margin: 0,
    },
    modalContent: {
      height: '70%',
      backgroundColor: '#131118',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      padding: 15,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
      marginTop: 10,
    },
    searchInput: {
      color: '#fff',
      padding: 10,
      borderBottomColor: '#333',
      borderBottomWidth: 1,
      flex: 1,
    },
    searchIcon: {
      marginLeft: 10,
    },
    coinItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      justifyContent: 'space-between',
    },
    coinIcon: {
      width: 24,
      height: 24,
      marginRight: 10,
    },
    coinDetails: {
      flex: 1,
    },
    coinName: {
      color: '#fff',
    },
    coinPrice: {
      color: '#666',
    },
    checkmarkIcon: {
      width: 24,
      height: 24,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
