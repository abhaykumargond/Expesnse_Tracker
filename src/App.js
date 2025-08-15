import React, { useContext } from 'react';
import { Provider as PaperProvider, DefaultTheme, DarkTheme } from 'react-native-paper';
import { NavigationContainer, DefaultTheme as NavigationDefaultTheme, DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
import MainNavigator from './navigation/MainNavigator';
import { AppContext, AppProvider } from './context/AppContext';

// This component will have access to the context
const AppContent = () => {
  const { theme } = useContext(AppContext);

  const paperTheme = theme === 'dark' ? DarkTheme : DefaultTheme;
  const navigationTheme = theme === 'dark' ? NavigationDarkTheme : NavigationDefaultTheme;

  return (
    <PaperProvider theme={paperTheme}>
      <NavigationContainer theme={navigationTheme}>
        <MainNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
