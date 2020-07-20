import React from 'react';
import { useDispatch } from 'react-redux';
import { View } from 'react-native';
import { Overlay, Input, Text } from 'react-native-elements';

export default ({ isVisible }) => {

  // Styles
  const styles = {
    title: {

    },
    label: {

    }
  };


  return (
    <Overlay isVisible={isVisible} style={styles.backDrop}>
      <View>
        <Text style={styles.title}>Expense Info:</Text>
        <Input placeHolder="Breakfast? A hammer?"/>
        <Input placeHolder="34.89"/>
      </View>
    </Overlay>
  );
};
