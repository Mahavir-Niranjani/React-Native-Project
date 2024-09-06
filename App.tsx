import React from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Hello world...</Text>
      <Text style={{ fontSize: 30 }}>React Native</Text>
      <Text style={{ fontSize: 30 }}>This is My 1st Project</Text>
      <Button title='Press here...'></Button>
    </View>
  );
};

export default App;
