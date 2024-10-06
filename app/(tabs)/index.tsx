import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import WelcomeMessage from '../WelcomeMessage';
import { Link, useRouter } from 'expo-router';
import LoginStatus from '../LoginStatus';



export default function Index() {
  // Utilisation de l'état pour suivre l'état de connexion
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // Fonction pour basculer l'état de connexion
  const toggleLogin = () => {
    setIsLoggedIn(prevState => !prevState);
  };

  const router = useRouter();

    const goToDetails = () => {
      router.push('/Personnage/42');
    };
  return (
    
  
   
      
    
    
    <View 
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <WelcomeMessage name="Ozan" />
      <LoginStatus name="Ozan" isLoggedIn={isLoggedIn} />
      <Button 
        title={isLoggedIn ? "Se déconnecter" : "Se connecter"} 
        onPress={toggleLogin} 
      />
      <Link href="/About">Aller à la page à propos</Link>
      <Link href={"/Personnage/42"}>Acceder à son personnage</Link>
      <Button title="Go to Perso" onPress={goToDetails} />
      <Button title="Voir les perso DBZ" onPress={() => router.push('/DragonBallCharacters')} />
     
      </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
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
