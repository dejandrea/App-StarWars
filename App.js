import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from './components/Tela00';
import TelaTrilogia01 from './components/Tela01';
import TelaTrilogia02 from './components/Tela02';
import TelaTrilogia03 from './components/Tela03';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tela Inicial" component={TelaInicial} />
        <Stack.Screen name="Trilogia 1" component={TelaTrilogia01} />
        <Stack.Screen name="Trilogia 2" component={TelaTrilogia02} />
        <Stack.Screen name="Trilogia 3" component={TelaTrilogia03} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
