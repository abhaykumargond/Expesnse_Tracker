import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import DashboardScreen from '../screens/User/DashboardScreen';
import AddExpenseScreen from '../screens/User/AddExpenseScreen';
import ExpenseListScreen from '../screens/User/ExpenseListScreen';
import ExpenseDetailScreen from '../screens/User/ExpenseDetailScreen';
import CategoriesScreen from '../screens/User/CategoriesScreen';
import ProfileScreen from '../screens/User/ProfileScreen';
import SettingsScreen from '../screens/User/SettingsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const UserTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'DashboardTab') {
            iconName = 'view-dashboard';
          } else if (route.name === 'ExpensesTab') {
            iconName = 'format-list-bulleted';
          } else if (route.name === 'CategoriesTab') {
            iconName = 'shape';
          } else if (route.name === 'ProfileTab') {
            iconName = 'account';
          }
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="DashboardTab" component={DashboardScreen} options={{ title: 'Dashboard' }} />
      <Tab.Screen name="ExpensesTab" component={ExpenseListScreen} options={{ title: 'Expenses' }} />
      <Tab.Screen name="CategoriesTab" component={CategoriesScreen} options={{ title: 'Categories' }} />
      <Tab.Screen name="ProfileTab" component={ProfileScreen} options={{ title: 'Profile' }} />
    </Tab.Navigator>
  );
};

const UserStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={UserTabNavigator} />
      <Stack.Screen name="AddExpense" component={AddExpenseScreen} />
      <Stack.Screen name="ExpenseDetail" component={ExpenseDetailScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default UserStack;
