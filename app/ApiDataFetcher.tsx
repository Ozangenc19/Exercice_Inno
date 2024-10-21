import { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

type Address = {
    street: string,
    suite: string,
    city: string,
    zipcode: string
}

type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Address,
    phone: string
}


const ApiDataFetcher = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users') /* Envoie de requête GET */
            .then(response => response.json())
            .then(users => {
                setUsers(users);
                setLoading(false);
            })
            .catch((error) => {
                console.log("Erreur survenue lors de la récupération. "+ error);
            })
    }, []); /* S'exécute une seule fois après le premier rendu */

    if (loading) {
        return (
            <View style={styles.chargement}>
                <ActivityIndicator size="large" color="grey"/>
                <Text>Chargement...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>{ error }</Text>
            </View>
        )
    }


    const renderItem = ({ item } : { item : User }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemName}>😎 Nom : {item.name}</Text>
            <Text style={styles.itemText}>Nom d'utilisateur : {item.username}</Text>
            <Text style={styles.itemText}>Email : {item.email}</Text>
            <Text style={styles.itemText}>Adresse : {item.address.street} {item.address.suite} {item.address.zipcode} {item.address.city}</Text>
            <Text style={styles.itemText}>Téléphone : {item.phone}</Text>
        </View>
    )

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Liste des utilisateurs</Text>

            <FlatList
                data={users}
                keyExtractor={(item) => item.id.toString()}
                renderItem={ renderItem }>
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    chargement: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    itemContainer: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#455d7a',
        borderRadius: 5,
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    itemText: {
        fontSize: 18,
        color: 'white',
    },
    errorText: {
        color: 'red',
        fontSize: 18,
        textAlign: 'center',
    },
});

export default ApiDataFetcher;