import React, { useContext, useState } from 'react';
import { View, StyleSheet, FlatList, Alert } from 'react-native';
import { List, Button, IconButton, TextInput, Dialog, Portal } from 'react-native-paper';
import { AppContext } from '../../context/AppContext';

const CategoryManagementScreen = ({ navigation }) => {
  const { categories, addCategory, deleteCategory } = useContext(AppContext);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [dialogVisible, setDialogVisible] = useState(false);

  const showDialog = () => setDialogVisible(true);
  const hideDialog = () => setDialogVisible(false);

  const handleAddCategory = () => {
    if (newCategoryName.trim()) {
      addCategory({ name: newCategoryName.trim(), icon: 'shape' }); // Default icon
      setNewCategoryName('');
      hideDialog();
    }
  };

  const handleDeleteCategory = (categoryId) => {
    Alert.alert("Delete Category", "Are you sure?", [
      { text: "Cancel" },
      { text: "OK", onPress: () => deleteCategory(categoryId) }
    ]);
  };

  const renderItem = ({ item }) => (
    <List.Item
      title={item.name}
      left={() => <List.Icon icon={item.icon} />}
      right={() => (
        <View style={{ flexDirection: 'row' }}>
          <IconButton icon="pencil" onPress={() => console.log('Edit', item.name)} />
          <IconButton icon="delete" onPress={() => handleDeleteCategory(item.id)} />
        </View>
      )}
    />
  );

  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={showDialog} style={styles.addButton}>
        Add New Category
      </Button>

      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <Portal>
        <Dialog visible={dialogVisible} onDismiss={hideDialog}>
          <Dialog.Title>Add New Category</Dialog.Title>
          <Dialog.Content>
            <TextInput
              label="Category Name"
              value={newCategoryName}
              onChangeText={setNewCategoryName}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Cancel</Button>
            <Button onPress={handleAddCategory}>Add</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addButton: {
    margin: 16,
  }
});

export default CategoryManagementScreen;
