import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Text, View } from 'react-native';
import { enableScreens } from 'react-native-screens';

enableScreens(false);
const Stack = createNativeStackNavigator();

const HomeScreen = () => {
    return (
        <View>
            <Text>Home</Text>
        </View>
    );
}


const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="home">
                <Stack.Screen name="home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export {Navigation};
