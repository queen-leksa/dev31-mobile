import React from "react";
import {View, Text, StyleSheet, Dimensions, FlatList} from "react-native";

const list = [{type: "cat"},{type: "dog"},{type: "bird"},{type: "mouse"}, {type: "cat"},{type: "dog"},{type: "bird"},{type: "mouse"}, {type: "cat"},{type: "dog"},{type: "bird"},{type: "mouse"}];

const Card = ({title}) => (
    <View style={styles.card}>
        <Text style={styles.cardText}>{title}</Text>
    </View>
)


export default function Content() {
    const setCard = ({item, index}) => (<Card title={item.type} key={index}/>)
    let height = Dimensions.get("window").height;
    height -= 220;
    return (
        <View style={{backgroundColor: "#84909c", height: height, padding: 12}}>
            <Text style={styles.caption}>Content</Text>
            <FlatList data={list} renderItem={setCard}/>
        </View>
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