import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Root: NavigatorScreenParams<DrawerParamList>;
  Detail: undefined;
  ProductDetail: {
    product: {
      id: string;
      name: string;
      description: string;
      price: string;
      image: string;
    };
  };
};

export type DrawerParamList = {
  Home: undefined;
  Profile: undefined;
  Products: undefined;
  About: undefined;
};

export type TabParamList = {
  Dashboard: undefined;
  Tasks: undefined;
  Settings: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const NAVIGATION_CONSTANTS = {
  INITIAL_ROUTE: 'Root',
  DRAWER_ROUTES: ['Home', 'Profile', 'Products', 'About'],
  TAB_ROUTES: ['Dashboard', 'Tasks', 'Settings']
} as const;

export default NAVIGATION_CONSTANTS; 