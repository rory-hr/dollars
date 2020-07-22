import React from 'react';
import { Text, View, Animated } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Swipeable from 'react-native-gesture-handler/Swipeable';


export default ({ currentDay }) => {
  
  // Styles 
  const { colors } = useTheme();
  
  const styles = {
    container: {
      flexBasis: 100,
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 15,
      width: '100%',
    },
    rowContainer: {
      flexDirection: 'column',
      maxWidth: '100%',
      paddingLeft: 12,
      paddingRight: 12,
      paddingBottom: 8,
      borderColor: colors.light3,
      borderWidth: 1,
      borderLeft: 'none',
      borderRight: 'none'
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      
      width: '100%',
      height: 34,
      borderRadius: 3
    },
    item: {
      fontSize: 20,
    },
    cost: {
      fontSize: 30,
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
    },
    icon: {
      color: 'black',
      backgroundColor: 'blue'
    }
  };

  
  const rows = currentDay.expenses.map((expense, i) => {

    const badges = expense.tags.map((tag, i) => (
      <View key={`badge.${i}`} style={styles.badge}>
        <Text style={styles.badgeText}>{tag}</Text>
      </View>
    ));

    const rightActions = (progress, dragX) => {

      const scale = dragX.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 1],
        extrapolate: 'clamp'
      });

      return (
        <View key={`listItem.${i}`}style={styles.actionsContainer}>
          <View style={styles.action}>
            <Animated.Text style={[styles.icon, { transform: [{scale}] }]}>EDIT</Animated.Text>
          </View>
          <View style={styles.action}>
            <Animated.Text style={[styles.icon, { transform: [{scale}] }]}>DELETE</Animated.Text>
          </View>
        </View>
      );
    };

    return (
      <Swipeable renderRightActions={rightActions}>
        <View style={styles.rowContainer}>
          <View key={`row.${i}`} style={styles.row}>
            <Text style={styles.item}>{expense.item}</Text>
            <Text style={styles.cost}>{expense.cost}</Text>
          </View>
          <View style={styles.badgeContainer}>
            {badges}
          </View>
        </View>
      </Swipeable>
      
    );
  });

  return (
    <View style={styles.container}>
      {rows}
    </View>
  );
};