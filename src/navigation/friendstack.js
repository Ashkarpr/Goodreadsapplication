import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import FRIENDS from "../screens/innerpages/findfriends";
import FOLLOWING from "../screens/innerpages/findfriends";
import FOLLOWERS from "../screens/innerpages/findfriends";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="FRIENDS" component={FRIENDS} />
        <Tab.Screen name="FOLLOWING" component={FOLLOWING} />
        <Tab.Screen name="FOLLOWERS" component={FOLLOWERS} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
