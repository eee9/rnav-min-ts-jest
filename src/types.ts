import {DrawerScreenProps} from '@react-navigation/drawer';

export type IDrawer = DrawerScreenProps<RootDrawerParamList>;

type RootDrawerParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
};
