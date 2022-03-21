import React from "react";
import {View, Button, StyleSheet} from "react-native";

export default function Navigation({navigation}) {
    return (
        <View style={styles.nav}>
            <Button
                title="Main"
                onPress={() => navigation.navigate("Main")}
                color="#fff"
            />
            <Button
                title="Page"
                onPress={() => navigation.navigate("Page", {text: "This is page", title: "Page"})}
                color="#fff"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    nav: {
        height: 50,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 12,
        paddingRight: 12,
        borderTopWidth: 1,
        borderTopColor: "#fff",
        borderStyle: "solid"
    }
})