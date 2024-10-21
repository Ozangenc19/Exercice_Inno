import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TextInput } from 'react-native';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';

const InputInteraction = () => {
const [value, setValue] = useState<string>("");
const [submittedValue, setsubmittedValue] = useState<string>("");

const handleSubmit = () => {
    // Enregistre la valeur du Input
    setsubmittedValue(value)
    // Reinisialise la valeur du 
    setValue("");
}

const handlePress = () => {
    alert("Vous avez appuyé sur le bouton !");
}

    return (
       <View style={styles.container}>
            <Text style={styles.title}>Interaction avec l'utilisateur</Text>

            <TextInput style={styles.text} placeholder="Entrez quelque chose" 
                value={value}
                // Mets a jour l'etat lorsque le texte change
                onChangeText={setValue}/>
                   
              

            <Button title="Soumettre" 
                onPress={handleSubmit}
                color={"#c0c0c0"}
                />

            <Text >
                {submittedValue ? "Valeur Soumise : "+ submittedValue + "!" : "Aucune valeur soumise"} 
            </Text>

            <TouchableOpacity onPress={handlePress}>
                <Text>Appuyez sur moi !</Text>
                <Button title="Appuyez sur moi !" onPress={handlePress} />
            </TouchableOpacity>
       </View>
    )
}

const styles = StyleSheet.create ({ 
    container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
    text: {
        height: 40,
        width: "80%",
        marginTop: 20,
        fontSize: 20,
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginBottom: 20,
        fontWeight: 'black',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 20,
    }
});

export default InputInteraction;