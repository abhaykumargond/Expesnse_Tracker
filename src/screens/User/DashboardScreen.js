import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, Card, Title, Paragraph, Button } from 'react-native-paper';
import { VictoryPie } from 'victory-native';
import { AppContext } from '../../context/AppContext';

const DashboardScreen = ({ navigation }) => {
  const { expenses } = useContext(AppContext);

  // Calculate total expenses
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

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
    x: category,
    y: expensesByCategory[category],
  }));

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Dashboard" />
      </Appbar.Header>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Monthly Expense Summary</Title>
          <Paragraph>Total: ${totalExpenses.toFixed(2)}</Paragraph>
        </Card.Content>
      </Card>

      <View style={styles.chartContainer}>
        {chartData.length > 0 ? (
          <VictoryPie
            data={chartData}
            colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
            innerRadius={50}
          />
        ) : (
          <Paragraph>No expense data to display.</Paragraph>
        )}
      </View>

      <View style={styles.quickLinks}>
        <Button mode="contained" onPress={() => navigation.navigate('AddExpense')} style={styles.button}>
          Add Expense
        </Button>
        <Button mode="outlined" onPress={() => navigation.navigate('ExpensesTab')} style={styles.button}>
          View Expenses
        </Button>
      </View>
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
  chartContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  quickLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  button: {
    flex: 1,
    marginHorizontal: 8,
  }
});

export default DashboardScreen;
