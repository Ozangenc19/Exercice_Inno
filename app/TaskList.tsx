import { useState } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";

interface Task{
    title: string,
    completed: boolean
}

const TaskList = () => {
    const [tasks, setTasks] = useState<Task[]>([
        { title: 'Faire les courses', completed: false },
        { title: 'Laver la voiture', completed: false },
        { title: 'Réviser pour l\'examen', completed: false },
    ]);

    const toggleTaskCompletion = (index: number) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    return (
        <View>
            <Text>Liste des tâches</Text>
            <FlatList
                data={tasks}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index}) => (
                    <View>
                        <Text>{ item.title }</Text>
                        <Button
                            title={item.completed ? "Réouvrir" : "Terminer"}
                            onPress={() => toggleTaskCompletion(index)}
                        />
                    </View>
                )} 
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
    },
    itemText: {
        fontSize: 18,
    },
    completed: {
        textDecorationLine: 'line-through',
        color: 'gray',
    },
});

export default TaskList;