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
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useDispatch, connect } from 'react-redux'
import {getNewsAction, getCategoryAction, getCompetitionAction} from '../redux/action/newsAction'
import { Ionicons } from '@expo/vector-icons';
import { SliderBox } from "react-native-image-slider-box";


const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
const Tab = createMaterialTopTabNavigator();
const HomeScreen = (props) => {
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState([
        "https://i.ibb.co/S5dsnN1/Livescape.jpg",
        "https://i.ibb.co/SnYcd6M/image.webp",
        "https://i.ibb.co/SQk25XL/rrq.webp"
    ])
    const [page, setPage]  = useState('semua')
    const [index, setIndex] = useState(0)
    useEffect(() => {
        setLoading(true)
        props.getAllNews()
        props.getCategory()
        props.getCompetition()
        setLoading(false)
    }, [])
    // console.log(props.allNews)
    return (
        <ScrollView style={styles.containerCarousel}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity 
                        style={styles.btn_menu}
                        onPress={() => {
                            setPage('semua')
                        }}>
                        <Text style={{fontWeight: page==='semua'?'bold':'500', fontSize: 13}}>Semua</Text>
                    </TouchableOpacity>
                    <View style={styles.borderSide}/>
                    {props.category?.map((item, i) => {
                        return (
                            <>
                                <TouchableOpacity key={i} style={styles.btn_menu}
                                    onPress={() => {
                                        setPage(item.name)
                                    }}>
                                    <Text style={{fontWeight: page===item.name?'bold':'500', fontSize: 13}}>{item.name === "Counter-Strike : Global Offensive" ? "CSGO" : item.name }</Text>
                                </TouchableOpacity>
                                <View style={styles.borderSide}/>
                            </>
                        )
                    })}
                </ScrollView>
                {page === 'semua' ? (
                    <View>
                        <SliderBox
                            ImageComponentStyle={{height: 250}}
                            autoplay={true}
                            dotColor={'#C01820'}
                            inactiveDotColor={'gray'}
                            images={image}
                            activeOpacity={1}
                            
                            // onCurrentImagePressed={index => props.navigation.navigate('NewsDetail')}
                            currentImageEmitter={index => setIndex(index)}
                        />
                        {loading ? (
                            <ActivityIndicator size="large" color="#0E427D" /> 
                        ):(
                        <TouchableOpacity onPress={() => {props.navigation.navigate('NewsDetail', {id: props.allNews[index].postId, img: image[index], data: props.allNews[index]})}} style={{padding: 15}}>
                            <View style={{backgroundColor: '#E02131', width: '30%', height: 25, alignItems: 'center', justifyContent: 'center', borderRadius: 5}}>
                                <Text style={{color: 'white', fontWeight: 'bold'}}>{props.allNews[index].categories[0].term.name}</Text>
                            </View>
                            <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black', marginVertical: 10}}>{props?.allNews[index]?.title}</Text>
                            <Text style={{color: '#666666'}}>{props.allNews[index].author} • {props.allNews[index].published_at}</Text>
                        </TouchableOpacity>
                        )}
                        <View style={styles.borderPembatas}/>
                        <View style={{padding: 18}}>
                            <Text style={{fontWeight: 'bold', fontSize: 15}}>Kompetisi Unggulan</Text>
                            <View style={{borderBottomWidth: 3, borderColor: "#E02131", width: 60}}/>
                            <ScrollView horizontal={true} style={{marginTop: 20}} showsHorizontalScrollIndicator={false}>
                                {props.competition?.map((item, i) => (
                                    <View style={styles.cardCompetition} key={i}>
                                        <Image source={{uri: 'https://i.ibb.co/ZWHjm70/Duel-Cover.jpg'}} style={{width: '100%', height: '40%', borderTopLeftRadius: 5, borderTopRightRadius: 5}}/>
                                        <View>
                                            <View style={{padding: 5}}>
                                                <Text style={{fontSize: 11, fontWeight: 'bold'}}>
                                                    {item.name}
                                                </Text>
                                                <View style={{top: 5}}>
                                                    <View style={{flexDirection: 'row'}}>
                                                        <Ionicons name={'md-game-controller-outline'} size={15} color={'gray'} />
                                                        <Text style={{fontSize: 10, left: 3}}>
                                                            {item.game_type}
                                                        </Text>
                                                    </View>
                                                    <View style={{flexDirection: 'row'}}>
                                                        <Ionicons name={'md-person-outline'} size={15} color={'gray'} />
                                                        <Text style={{fontSize: 10, left: 3}}>
                                                            {item.slot}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={[styles.borderPembatas, {marginVertical: 10}]}/>
                                                <View style={{paddingHorizontal: 5}}>
                                                    <Text style={{fontSize: 10, left: 3, color: 'black'}}>
                                                        Status
                                                    </Text>
                                                    <Text style={{fontSize: 10, left: 3, color: 'green', fontWeight: 'bold'}}>
                                                        {item.status}
                                                    </Text>
                                                </View>
                                        </View>
                                            
                                    </View>
                                ))}
                            </ScrollView>
                        </View>
                    </View>
                ):(
                        <View style={{ backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
                            
                        </View>
                )}
            </ScrollView>
    );
}

const styles = StyleSheet.create({
    borderPembatas: {
        borderBottomWidth: 1, width: '100%', borderColor: '#CFD8DC', marginVertical: 15
    },
    cardCompetition: {
        width: 145, height: 200, borderRadius: 5, marginRight: 10, borderWidth: 1, borderColor: 'gray'
    },
    containerCarousel: {
        backgroundColor: 'white',
        // flex: 1,
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
    allNews: state?.newsReducer?.data,
    category: state?.newsReducer?.category,
    competition: state?.newsReducer?.competition
})

const reduxDispatch = (dispatch) => ({
    getAllNews: () => dispatch(getNewsAction()),
    getCategory: () => dispatch(getCategoryAction()),
    getCompetition: () => dispatch(getCompetitionAction())
})


export default connect(reduxState, reduxDispatch)(HomeScreen);
