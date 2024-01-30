import { StyleSheet, Text, TextInput, View, Alert, Button } from 'react-native';
import React, { useState } from "react";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";

export default function App() {
  const [input, setInput] = useState(null);
  const [age, setAge] = useState(null);
  const [current, setCurrent] = useState("like");

  const submitButton = () =>
    Alert.alert('Summary', `Hello my name is ${input}. I am ${age} years old. I ${current} coffee.`, [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

  return <>
    <View style={styles.row}>
      <Text>Name:</Text>
      <TextInput style={styles.input} value={input} onChangeText={setInput}></TextInput>
    </View>
    <View style={styles.row}>
      <Text>Age:</Text>
      <TextInput style={styles.input} value={age} onChangeText={setAge}></TextInput>
    </View>
    <Text>Like Coffee?☕</Text>
    <View style={{
      marginBottom: 50
    }}>
      <RadioButtonGroup containerStyle={{
        marginBottom: 10
      }} selected={current} onSelected={value => setCurrent(value)} radioBackground="green">
        <RadioButtonItem value="like" label="Yes✅" />
        <RadioButtonItem value="hate" label="No❌" />
      </RadioButtonGroup>
    </View>
    <View style={styles.container}>
      <Button title={'Submit'} onPress={submitButton} />
    </View>
  </>;
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'bottom',
    justifyContent: 'bottom'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    width: "wp('50%')",
    textAlign: "right",
    justifyContent: "space-between",
    alignItems: "center"
  },
});

