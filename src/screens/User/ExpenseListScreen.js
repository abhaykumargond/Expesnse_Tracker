import React, { useContext } from 'react';
import { View, StyleSheet, SectionList } from 'react-native';
import { Appbar, List, Paragraph } from 'react-native-paper';
import { AppContext } from '../../context/AppContext';

const ExpenseListScreen = ({ navigation }) => {
  const { expenses } = useContext(AppContext);

  // Group expenses by date
  const groupedExpenses = expenses.reduce((acc, expense) => {
    const date = expense.date;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(expense);
    return acc;
  }, {});

  // Create sections for SectionList, sorted by date
  const sections = Object.keys(groupedExpenses)
    .sort((a, b) => new Date(b) - new Date(a)) // Sort dates descending
    .map(date => ({
      title: date,
      data: groupedExpenses[date].sort((a, b) => b.id.localeCompare(a.id)), // Sort expenses by time added
    }));

  const renderItem = ({ item }) => (
    <List.Item
      title={`${item.category}: $${item.amount.toFixed(2)}`}
      description={item.notes}
      onPress={() => navigation.navigate('ExpenseDetail', { expenseId: item.id })}
      left={props => <List.Icon {...props} icon="cash" />}
    />
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <List.Subheader>{title}</List.Subheader>
  );

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Expense List" />
      </Appbar.Header>

      {sections.length > 0 ? (
        <SectionList
          sections={sections}
          keyExtractor={(item, index) => item.id + index}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
        />
      ) : (
        <View style={styles.emptyContainer}>
            <Paragraph>No expenses recorded yet.</Paragraph>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default ExpenseListScreen;
