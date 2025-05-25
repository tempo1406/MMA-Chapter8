import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS, SHADOWS, SIZES, SPACING } from '../styles/theme';
import { useTheme } from '../theme/ThemeContext';

type SettingItem = {
  id: string;
  title: string;
  description: string;
  type: 'switch' | 'select';
  value: boolean;
  icon: keyof typeof Ionicons.glyphMap;
  onToggle?: () => void;
};

export default function SettingsScreen() {
  const { isDarkMode, toggleTheme } = useTheme();
  const colors = isDarkMode ? COLORS.dark : COLORS.light;
  const [settings, setSettings] = useState<SettingItem[]>([
    {
      id: 'notifications',
      title: 'Notifications',
      description: 'Receive notifications about new tasks and reminders',
      type: 'switch',
      value: true,
      icon: 'notifications-outline',
    },
    {
      id: 'darkMode',
      title: 'Dark Mode',
      description: 'Switch between light and dark interface',
      type: 'switch',
      value: isDarkMode,
      icon: 'moon-outline',
      onToggle: toggleTheme,
    },
    {
      id: 'sound',
      title: 'Sound',
      description: 'Toggle sound notifications',
      type: 'switch',
      value: true,
      icon: 'volume-high-outline',
    },
    {
      id: 'vibration',
      title: 'Vibration',
      description: 'Toggle vibration when notifications are received',
      type: 'switch',
      value: true,
      icon: 'phone-portrait-outline',
    },
  ]);

  const toggleSetting = (id: string) => {
    setSettings(settings.map(setting => {
      if (setting.id === id) {
        const newValue = !setting.value;
        if (setting.onToggle) {
          setting.onToggle();
        }
        return { ...setting, value: newValue };
      }
      return setting;
    }));
  };

  const renderSettingItem = (item: SettingItem) => (
    <View
      key={item.id}
      style={[
        styles.settingItem,
        { backgroundColor: colors.card },
        isDarkMode ? SHADOWS.dark : SHADOWS.light
      ]}
    >
      <View style={[styles.iconContainer, { backgroundColor: colors.primary + '20' }]}>
        <Ionicons name={item.icon} size={24} color={colors.primary} />
      </View>
      <View style={styles.settingInfo}>
        <Text style={[styles.settingTitle, { color: colors.text }]}>{item.title}</Text>
        <Text style={[styles.settingDescription, { color: colors.secondary }]}>
          {item.description}
        </Text>
      </View>
      {item.type === 'switch' && (
        <Switch
          value={item.value}
          onValueChange={() => toggleSetting(item.id)}
          trackColor={{ false: colors.border, true: colors.primary + '80' }}
          thumbColor={item.value ? colors.primary : colors.secondary}
        />
      )}
    </View>
  );

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>Settings</Text>
        <Text style={[styles.subtitle, { color: colors.secondary }]}>
          Customize the application to your liking
        </Text>
      </View>

      <View style={styles.settingsList}>
        {settings.map(renderSettingItem)}
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.error }]}
        onPress={() => {
          console.log('Logout pressed');
        }}
      >
        <Ionicons name="log-out-outline" size={24} color="#FFFFFF" style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: SPACING.lg,
  },
  header: {
    marginBottom: SPACING.xl,
  },
  title: {
    ...FONTS.bold,
    fontSize: SIZES.extraLarge,
    marginBottom: SPACING.sm,
  },
  subtitle: {
    ...FONTS.regular,
    fontSize: SIZES.medium,
  },
  settingsList: {
    gap: SPACING.md,
    marginBottom: SPACING.xl,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING.md,
    borderRadius: SIZES.base,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SPACING.md,
  },
  settingInfo: {
    flex: 1,
    marginRight: SPACING.md,
  },
  settingTitle: {
    ...FONTS.medium,
    fontSize: SIZES.medium,
    marginBottom: SPACING.xs,
  },
  settingDescription: {
    ...FONTS.regular,
    fontSize: SIZES.small,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.md,
    borderRadius: SIZES.base,
    marginTop: SPACING.md,
  },
  buttonIcon: {
    marginRight: SPACING.sm,
  },
  buttonText: {
    ...FONTS.medium,
    color: '#FFFFFF',
    fontSize: SIZES.medium,
  },
}); 