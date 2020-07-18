import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { useTheme } from '@react-navigation/native';
import * as utils from '../../../utils/calculations';
import { clearUpdateCacheExperimentalAsync } from 'expo-updates';


export default () => {


  // Data
  const now = moment();
  const data = useSelector(state => state.data);
  // console.dir(data);
  const currentYear = data[data.length - 1];
  const currentMonth = currentYear.months[parseInt(now.format('M')) - 1];
  const netAllowance = utils.netAllowance(currentMonth, parseInt(moment().format('D')));
  const today = moment().format('MMMM D');
  const monthlyAllowance = utils.dailyAllowance(currentMonth);
  const todaysDate = parseInt(moment().format('D'));
  // console.log(currentMonth.days);
  // const todaysExpenses = utils.sumExpenses(currentMonth.days[todaysDate - 1]);
  const todaysExpenses = 33.13;

  // console.dir(currentYear);
  // const todaysExpenses = utils.sumExpenses();

    
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
    today: {
      
    },
    dailyOverview: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%'
    },
    overviewColumn: {
      textAlign: 'center'
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.today}>{today}</Text>
      <Text h1 style={styles.netAllowance}>{netAllowance}</Text>
      <View style={styles.dailyOverview}>
        <View style={styles.overviewColumn}>
          <Text>Daily Allowance:</Text>
          <Text h3>{monthlyAllowance}</Text>
        </View>
        <View style={styles.overviewColumn}>
          <Text>Expenses Today:</Text>
          <Text h3>{todaysExpenses}</Text>
        </View>
      </View>
    </View>
  );
};