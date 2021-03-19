import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import axios from 'axios';

export default function App() {
  const [test, setTest] = useState('');
  const url1 = 'https://ticketing.dev/api/users/login';
  const url2 = 'https://jsonplaceholder.typicode.com/todos/1';
  const plop = () => {
    axios.get(url1).then(res => {
      console.log(res.data);
      setTest(res.data.id);
    });
  };

  return (
    <View>
      <Button
        title="click"
        onPress={() => {
          plop();
        }}
      />
      <Text>{test}</Text>
    </View>
  );
}
