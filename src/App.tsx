import 'react-native-gesture-handler';
import * as React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerScreenProps,
} from '@react-navigation/drawer';

import {RootDrawerParamList} from './types';
import {Home} from './components/Home';

function Profile({navigation}: DrawerScreenProps<RootDrawerParamList>) {
  return (
    <View style={styles.ProfileStyle}>
      <Text>Profile screen</Text>
      <Text> </Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Text> </Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function Settings({navigation}: DrawerScreenProps<RootDrawerParamList>) {
  return (
    <View style={styles.SettingsStyle}>
      <Text>Settings screen</Text>
      <Text> </Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Text> </Text>
      <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={styles.DrawerStyle}
        initialRouteName="Home"
        openByDefault={true}
        drawerPosition={'right'}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  DrawerStyle: {
    backgroundColor: '#00FF00AA',
    width: 150,
    alignContent: 'center',
    justifyContent: 'center',
  },
  HomeStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cyan',
  },
  ProfileStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightyellow',
  },
  SettingsStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgreen',
  },
});
