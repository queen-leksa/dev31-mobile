import React from "react";
import {View, Text, StyleSheet} from "react-native";

export default function Navigation() {
    return (
        <View style={styles.nav}>
            <Text style={styles.text}>Navigation</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    nav: {
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 12,
        paddingRight: 12,
        borderTopWidth: 1,
        borderTopColor: "#fff",
        borderStyle: "solid"
    },
    text: {
        color: "#fff"
    }
})