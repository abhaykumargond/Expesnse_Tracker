import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, Avatar, Title, Paragraph, Button } from 'react-native-paper';
import { AppContext } from '../../context/AppContext';

const ProfileScreen = ({ navigation }) => {
  const { users } = useContext(AppContext);
  const currentUser = users[0] || { name: 'Anonymous', email: ''}; // Fallback for empty user list

  const getInitials = (name) => {
    if (!name) return '';
    return name.split(' ').map(n => n[0]).join('');
  }

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Profile" />
      </Appbar.Header>

      <View style={styles.profileContainer}>
        <Avatar.Text size={100} label={getInitials(currentUser.name)} />
        <Title style={styles.title}>{currentUser.name}</Title>
        <Paragraph>{currentUser.email}</Paragraph>
      </View>

      <Button mode="contained" onPress={() => navigation.navigate('Settings')} style={styles.button}>
        Go to Settings
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    marginTop: 16,
  },
  button: {
    margin: 16,
  }
});

export default ProfileScreen;
