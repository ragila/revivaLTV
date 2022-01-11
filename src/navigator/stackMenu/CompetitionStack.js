import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import CompetitionScreen from '../../screens/CompetitionScreen'

const Stack = createStackNavigator();
export default function CompetitionStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='CompetitionScreen' component={CompetitionScreen} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}
