import React from "react"; // creation d'un composant
import { View, Text } from "react-native";

interface WelcomeProps {
    name: String;
}

const Welcome = ({ name } : WelcomeProps) => {
    return (
        <View>
            <Text>Hello {name} ! </Text>
        </View>
    );

}

export default Welcome;