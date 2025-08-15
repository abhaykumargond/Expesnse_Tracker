import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { List, Switch, Divider } from 'react-native-paper';

const AdminSettingsScreen = ({ navigation }) => {
  const [isMaintenanceMode, setIsMaintenanceMode] = useState(false);

  return (
    <View style={styles.container}>
      <List.Section>
        <List.Subheader>General</List.Subheader>
        <List.Item
          title="Maintenance Mode"
          description="Temporarily disable user access"
          right={() => <Switch value={isMaintenanceMode} onValueChange={setIsMaintenanceMode} />}
        />
        <Divider />
        <List.Subheader>Advanced</List.Subheader>
        <List.Item
          title="Permissions"
          onPress={() => console.log('Navigate to Permissions')}
          right={props => <List.Icon {...props} icon="chevron-right" />}
        />
        <List.Item
          title="API Settings"
          onPress={() => console.log('Navigate to API Settings')}
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

export default AdminSettingsScreen;
