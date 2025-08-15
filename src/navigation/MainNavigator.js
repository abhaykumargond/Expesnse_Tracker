import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';

import UserStack from './UserStack';
import AdminStack from './AdminStack';

const Stack = createStackNavigator();

// This is the initial screen that lets the user choose their path.
const ChooserScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Button
      mode="contained"
      onPress={() => navigation.navigate('UserApp')}
      style={styles.button}
    >
      User App
    </Button>
    <Button
      mode="contained"
      onPress={() => navigation.navigate('AdminApp')}
      style={styles.button}
    >
      Admin Panel
    </Button>
  </View>
);

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Chooser" component={ChooserScreen} />
      <Stack.Screen name="UserApp" component={UserStack} />
      <Stack.Screen name="AdminApp" component={AdminStack} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  button: {
    width: '80%',
    marginVertical: 10,
  },
});

export default MainNavigator;
