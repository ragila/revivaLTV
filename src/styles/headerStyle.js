import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import mainStyle from './mainStyle'
// import revivaltv from '../../assets/revivaltv-icon.png'

function LogoTitle() {
  return (
      <Image
        style={{ width: 130, height: 50 }}
        source={require('../../assets/revival.png')}
      />
  );
}

const headerStyle = {
    headerStyle: {
        // height: 125,
        backgroundColor: mainStyle.mainColor
    },
    headerTintColor: '#fff',
    headerBackTitleVisible: false,
    headerTitleContainerStyle:{
      // marginLeft: 'auto',
    },
    headerTitleStyle: {
      // fontWeight: 'bold',
      fontSize: 20,
    },
    headerLeftContainerStyle: {
      // left: 75,
    },
    // title: 'REVIVAL TV',
    headerTitle: (props) => <LogoTitle {...props}/>
}

export default headerStyle
