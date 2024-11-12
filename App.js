import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

const BACKEND_URL = 'http://192.168.1.19:8081/scrap'; // Substitua pelo IP local da sua máquina

export default function App() {
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');

  const handleScrap = async () => {
    if (!url || !email) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    try {
      const response = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, email }),
      });
      const data = await response.json();
      Alert.alert('Sucesso', data.message);
    } catch (error) {
      Alert.alert('Erro', 'Falha ao comunicar com o servidor.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scraping e Envio de E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a URL"
        value={url}
        onChangeText={setUrl}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Button title="Iniciar Scraping" onPress={handleScrap} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
