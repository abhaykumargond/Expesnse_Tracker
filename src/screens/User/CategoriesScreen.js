import React, { useContext } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Appbar, Card, Title } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AppContext } from '../../context/AppContext';

const CategoriesScreen = ({ navigation }) => {
  const { categories } = useContext(AppContext);

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content style={styles.cardContent}>
        <MaterialCommunityIcons name={item.icon} size={40} style={styles.icon}/>
        <Title>{item.name}</Title>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Categories" />
      </Appbar.Header>

      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 8,
  },
  card: {
    flex: 1,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
  },
  cardContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
      marginBottom: 8,
  }
});

export default CategoriesScreen;
