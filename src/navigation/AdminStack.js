import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AdminDashboardScreen from '../screens/Admin/AdminDashboardScreen';
import UserManagementScreen from '../screens/Admin/UserManagementScreen';
import ExpenseReportsScreen from '../screens/Admin/ExpenseReportsScreen';
import CategoryManagementScreen from '../screens/Admin/CategoryManagementScreen';
import AdminSettingsScreen from '../screens/Admin/AdminSettingsScreen';

const Drawer = createDrawerNavigator();

const AdminStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        drawerIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'AdminDashboard') {
            iconName = 'view-dashboard-variant';
          } else if (route.name === 'UserManagement') {
            iconName = 'account-group';
          } else if (route.name === 'ExpenseReports') {
            iconName = 'chart-bar';
          } else if (route.name === 'CategoryManagement') {
            iconName = 'shape';
          } else if (route.name === 'AdminSettings') {
            iconName = 'cog';
          }
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Drawer.Screen name="AdminDashboard" component={AdminDashboardScreen} options={{ title: 'Dashboard' }} />
      <Drawer.Screen name="UserManagement" component={UserManagementScreen} options={{ title: 'User Management' }} />
      <Drawer.Screen name="ExpenseReports" component={ExpenseReportsScreen} options={{ title: 'Expense Reports' }} />
      <Drawer.Screen name="CategoryManagement" component={CategoryManagementScreen} options={{ title: 'Category Management' }} />
      <Drawer.Screen name="AdminSettings" component={AdminSettingsScreen} options={{ title: 'Settings' }} />
    </Drawer.Navigator>
  );
};

export default AdminStack;
