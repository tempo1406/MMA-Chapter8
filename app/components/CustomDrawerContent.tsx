import { Ionicons } from '@expo/vector-icons';
import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { COLORS, FONTS, SIZES, SPACING } from '../styles/theme';
import { useTheme } from '../theme/ThemeContext';

const menuItems = [
  {
    id: '1',
    title: 'Home',
    icon: 'home-outline',
    screen: 'Home',
  },
  {
    id: '2',
    title: 'Detail',
    icon: 'document-text-outline',
    screen: 'Detail',
  },
  {
    id: '3',
    title: 'About',
    icon: 'information-circle-outline',
    screen: 'About',
  },
  {
    id: '4',
    title: 'Products',
    icon: 'grid-outline',
    screen: 'Products',
  },
];

export default function CustomDrawerContent(props: DrawerContentComponentProps) {
  const { isDarkMode } = useTheme();
  const colors = isDarkMode ? COLORS.dark : COLORS.light;

  return (
    <DrawerContentScrollView
      {...props}
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <View style={[styles.header, { borderBottomColor: colors.border }]}>
        <Image
          source={{ uri: 'https://ui-avatars.com/api/?name=User&background=6366F1&color=fff' }}
          style={styles.avatar}
        />
        <Text style={[styles.title, { color: colors.text }]}>
          Task Manager
        </Text>
      </View>

      <View style={styles.menuContainer}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.menuItem,
              props.state.routes[props.state.index].name === item.screen && {
                backgroundColor: colors.primary + '20',
              },
            ]}
            onPress={() => props.navigation.navigate(item.screen)}
          >
            <Ionicons
              name={item.icon as any}
              size={24}
              color={
                props.state.routes[props.state.index].name === item.screen
                  ? colors.primary
                  : colors.textSecondary
              }
            />
            <Text
              style={[
                styles.menuText,
                {
                  color:
                    props.state.routes[props.state.index].name === item.screen
                      ? colors.primary
                      : colors.textSecondary,
                },
              ]}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={[styles.footer, { borderTopColor: colors.drawerBorder }]}>
        <TouchableOpacity
          style={[styles.logoutButton, { backgroundColor: colors.error + '20' }]}
          onPress={() => {
            // Handle logout
          }}
        >
          <Ionicons name="log-out-outline" size={24} color={colors.error} />
          <Text style={[styles.logoutText, { color: colors.error }]}>Logout</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: SPACING.lg,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: SPACING.md,
  },
  title: {
    ...FONTS.bold,
    fontSize: SIZES.large,
    textAlign: 'center',
  },
  menuContainer: {
    padding: SPACING.md,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING.md,
    borderRadius: SIZES.base,
    marginBottom: SPACING.sm,
  },
  menuText: {
    ...FONTS.medium,
    fontSize: SIZES.medium,
    marginLeft: SPACING.md,
  },
  footer: {
    padding: SPACING.lg,
    borderTopWidth: 1,
    marginTop: 'auto',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING.md,
    borderRadius: SIZES.base,
    justifyContent: 'center',
  },
  logoutText: {
    ...FONTS.medium,
    fontSize: SIZES.medium,
    marginLeft: SPACING.sm,
  },
}); 