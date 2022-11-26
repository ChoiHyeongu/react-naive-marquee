import React from 'react';

import { StyleSheet, View } from 'react-native';

import { Marquee } from './src';

const App = () => {
  return (
    <View style={styles.container}>
      <Marquee />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
