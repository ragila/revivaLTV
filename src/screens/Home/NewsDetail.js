import React, {useEffect, useState} from 'react'
import {
    FlatList,
    View,
    Dimensions,
    Text,
    StyleSheet,
    Image,
    ActivityIndicator,
    TouchableOpacity,
    ScrollView
  } from "react-native";
import { useDispatch, connect } from 'react-redux'
import {getNewsDetailAction} from '../../redux/action/newsAction'
import { SimpleLineIcons } from '@expo/vector-icons';

const NewsDetail = (props) => {
    const postId = props.route.params.id
    const img = props.route.params.img
    useEffect(() => {
        props.getDetail(postId)
    }, [])
    const data = props.route.params.data
    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            <View style={{paddingVertical: 10, paddingHorizontal: 20}}>
                <View style={{backgroundColor: '#E02131', width: '30%', height: 25, alignItems: 'center', justifyContent: 'center', borderRadius: 2}}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>{data.categories[0].term.name}</Text>
                </View>
                <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black', marginVertical: 10}}>{data.title}</Text>
                <View style={{flexDirection: 'row'}}>
                    <SimpleLineIcons name={'user'} size={25} color={'gray'} />
                    <Text style={{alignSelf: 'center', left: 5, fontSize: 13, color: 'gray'}}>{data.author} • {data.published_at}</Text>
                </View>
            </View>
                <Image source={{uri: img}} style={{width: '100%' ,height: 250}}/>
            <View style={{paddingVertical: 10, paddingHorizontal: 20}}>
            <Text style={{fontWeight: '500', fontSize: 15, color: 'black'}}>
                {data.excerpt}
            </Text>
            <Text style={{fontWeight: 'bold', fontSize: 15, color: 'black', marginTop: 50}}>
                Share this article
            </Text>
            <View style={{flexDirection: 'row', marginTop: 15}}>
                <TouchableOpacity style={styles.btn_share}>
                    <SimpleLineIcons name={'social-facebook'} size={20} color={'gray'} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_share}>
                    <SimpleLineIcons name={'social-twitter'} size={20} color={'gray'} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_share}>
                    <SimpleLineIcons name={'social-instagram'} size={20} color={'gray'} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_share}>
                    <SimpleLineIcons name={'social-google'} size={20} color={'gray'} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_share}>
                    <SimpleLineIcons name={'social-vkontakte'} size={20} color={'gray'} />
                </TouchableOpacity>
            </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    btn_share:{
        width: 40, height: 40, borderRadius: 20, borderWidth: 1, justifyContent: 'center', alignItems: 'center', marginRight: 5
    },  
    borderPembatas: {
        borderBottomWidth: 1, width: '100%', borderColor: '#CFD8DC', marginVertical: 15
    },
    btn_menu:{
        width: 100, height: 30, justifyContent: 'center', alignItems: 'center', marginVertical: 5
    },
    carousel: { 
        flex: 1 
    },
    borderSide: {
        borderRightWidth: 1, borderColor: 'gray', height: 20, alignSelf: 'center'
    }
});

const reduxState = (state) => ({
    detailNews : state?.newsReducer?.detail,
})

const reduxDispatch = (dispatch) => ({
    getDetail : (id) => dispatch(getNewsDetailAction(id))
})


export default connect(reduxState, reduxDispatch)(NewsDetail)

