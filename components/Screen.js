import React from "react";
import { StyleSheet,
         View, Text, StatusBar, SafeAreaView
} from "react-native";
import Content from "./Content.js";
import Navigation from "./Navigation.js";
import Title from "./Title.js";


export default function Screen() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={false} barStyle={"dark"}/>
            <Title/>
            <Content/>
            <Navigation/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2c3e50"
    }
});