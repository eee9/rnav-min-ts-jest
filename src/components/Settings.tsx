import * as React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';

import {IDrawer} from '../types';

export const Settings = ({navigation}: IDrawer) => {
  return (
    <View style={styles.SettingsStyle}>
      <Text>Settings screen</Text>
      <Text> </Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Text> </Text>
      <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  SettingsStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgreen',
  },
});
