import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

interface Character {
  id: number;
  name: string;
}

const DragonBallCharacters = () => {
  const characters: Character[] = [
    { id: 1, name: 'Goku' },
    { id: 2, name: 'Vegeta' },
    { id: 3, name: 'Bulma' },
    { id: 4, name: 'Piccolo' },
    { id: 5, name: 'Gohan' },
  ];

  const renderItem = ({ item }: { item: Character }) => (
    <View style={styles.item}>
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );

  return (
    <FlatList
      data={characters}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      ListHeaderComponent={<Text style={styles.header}>Personnages de Dragon Ball</Text>}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  item: {
    padding: 10,
  },
  text: {
    fontSize: 18,
  },
});

export default DragonBallCharacters;
