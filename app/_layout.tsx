import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';
import React, { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import CustomDrawerContent from './components/CustomDrawerContent';
import AboutScreen from './screens/AboutScreen';
import DashboardScreen from './screens/DashboardScreen';
import DetailScreen from './screens/DetailScreen';
import HomeScreen from './screens/HomeScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import ProductsScreen from './screens/ProductsScreen';
import SettingsScreen from './screens/SettingsScreen';
import TasksScreen from './screens/TasksScreen';
import { COLORS, FONTS, SIZES } from './styles/theme';
import { ThemeContext, useTheme } from './theme/ThemeContext';

const DrawerNav = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
};

export type DrawerParamList = {
  Home: undefined;
  Detail: undefined;
  About: undefined;
  Products: undefined;
  ProductDetail: { product: Product };
};

type TabParamList = {
  Home: undefined;
  Dashboard: undefined;
  Tasks: undefined;
  Settings: undefined;
};

function HomeDrawerNavigator() {
  const { colors } = useTheme();

  return (
    <DrawerNav.Navigator
      drawerContent={(props: DrawerContentComponentProps) => (
        <CustomDrawerContent {...props} />
      )}
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          ...FONTS.medium,
        },
        drawerStyle: {
          backgroundColor: colors.background,
          borderRightColor: colors.border,
        },
        drawerActiveTintColor: colors.primary,
        drawerInactiveTintColor: colors.textSecondary,
      }}
    >
      <DrawerNav.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <DrawerNav.Screen 
        name="Detail" 
        component={DetailScreen}
        options={{
          title: 'Details',
          headerTitle: 'Application Details',
        }}
      />
      <DrawerNav.Screen 
        name="About" 
        component={AboutScreen}
        options={{
          title: 'About',
          headerTitle: 'About Us',
        }}
      />
      <DrawerNav.Screen 
        name="Products" 
        component={ProductsScreen}
        options={{
          title: 'Products',
          headerTitle: 'Products',
        }}
      />
      <DrawerNav.Screen 
        name="ProductDetail" 
        component={ProductDetailScreen}
        options={{
          title: 'Product Details',
          headerTitle: 'Product Information',
          drawerItemStyle: { display: 'none' },
        }}
      />
    </DrawerNav.Navigator>
  );
}

function DashboardDrawerNavigator() {
  const { colors } = useTheme();

  return (
    <DrawerNav.Navigator
      drawerContent={(props: DrawerContentComponentProps) => (
        <CustomDrawerContent {...props} />
      )}
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          ...FONTS.medium,
        },
        drawerStyle: {
          backgroundColor: colors.background,
          borderRightColor: colors.border,
        },
        drawerActiveTintColor: colors.primary,
        drawerInactiveTintColor: colors.textSecondary,
      }}
    >
      <DrawerNav.Screen 
        name="Dashboard" 
        component={DashboardScreen}
        options={{
          title: 'Dashboard',
          headerTitle: 'Task Dashboard',
        }}
      />
    </DrawerNav.Navigator>
  );
}

function TasksDrawerNavigator() {
  const { colors } = useTheme();

  return (
    <DrawerNav.Navigator
      drawerContent={(props: DrawerContentComponentProps) => (
        <CustomDrawerContent {...props} />
      )}
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          ...FONTS.medium,
        },
        drawerStyle: {
          backgroundColor: colors.background,
          borderRightColor: colors.border,
        },
        drawerActiveTintColor: colors.primary,
        drawerInactiveTintColor: colors.textSecondary,
      }}
    >
      <DrawerNav.Screen 
        name="Tasks" 
        component={TasksScreen}
        options={{
          title: 'Tasks',
          headerTitle: 'Task List',
        }}
      />
    </DrawerNav.Navigator>
  );
}

function SettingsDrawerNavigator() {
  const { colors } = useTheme();

  return (
    <DrawerNav.Navigator
      drawerContent={(props: DrawerContentComponentProps) => (
        <CustomDrawerContent {...props} />
      )}
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          ...FONTS.medium,
        },
        drawerStyle: {
          backgroundColor: colors.background,
          borderRightColor: colors.border,
        },
        drawerActiveTintColor: colors.primary,
        drawerInactiveTintColor: colors.textSecondary,
      }}
    >
      <DrawerNav.Screen 
        name="Settings" 
        component={SettingsScreen}
        options={{
          title: 'Settings',
          headerTitle: 'App Settings',
        }}
      />
    </DrawerNav.Navigator>
  );
}

export default function Layout() {
  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');
  const colors = isDarkMode ? COLORS.dark : COLORS.light;

  useEffect(() => {
    setIsDarkMode(colorScheme === 'dark');
  }, [colorScheme]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const contextValue = React.useMemo(() => ({
    isDarkMode,
    toggleTheme,
    colors,
  }), [isDarkMode, colors]);

  return (
    <ThemeContext.Provider value={contextValue}>
      <Tab.Navigator
        initialRouteName="HomeTab"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case 'HomeTab':
                iconName = focused ? 'home' : 'home-outline';
                break;
              case 'DashboardTab':
                iconName = focused ? 'stats-chart' : 'stats-chart-outline';
                break;
              case 'TasksTab':
                iconName = focused ? 'list' : 'list-outline';
                break;
              case 'SettingsTab':
                iconName = focused ? 'settings' : 'settings-outline';
                break;
              default:
                iconName = 'help-outline';
            }

            return <Ionicons name={iconName as any} size={size} color={color} />;
          },
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.textSecondary,
          tabBarStyle: {
            backgroundColor: colors.background,
            borderTopColor: colors.border,
            height: 60,
            paddingBottom: 8,
            paddingTop: 8,
          },
          tabBarLabelStyle: {
            ...FONTS.medium,
            fontSize: SIZES.small,
          },
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTintColor: colors.text,
          headerTitleStyle: {
            ...FONTS.medium,
          },
        })}
      >
        <Tab.Screen 
          name="HomeTab" 
          component={HomeDrawerNavigator}
          options={{
            headerShown: false,
            title: 'Home',
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen 
          name="DashboardTab" 
          component={DashboardDrawerNavigator}
          options={{
            headerShown: false,
            title: 'Dashboard',
            tabBarLabel: 'Dashboard',
          }}
        />
        <Tab.Screen 
          name="TasksTab" 
          component={TasksDrawerNavigator}
          options={{
            headerShown: false,
            title: 'Tasks',
            tabBarLabel: 'Tasks',
          }}
        />
        <Tab.Screen 
          name="SettingsTab" 
          component={SettingsDrawerNavigator}
          options={{
            headerShown: false,
            title: 'Settings',
            tabBarLabel: 'Settings',
          }}
        />
      </Tab.Navigator>
    </ThemeContext.Provider>
  );
}
