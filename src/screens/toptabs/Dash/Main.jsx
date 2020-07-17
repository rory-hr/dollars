import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';
import * as utils from '../../../utils/calculations';


export default () => {
  
  // Styles 
  const { colors } = useTheme();
  
  const styles = {
    container: {
      flexBasis: 100,
      backgroundColor: colors.light3,
      alignItems: 'center',
      justifyContent: 'center',
      width: 300,
      borderRadius: 3,
      marginBottom: 5,
      marginTop: 15,
    }
  };

  return (
    <View style={styles.container}>
      <Text h2>MAIN</Text>
    </View>
  );
};