import { useState } from "react";
import { Button, View, Text } from "react-native";



const Counter = () => {
    const [count, setCount] = useState(0); 

    const incrementCounter = () => {
        setCount(count + 1);
    }
    
    return (
        <View>
            <Text>Compteur : {count}</Text>
            <Button title="Augmenter" onPress={incrementCounter}></Button>
            <Button title="Diminuer" onPress={() => setCount(count - 1)}></Button>
            <Button title="Réinitialiser" onPress={() => setCount(0)}></Button>
        </View>



    )
}

export default Counter;