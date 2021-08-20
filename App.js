import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

export default function App() {
  const [field1, setField1] = useState(0);
  const [field2, setField2] = useState(0);
  const [output, setOutput] = useState(0);

  return (
    <View style={styles.container}>
      <TextInput
        style={{height: 40, fontSize: 30}}
        placeholder="Field 1"
        onChangeText={text => setField1(parseFloat(text))}
      />
      <TextInput
        style={{height: 40, fontSize: 30}}
        placeholder="Field 2"
        onChangeText={text => setField2(parseFloat(text))}
      />
      <Button 
         title="Submit"
         onPress={() => setOutput(field1 + field2)}
        />
      <Text>The numbers add up to: {output}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
