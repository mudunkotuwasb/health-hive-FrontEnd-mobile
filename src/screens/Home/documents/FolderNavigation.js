import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Documents from './Documents';
import File from './File';

const Stack = createNativeStackNavigator();

function FolderNavigation() {
  return (
    <Stack.Navigator initialRouteName="Documents">
      <Stack.Screen name="Documents" component={Documents} options={{ headerShown: false }}/>
      <Stack.Screen name="file" component={File} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default FolderNavigation;