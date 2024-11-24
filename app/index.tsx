import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button, Card, Title } from 'react-native-paper';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('帳號:', username);
    console.log('密碼:', password);
    // 這裡可以加入登入邏輯
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>登入</Title>
          <TextInput
            label="帳號"
            value={username}
            onChangeText={text => setUsername(text)}
            style={styles.input}
            mode="outlined"
          />
          <TextInput
            label="密碼"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
            style={styles.input}
            mode="outlined"
          />
          <Button
            mode="contained"
            onPress={handleLogin}
            style={styles.button}
          >
            確定
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  card: {
    width: '90%',
    padding: 20,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 24,
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
  },
});
