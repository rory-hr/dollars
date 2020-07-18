import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';


export default () => {
  
  // Styles 
  const { colors } = useTheme();
  
  const styles = {
    container: {
      flexBasis: 100,
      backgroundColor: colors.light3,
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%',
      borderRadius: 3,
    }
  };

  return (
    <View style={styles.container}>
      <Text>Expenses</Text>
    </View>
  );
};