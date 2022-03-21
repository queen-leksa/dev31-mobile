import React from 'react';
import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';
import Title from "./Title";
import Navigation from "./Navigation";
export default function Page({navigation, route}) {
    let height = Dimensions.get("window").height;
    height -= 220;
    return (
        <>
            <Title ttl={route.params.title}/>
            <View style={{backgroundColor: "#84909c", height: height, padding: 12}}>
                <Text style={styles.caption}>Page</Text>
                <Text>{route.params.text}</Text>
            </View>
            <Navigation navigation={navigation}/>
        </>
        )
}
const styles = StyleSheet.create({
    caption: {
        color: "#2c3e50",
        fontSize: 30,
        marginBottom: 24
    },
    cardsBox: {
        flexDirection: "row"
    },
    card: {
        borderColor: "#fff",
        borderWidth: 1,
        borderStyle: "solid",
        marginBottom: 12,
        padding: 12,
        borderRadius: 6
    },
    cardText: {
        fontSize: 20,
        color: "#fff"
    }
})