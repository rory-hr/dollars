import React, { useState, createRef } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';
import moment from 'moment';
import * as utils from '../../../utils/calculations';
import { Text, Input, Overlay, Icon, Button } from 'react-native-elements';


// Components
import Overview from './Overview';
import Table from './Table';
import TagInput from 'react-native-tag-input';
import { addExpense } from '../../../actions';

export default () => {

  // Redux
  const dispatch = useDispatch();

  // Add Expense Dialog Condition
  const [show, setShow] = useState(false);
  const [tags, setTags] = useState(['do', 'these', 'work']);
  const [item, setItem] = useState('');
  const [cost, setCost] = useState();

  // Data
  const now = moment();
  const data = useSelector(state => state.data);
  const currentYear = data[data.length - 1];
  const currentMonth = currentYear.months[parseInt(now.format('M')) - 1];
  const netAllowance = utils.netAllowance(currentMonth, parseInt(moment().format('D')));
  const today = moment().format('MMMM D');
  const monthlyAllowance = utils.dailyAllowance(currentMonth);
  const todaysDate = parseInt(moment().format('D'));
  const currentDay = currentMonth.days[todaysDate - 2];
  const todaysExpenses = utils.sumExpenses(currentDay);

  // Styles
  const { colors } = useTheme();

  const styles = {
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    addIcon: {
      backgroundColor: colors.dark7,
      borderRadius: 50,
      width: 70,
      height: 70,
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 50,
      position: 'sticky',
      top: '45%',
    },
    title: {
      fontSize: 20,
      textAlign: 'center'
    },
    label: {

    },
    input: {
      width: 300
    },
    badgeContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    badge: {
      backgroundColor: colors.blue,
      borderRadius: 4,
      width: 'auto',
      height: 28,
      marginRight: 5,
      paddingLeft: 6,
      marginBottom: 8,
      paddingRight: 6,
      justifyContent: 'center',
      alignItems: 'center'
    },
    badgeText: {
      color: colors.light1,
      fontSize: 20
    },
    buttonContainer: {
      marginTop: 20,
      margin: 'auto',
      position: 'sticky',
      top: '90%',
      right: '90%'
    },
    overlay: {
      position: 'absolute',
      top: 95,
      justifyContent: 'center',
      display: 'flex'

    },
    formContainer: {
      width: '90%',
    },
    formIcon: {
      marginRight: 8
    }
  };

  // Event Handlers
  const handleAdd = (e) => {
    setShow(true)
  };

  const closeDialog = () => {
    setShow(false);
  };

  const submitExpense = (e) => {
    const time = { year: currentYear.year, month: currentMonth.month,  day: currentDay.day};
    const expense = { item, cost, tags };
    dispatch(addExpense(time, expense));
  };

  const itemChange = (e) => {
    setItem(e.nativeEvent.text);
  };

  const costChange = (e) => {
    setCost(parseInt(e.nativeEvent.text));
  };

  const tagsRef = createRef();
  const tagsChange = (e) => {
    setTags([ ...tags, e.nativeEvent.text ]);
    tagsRef.current.input.clear();
  };

  // Icons
  const costIcon = <Icon name="money" type="font-awesome" containerStyle={styles.formIcon}/>
  const itemIcon = <Icon name="shopping-basket" type="font-awesome" containerStyle={styles.formIcon}/>
  const tagIcon = <Icon name="hashtag" type="font-awesome" containerStyle={styles.formIcon}/>

  // TagList
  const allTags = tags.map((tag, i) => {

    const handleTagPress = () => {
      setTags(tags.filter(text => text === tag));
    };

    return (
      <View onPress={handleTagPress} key={`tag.${i}`} style={styles.badge}>
        <Text style={styles.badgeText}>{tag}</Text>
      </View>
    );
  });

  return (
    <View style={styles.container}>
      <Overview netAllowance={netAllowance} today={today} monthlyAllowance={monthlyAllowance} todaysExpenses={todaysExpenses}/>
      <Table currentDay={currentDay}/>
      <Icon color={colors.light1} containerStyle={styles.addIcon} name="add" onPress={handleAdd} size={40}/>

      <Overlay isVisible={show} overlayStyle={styles.overlay} onBackdropPress={closeDialog}>
        <View style={styles.formContainer}>
          <Input onChange={itemChange} containerStyle={styles.input} placeholder="Breakfast? A hammer?" leftIcon={itemIcon} autoFocus/>
          <Input onChange={costChange} containerStyle={styles.input} placeholder="34.89" leftIcon={costIcon}/>
          <Input ref={tagsRef} onSubmitEditing={tagsChange} containerStyle={styles.input} placeholder="Transportation? Groceries?" leftIcon={tagIcon}/>
          <View style={styles.badgeContainer}>
            {allTags}
          </View>
          <Button containerStyle={styles.buttonContainer} title="ADD" onPress={submitExpense}/>
        </View>
      </Overlay>

    </View>
  );
};
