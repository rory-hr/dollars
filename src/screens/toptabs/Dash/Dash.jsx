import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';
import moment from 'moment';
import * as utils from '../../../utils/calculations';


// Components
import Overview from './Overview';
import Table from './Table';

export default () => {

  // Data
  const now = moment();
  const data = useSelector(state => state.data);
  const currentYear = data[data.length - 1];
  const currentMonth = currentYear.months[parseInt(now.format('M')) - 1];
  const netAllowance = utils.netAllowance(currentMonth, parseInt(moment().format('D')));
  const today = moment().format('MMMM D');
  const monthlyAllowance = utils.dailyAllowance(currentMonth);
  const todaysDate = parseInt(moment().format('D'));
  const currentDay = currentMonth.days[todaysDate - 1];
  const todaysExpenses = utils.sumExpenses(currentDay);

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
      <Overview netAllowance={netAllowance} today={today} monthlyAllowance={monthlyAllowance} todaysExpenses={todaysExpenses}/>
      <Table currentDay={currentDay}/>
    </View>
  );
};
