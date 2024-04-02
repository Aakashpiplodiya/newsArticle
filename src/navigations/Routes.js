// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationStrings from './navigationStrings';
import DashBoardScreen from '../screens/DashBoardScreen';
import DetailViewScreen from '../screens/DetailViewScreen';



const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown : false
      }}>
        <Stack.Screen name={navigationStrings.DASHBOARD} component={DashBoardScreen} />
        <Stack.Screen name={navigationStrings.DETAIL_VIEW} component={DetailViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;