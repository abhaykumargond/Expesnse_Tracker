import React, { useContext } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { DataTable, Button } from 'react-native-paper';
import { AppContext } from '../../context/AppContext';

const UserManagementScreen = ({ navigation }) => {
  const { users } = useContext(AppContext);

  return (
    <ScrollView style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Email</DataTable.Title>
          <DataTable.Title>Actions</DataTable.Title>
        </DataTable.Header>

        {users.map(user => (
          <DataTable.Row key={user.id}>
            <DataTable.Cell>{user.name}</DataTable.Cell>
            <DataTable.Cell>{user.email}</DataTable.Cell>
            <DataTable.Cell>
              <Button onPress={() => console.log('Edit user', user.id)} mode="text">Edit</Button>
              <Button onPress={() => console.log('Delete user', user.id)} mode="text" color="red">Delete</Button>
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default UserManagementScreen;
