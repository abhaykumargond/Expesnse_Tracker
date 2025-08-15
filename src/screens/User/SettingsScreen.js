import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, List, Switch, Divider } from 'react-native-paper';
import { AppContext } from '../../context/AppContext';

const SettingsScreen = ({ navigation }) => {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Settings" />
      </Appbar.Header>

      <List.Section>
        <List.Subheader>Appearance</List.Subheader>
        <List.Item
          title="Dark Theme"
          right={() => <Switch value={theme === 'dark'} onValueChange={toggleTheme} />}
        />
        <Divider />
        <List.Subheader>Preferences</List.Subheader>
        <List.Item
          title="Currency"
          description="USD"
          onPress={() => console.log('Change Currency')}
          right={props => <List.Icon {...props} icon="chevron-right" />}
        />
      </List.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SettingsScreen;
