import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, TextInput, Button, Card } from 'react-native-paper';
import { AppContext } from '../../context/AppContext';

const AddExpenseScreen = ({ navigation }) => {
  const { addExpense } = useContext(AppContext);
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');

  const handleAddExpense = () => {
    if (!amount || !category || !date) {
      alert('Please fill in all required fields.');
      return;
    }
    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount)) {
        alert('Please enter a valid amount.');
        return;
    }

    addExpense({
      amount: numericAmount,
      category,
      date,
      notes,
    });

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Add Expense" />
      </Appbar.Header>

      <Card style={styles.card}>
        <Card.Content>
          <TextInput
            label="Amount"
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
            style={styles.input}
          />
          <TextInput
            label="Category"
            value={category}
            onChangeText={setCategory}
            style={styles.input}
          />
          <TextInput
            label="Date (YYYY-MM-DD)"
            value={date}
            onChangeText={setDate}
            style={styles.input}
          />
          <TextInput
            label="Notes"
            value={notes}
            onChangeText={setNotes}
            multiline
            style={styles.input}
          />
          <Button mode="contained" onPress={handleAddExpense} style={styles.button}>
            Add Expense
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    margin: 16,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  }
});

export default AddExpenseScreen;
