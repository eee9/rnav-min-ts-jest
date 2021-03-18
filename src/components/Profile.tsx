import * as React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';

import {IDrawer} from '../types';

export const Profile = ({navigation}: IDrawer) => {
  return (
    <View style={styles.ProfileStyle}>
      <Text>Profile screen</Text>
      <Text> </Text>
      <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
      <Text> </Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  ProfileStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightyellow',
  },
});
