import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../../screens/HomeScreen'
import NewsDetail from '../../screens/Home/NewsDetail'

const Stack = createStackNavigator();
export default function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown: false}} />
            <Stack.Screen name='NewsDetail' component={NewsDetail} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}
