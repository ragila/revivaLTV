import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeStack, CompetitionStack, RevivalPediaStack, ProfileStack} from './stackMenu'
// import { Icon } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import headerStyle from '../styles/headerStyle'


const Tab = createBottomTabNavigator();
export default function MainStack() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={({ route }) => ({
                    ...headerStyle,
                    tabBarActiveTintColor: 'black',
                    tabBarIcon: ({ focused }) => focused ? <Ionicons name='ios-home-outline' size={25} color='#E02131'/> : <Ionicons name='ios-home-outline' size={25} color='gray'/>,
                })}
            />
            <Tab.Screen
                name="Competition"
                component={CompetitionStack}
                options={({ route }) => ({
                    ...headerStyle,
                    tabBarActiveTintColor: 'black',
                    tabBarIcon: ({ focused }) => focused ? <Ionicons name='trophy-outline' size={25} color='#E02131'/> : <Ionicons name='trophy-outline' size={25} color='gray'/>,
                })}
            />
            <Tab.Screen
                name="RevivalPedia"
                component={RevivalPediaStack}
                options={({ route }) => ({
                    ...headerStyle,
                    tabBarActiveTintColor: 'black',
                    tabBarIcon: ({ focused }) => focused ? <Ionicons name='ios-newspaper-outline' size={25} color='#E02131'/> : <Ionicons name='ios-newspaper-outline' size={25} color='gray'/>,
                })}
            />
            <Tab.Screen
                name="Saya"
                component={ProfileStack}
                options={({ route }) => ({
                    ...headerStyle,
                    tabBarActiveTintColor: 'black',
                    tabBarIcon: ({ focused }) => focused ? <Ionicons name='ios-person-outline' size={25} color='#E02131'/> : <Ionicons name='ios-person-outline' size={25} color='gray'/>,
                    // ios-person-outline
                })}
            />
        </Tab.Navigator>
    )
}
