import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {IDrawer} from './types';
import {Home} from './components/Home';
import {Profile} from './components/Profile';
import {Settings} from './components/Settings';

const RUN_VER = 'r04, L3I';

const Drawer = createDrawerNavigator();

const _Home = (props: IDrawer) => {
  return <Home {...props} runVer={RUN_VER} message={'of App.tsx'} />;
};

export function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={styles.DrawerStyle}
        initialRouteName="Home"
        openByDefault={true}
        drawerPosition={'right'}>
        <Drawer.Screen name="Home" component={_Home} />
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
});
