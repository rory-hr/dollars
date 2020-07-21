import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';


export default ({ currentDay }) => {
  
  // Styles 
  const { colors } = useTheme();
  
  const styles = {
    container: {
      flexBasis: 100,
      backgroundColor: colors.light3,
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 15,
      width: '90%',
      borderRadius: 3,
    },
    rowContainer: {
      flexDirection: 'column',
      maxWidth: '95%',
      paddingLeft: 4,
      paddingRight: 4,
      paddingBottom: 4,
      backgroundColor: colors.light1,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      
      width: '95%',
      height: 34,
      borderRadius: 3
    },
    item: {
      fontSize: 20,
    },
    cost: {
      fontSize: 30,
      color: colors.error,
    },
    badgeContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    badge: {
      backgroundColor: colors.blue,
      borderRadius: 4,
      width: 'auto',
      height: 23,
      marginRight: 5,
      paddingLeft: 6,
      paddingRight: 6,
      justifyContent: 'center',
      alignItems: 'center'
    },
    badgeText: {
      color: colors.light1
    }
  };

  
  const rows = currentDay.expenses.map((expense, i) => {

    const badges = expense.tags.map((tag, i) => (
      <View key={`badge.${i}`} style={styles.badge}>
        <Text style={styles.badgeText}>{tag}</Text>
      </View>
    ));

    return (
      <View style={styles.rowContainer}>
        <View key={`row.${i}`} style={styles.row}>
          <Text style={styles.item}>{expense.item}</Text>
          <Text style={styles.cost}>{expense.cost}</Text>
        </View>
        <View style={styles.badgeContainer}>
          {badges}
        </View>
      </View>
    );
  }
  );

  return (
    <View style={styles.container}>
      {rows}
    </View>
  );
};