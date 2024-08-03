import React from 'react';
import {Platform, StyleSheet, UIManager} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {ApolloProvider} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import StatusBar from '../../common/ui/components/StatusBar';
import theme from '../../common/ui/theme';
import {apolloClient} from '../apollo/client';
import AppNavigator from '../navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import useConnect from './connect';
import 'react-native-gesture-handler';
import '../../core/i18n';
import {ProductsProvider} from '../../views/AddFreshProduct/ProductsContext';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const styles = StyleSheet.create({
  gestureHandler: {
    flex: 1,
  },
});

export const Root: FC = () => {
  const {ready} = useConnect();

  if (!ready) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <SafeAreaProvider>
          <GestureHandlerRootView style={styles.gestureHandler}>
            <ProductsProvider>
              <NavigationContainer>
                <StatusBar />
                <AppNavigator />
              </NavigationContainer>
            </ProductsProvider>
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </ApolloProvider>
    </ThemeProvider>
  );
};
