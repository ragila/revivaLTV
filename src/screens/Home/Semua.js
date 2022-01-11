import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Semua(props){
  // console.log(props)
    return (
        <View style={styles.container}>
            {props?.allNews?.map((item, i) => (
                <View key={i}>
                    {/* <Image source={{uri: item.thumbnail}} style={{width: 150,height: 150, backgroundColor: 'red'}}/>
                    <Text>{item.thumbnail}</Text> */}
                    <Text>test</Text>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
  slide: {
    // height: windowHeight,
    // width: windowWidth,
    justifyContent: "center",
    alignItems: "center",
  },
//   slideImage: { width: windowWidth * 0.9, height: windowHeight * 0.7 },
  slideTitle: { fontSize: 24 },
  slideSubtitle: { fontSize: 18 },

  pagination: {
    position: "absolute",
    bottom: 8,
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
  },
  paginationDotActive: { backgroundColor: "lightblue" },
  paginationDotInactive: { backgroundColor: "gray" },

  carousel: { flex: 1 },
});
