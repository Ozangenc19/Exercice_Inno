import { View, Text } from "react-native"

interface WelcomeProps {
    name: String;
    isLoggedIn: boolean;

}


const Welcome = ({ name, isLoggedIn }: WelcomeProps) => {

    return (
        <View>
            {

            isLoggedIn ? <Text>Heureux de te revoir ! {name} </Text> : 
            <Text>Vous n'êtes pas connecté.</Text>

            }
        </View>
    )
}

export default Welcome;