import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { useTheme } from '@react-navigation/native';
import * as utils from '../../../utils/calculations';


export default ({ today, netAllowance, monthlyAllowance, todaysExpenses }) => {
    
  // Styles 
  const { colors } = useTheme();
  
  const styles = {
    container: {
      backgroundColor: colors.light3,
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%',
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 3,
      marginBottom: 5,
      marginTop: 15,
    },
    netAllowance: {
      color: netAllowance >= 0 ? colors.success : colors.error,
    },
    text: {
      fontSize: 18,
    },
    dailyOverview: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      marginTop: 8
    },
    overviewColumn: {
      textAlign: 'center',
      alignItems: 'center'
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{today}</Text>
      <Text h1 style={styles.netAllowance}>{netAllowance}</Text>
      <View style={styles.dailyOverview}>
        <View style={styles.overviewColumn}>
          <Text style={styles.text}>Daily Allowance:</Text>
          <Text h3>{monthlyAllowance}</Text>
        </View>
        <View style={styles.overviewColumn}>
          <Text style={styles.text}>Expenses Today:</Text>
          <Text h3>{todaysExpenses}</Text>
        </View>
      </View>
    </View>
  );
};