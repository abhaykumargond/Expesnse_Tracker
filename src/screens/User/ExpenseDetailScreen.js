import React, { useContext } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Appbar, Card, Title, Paragraph, Button } from 'react-native-paper';
import { AppContext } from '../../context/AppContext';

const ExpenseDetailScreen = ({ route, navigation }) => {
  const { expenses, deleteExpense } = useContext(AppContext);
  const { expenseId } = route.params;

  const expense = expenses.find(e => e.id === expenseId);

  const handleDelete = () => {
    Alert.alert(
      "Delete Expense",
      "Are you sure you want to delete this expense?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "OK", onPress: () => {
            deleteExpense(expenseId);
            navigation.goBack();
          }
        }
      ]
    );
  };

  if (!expense) {
    return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="Not Found" />
        </Appbar.Header>
        <Paragraph style={styles.errorText}>Expense not found. It might have been deleted.</Paragraph>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Expense Detail" />
      </Appbar.Header>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Category: {expense.category}</Title>
          <Paragraph>Amount: ${expense.amount.toFixed(2)}</Paragraph>
          <Paragraph>Date: {expense.date}</Paragraph>
          <Paragraph>Notes: {expense.notes}</Paragraph>
        </Card.Content>
        <Card.Actions>
            <Button
              icon="delete"
              mode="contained"
              onPress={handleDelete}
              style={styles.deleteButton}
            >
                Delete
            </Button>
        </Card.Actions>
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
  deleteButton: {
    backgroundColor: 'red',
    marginRight: 8,
  },
  errorText: {
    textAlign: 'center',
    marginTop: 20,
  }
});

export default ExpenseDetailScreen;
