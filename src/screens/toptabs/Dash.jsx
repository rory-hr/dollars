import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default () => {

  const budget = useSelector(state => state.budget);

  return (
    <View style={styles.container}>
      <Text>{budget[0].year}</Text>
    </View>
  );
};
