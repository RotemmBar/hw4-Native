import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import MainPage from './Pages/MainPage';
import Work from './Pages/Work';
import Ideas from './Pages/Ideas';
import Personal from './Pages/Personal';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      
<NavigationContainer>
<Stack.Navigator initialRouteName="MainPage">
<Stack.Screen name="MainPage" component={MainPage} />
<Stack.Screen name="Work" component={Work} />
<Stack.Screen name="Ideas" component={Ideas} />
<Stack.Screen name="Personal" component={Personal} />
{/* <Stack.Screen name="NewNote" component={NewNote} /> */}
</Stack.Navigator>
</NavigationContainer>


   
  );
};
