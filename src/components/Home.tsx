import 'react-native-gesture-handler';
import * as React from 'react';
import {Button, Text, View, StyleSheet, BackHandler} from 'react-native';
import {DrawerScreenProps} from '@react-navigation/drawer';

import {RootDrawerParamList} from '../types';

export const Home = ({navigation}: DrawerScreenProps<RootDrawerParamList>) => {
  return (
    <View style={styles.HomeStyle}>
      <Text>r01, L3I, Drawer. Home screen</Text>
      <Text> </Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Text> </Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Text> </Text>
      <Button title="Exit" onPress={BackHandler.exitApp} />
    </View>
  );
};

const styles = StyleSheet.create({
  HomeStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cyan',
  },
});
