import React from 'react'
import { View, Text, Image } from 'react-native'

export default function RevivalPediaScreen() {
    return (
        <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
            <Image source={{uri: 'https://img.freepik.com/free-vector/red-grunge-style-coming-soon-design_1017-26691.jpg?size=626&ext=jpg'}} style={{width: 300, height: 200}} />
        </View>
    )
}
