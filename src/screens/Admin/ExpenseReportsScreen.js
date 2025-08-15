import React, { useContext } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory-native';
import { AppContext } from '../../context/AppContext';

const ExpenseReportsScreen = ({ navigation }) => {
  const { expenses } = useContext(AppContext);

  // Group expenses by category for the chart
  const expensesByCategory = expenses.reduce((acc, expense) => {
    const category = expense.category;
    if (!acc[category]) {
      acc[category] = 0;
    }
    acc[category] += expense.amount;
    return acc;
  }, {});

  const chartData = Object.keys(expensesByCategory).map(category => ({
    category: category,
    total: expensesByCategory[category],
  }));

  // Calculate summary stats
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const averageExpense = expenses.length > 0 ? totalExpenses / expenses.length : 0;

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Expenses by Category</Title>
          {chartData.length > 0 ? (
            <VictoryChart width={350} theme={VictoryTheme.material}>
              <VictoryBar data={chartData} x="category" y="total" />
            </VictoryChart>
          ) : (
            <Paragraph>No data for reports.</Paragraph>
          )}
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Summary</Title>
          <Paragraph>Total Expenses: ${totalExpenses.toFixed(2)}</Paragraph>
          <Paragraph>Average Expense: ${averageExpense.toFixed(2)}</Paragraph>
        </Card.Content>
      </Card>

      <View style={styles.filterButtons}>
        <Button mode="contained" onPress={() => console.log('Filter by User')}>By User</Button>
        <Button mode="contained" onPress={() => console.log('Filter by Date')}>By Date</Button>
      </View>
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
  filterButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  }
});

export default ExpenseReportsScreen;
