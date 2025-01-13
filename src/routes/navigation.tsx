import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../modules/home';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="home">
                <Stack.Screen name="home"  component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export { Navigation };
