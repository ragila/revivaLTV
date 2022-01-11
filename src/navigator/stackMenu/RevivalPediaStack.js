import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import RevivalPediaScreen from '../../screens/RevivalPediaScreen'

const Stack = createStackNavigator();
export default function RevivalPediaStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='RevivalPediaScreen' component={RevivalPediaScreen} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}
