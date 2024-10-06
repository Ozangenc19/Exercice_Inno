import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from 'expo-router';

const Personnage = () => {
    const { id } = useLocalSearchParams();
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Id du personnage : {id}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    text: {
        fontSize: 20,
    }
});

export default Personnage;