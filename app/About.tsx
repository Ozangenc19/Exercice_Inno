import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import Counter from './Counter';



export default function About() {
    return (
    
    <View 
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    
    >
  
        <Text>A propos : </Text>
        <Text>Nom de l'école : HEPH Condorcet Mons</Text>
        <Text>Année scolaire : 2024-2025</Text>

        
        <Counter></Counter>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    stepContainer: {
      gap: 8,
      marginBottom: 8,
    },
    reactLogo: {
      height: 178,
      width: 290,
      bottom: 0,
      left: 0,
      position: 'absolute',
    },
  });