import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  BackHandler,
} from 'react-native';

import * as Sum from './sum';

export const App = () => {
  const a = 2;
  const b = 73;
  const sum = Sum.sum(a, b);
  return (
    <SafeAreaView style={styles.flex1}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>r01, L3G. Jest tests.</Text>
        <Text style={styles.text}>
          {a} + {b} = {sum}
        </Text>
        <Button title="Exit" onPress={BackHandler.exitApp} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
    backgroundColor: 'cyan',
  },
  sectionContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 0,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderColor: 'red',
    borderWidth: 3,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'blue',
  },
  text: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'normal',
    color: 'black',
  },
});
