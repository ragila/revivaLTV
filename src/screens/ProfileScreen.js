import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

const ProfileScreen = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.title}>Login </Text>
                <Text style={[styles.title, {color: '#C01820'}]}>RevivaLTV</Text>
            </View>
            <TextInput
                value={userName}
                onChangeText={(userName) => setUserName(userName)}
                placeholder={'UserName'}
                style={styles.input}
            />
            <TextInput
                secureText={true}
                value={password}
                onChangeText={(password) => setPassword(password)}
                placeholder={'Password'}
                style={[styles.input, {marginTop:5}]}
            />
            <View style={{width: 250, height: 44}}>
                <Text style={{color: '#C01820', fontWeight: '500', fontSize: 12, marginLeft: 'auto'}}>Forgot your password?</Text>
            </View>
            <TouchableOpacity style={[styles.input, {backgroundColor: '#E02131', alignItems: 'center'}]}>
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>Login</Text>
            </TouchableOpacity>
            <Text style={{color: 'gray', fontWeight: '500', fontSize: 12}}>No account yet? <Text style={{color: '#C01820'}}>Register</Text></Text>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    //   marginTop: 20,
    justifyContent:'center',
      backgroundColor: '#ffffff',
    },
    input: {
      width: 250,
      height: 44,
      padding: 10,
      marginTop: 20,
      marginBottom: 10,
      borderRadius: 10,
      backgroundColor: '#e8e8e8'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    }
  });