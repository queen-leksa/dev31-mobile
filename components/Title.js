import React from "react";
import {View, Text, StyleSheet} from "react-native";

export default function Title() {
    return (
        <View style={styles.block}>
            <Text style={styles.caption}>Title</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 12,
        paddingRight: 12,
        paddingBottom: 12,
        borderBottomColor: "#fff",
        borderBottomWidth: 1,
        borderStyle: "solid"
    },
    caption: {
        color: "#fff",
        fontSize: 40
    }
})