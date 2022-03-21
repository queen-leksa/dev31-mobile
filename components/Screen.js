import React from "react";
import { StyleSheet,
         View, Text, StatusBar, SafeAreaView
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
const Stack = createNativeStackNavigator();

import Content from "./Content.js";
import Page from "./Page.js";

export default function Screen() {
    return (
        <NavigationContainer>
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={false} barStyle={"dark"}/>
            <Stack.Navigator initialRouteName="Main">
                <Stack.Screen name={"Main"} component={Content} options={{title: "Main"}} initialParams={{ title: "Main" }}/>
                <Stack.Screen name={"Page"} component={Page} options={{title: "Page"}} initialParams={{ title: "Page" }}/>
            </Stack.Navigator>
        </SafeAreaView>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2c3e50"
    }
});