import React from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pagamento</Text>

        <View style={styles.inputContainer}>
            <Image
            source={require('../assets/images/pagar.png')}
            style={styles.iconImage}
            />
            <TextInput
            placeholder="Método de pagamento"
            placeholderTextColor="#999"
            style={styles.input}
            />
        </View>

        <View style={styles.inputContainer}>
            <Image
            source={require('../assets/images/cvv.png')}
            style={styles.iconImage}
            />
            <TextInput
            placeholder="CVV"
            placeholderTextColor="#999"
            style={styles.input}
            />
        </View>

      <View style={styles.inputContainer}>
        <Image
            source={require('../assets/images/calendario.png')}
            style={styles.iconImage}
        />
        <TextInput
          placeholder="Data de Validade"
          placeholderTextColor="#999"
          secureTextEntry
          style={styles.input}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Confirmar Pagamento</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.linkText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    paddingHorizontal: 10,
    marginBottom: 15,
    height: 50,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 14,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  linkText: {
    marginTop: 20,
    color: '#555',
  },
  iconImage: {
  width: 20,
  height: 20,
  resizeMode: 'contain',
  marginRight: 10,
}, 
});
