import React from 'react';

import { Image, StyleSheet, Text, View } from 'react-native';

import { Marquee } from './src';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Marquee style={{ borderWidth: 1 }}>
          <Text numberOfLines={1}>
            Hello world!Hello world!Hello world!Hello world!
          </Text>
        </Marquee>
      </View>
      <View>
        <Marquee style={styles.images}>
          <View style={styles.row}>
            <Image style={styles.image} />
            <Image style={styles.image} />
            <Image style={styles.image} />
            <Image style={styles.image} />
          </View>
        </Marquee>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  images: {
    flexDirection: 'row',
  },
  image: {
    width: 32,
    height: 32,
    borderWidth: 1,
  },
});

export default App;
