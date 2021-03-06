import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import MainStack from './MainStack'

const Stack = createStackNavigator();
export default function AppStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Main' component={MainStack} />
        </Stack.Navigator>
    )
}
