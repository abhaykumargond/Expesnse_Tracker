import React, { useContext } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { AppContext } from '../../context/AppContext';

const AdminDashboardScreen = ({ navigation }) => {
  const { expenses, users } = useContext(AppContext);

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const userCount = users.length;

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Total Expenses</Title>
          <Paragraph>${totalExpenses.toFixed(2)}</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>User Count</Title>
          <Paragraph>{userCount}</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Recent Activity</Title>
          <Paragraph>User 'john.doe' just added a new expense.</Paragraph>
          <Paragraph>Category 'Travel' was just created.</Paragraph>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    margin: 16,
  },
});

export default AdminDashboardScreen;
