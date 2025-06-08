import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/avatar.png')} // substitua pela imagem desejada
        style={styles.avatar}
      />
      <Text style={styles.name}>Isaac Oliveira</Text>
      <Text style={styles.email}>isaac@email.com</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Curso:</Text>
        <Text style={styles.infoText}>Análise e Desenvolvimento de Sistemas</Text>

        <Text style={styles.infoLabel}>Instituição:</Text>
        <Text style={styles.infoText}>IFPB - Campus Campina Grande</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Editar Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  infoContainer: {
    width: '100%',
    marginBottom: 30,
  },
  infoLabel: {
    fontSize: 14,
    color: '#888',
    marginTop: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
