import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';


// Components
import Main from './Main';
import Expenses from './Expenses';

export default () => {

  // Style
  const { colors } = useTheme();

  const styles = {
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'flex-start',
    }
  };

  

  return (
    <View style={styles.container}>
      <Main />
      <Expenses />
    </View>
  );
};
