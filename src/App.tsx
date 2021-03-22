import 'react-native-gesture-handler';
import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {IDrawer} from './types';
import {Home} from './components/Home';
import {Profile} from './components/Profile';
import {Settings} from './components/Settings';

const RUN_VER = 'r01, L3M';

const Drawer = createDrawerNavigator();

const _Home = (props: IDrawer) => {
  return <Home {...props} runVer={RUN_VER} message={'of App.tsx'} />;
};
const _Profile = (props: IDrawer) => <Profile {...props} />;
const _Settings = (props: IDrawer) => <Settings {...props} />;

export function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator
          drawerStyle={styles.DrawerStyle}
          initialRouteName="Home"
          openByDefault={true}
          drawerPosition={'right'}>
          <Drawer.Screen name="Home" component={_Home} />
          <Drawer.Screen name="Profile" component={_Profile} />
          <Drawer.Screen name="Settings" component={_Settings} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
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
