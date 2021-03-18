/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {Button, Text, View, StyleSheet, BackHandler} from 'react-native';

import {IDrawer} from '../types';

import {cc, J} from '../libs/mxlib';
export interface IHome {
  runVer: string;
  message: string;
}

export const Home = (props: IDrawer & IHome) => {
  //cc('In Home(). props =>');
  //cc(J(props));
  return (
    <View style={styles.HomeStyle}>
      <Text>{props.runVer}, Drawer. Home screen</Text>
      <Text>message: [{props.message}]</Text>
      <Text> </Text>
      <Button title="Go to Profile" onPress={() => props.navigation.navigate('Profile')} />
      <Text> </Text>
      <Button title="Go to Settings" onPress={() => props.navigation.navigate('Settings')} />
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
