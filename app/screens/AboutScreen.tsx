import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { COLORS, FONTS, SHADOWS, SIZES, SPACING } from '../styles/theme';
import { useTheme } from '../theme/ThemeContext';

const teamMembers = [
  {
    id: '1',
    name: 'John Doe',
    role: 'Lead Developer',
    avatar: 'data:image/jpeg;base64,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',
  },
  {
    id: '2',
    name: 'Jane Smith',
    role: 'UI/UX Designer',
    avatar: 'data:image/jpeg;base64,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',
  },
  {
    id: '3',
    name: 'Mike Johnson',
    role: 'Product Manager',
    avatar: 'data:image/jpeg;base64,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',
  },
];

const contactInfo = [
  {
    id: '1',
    icon: 'mail-outline',
    title: 'Email',
    value: 'contact@taskmanager.com',
  },
  {
    id: '2',
    icon: 'call-outline',
    title: 'Phone',
    value: '+1 (555) 123-4567',
  },
  {
    id: '3',
    icon: 'location-outline',
    title: 'Address',
    value: '123 Task Street, Tech City',
  },
];

export default function AboutScreen() {
  const { isDarkMode } = useTheme();
  const colors = isDarkMode ? COLORS.dark : COLORS.light;

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.content}
    >
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>About Us</Text>
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
          Our Development Team
        </Text>
      </View>

      <View style={[styles.teamSection, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Team</Text>
        {teamMembers.map((member) => (
          <View key={member.id} style={styles.memberCard}>
            <Image source={{ uri: member.avatar }} style={styles.avatar} />
            <View style={styles.memberInfo}>
              <Text style={[styles.memberName, { color: colors.text }]}>{member.name}</Text>
              <Text style={[styles.memberRole, { color: colors.textSecondary }]}>{member.role}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={[styles.contactSection, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Contact</Text>
        {contactInfo.map((item) => (
          <View key={item.id} style={styles.contactItem}>
            <View style={[styles.contactIcon, { backgroundColor: colors.primary + '20' }]}>
              <Ionicons name={item.icon as any} size={24} color={colors.primary} />
            </View>
            <View style={styles.contactInfo}>
              <Text style={[styles.contactTitle, { color: colors.text }]}>{item.title}</Text>
              <Text style={[styles.contactValue, { color: colors.textSecondary }]}>{item.value}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={[styles.footer, { borderTopColor: colors.border }]}>
        <Text style={[styles.footerText, { color: colors.textSecondary }]}>
          © 2024 Task Management App. All rights reserved.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: SPACING.lg,
  },
  header: {
    marginBottom: SPACING.lg,
  },
  title: {
    ...FONTS.bold,
    fontSize: SIZES.extraLarge,
    marginBottom: SPACING.xs,
  },
  subtitle: {
    ...FONTS.regular,
    fontSize: SIZES.medium,
  },
  teamSection: {
    padding: SPACING.lg,
    borderRadius: SIZES.base,
    borderWidth: 1,
    marginBottom: SPACING.lg,
    ...SHADOWS.light,
  },
  sectionTitle: {
    ...FONTS.bold,
    fontSize: SIZES.large,
    marginBottom: SPACING.md,
  },
  memberCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: SPACING.md,
  },
  memberInfo: {
    flex: 1,
  },
  memberName: {
    ...FONTS.medium,
    fontSize: SIZES.medium,
    marginBottom: SPACING.xs,
  },
  memberRole: {
    ...FONTS.regular,
    fontSize: SIZES.small,
  },
  contactSection: {
    padding: SPACING.lg,
    borderRadius: SIZES.base,
    borderWidth: 1,
    marginBottom: SPACING.lg,
    ...SHADOWS.light,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  contactIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.md,
  },
  contactInfo: {
    flex: 1,
  },
  contactTitle: {
    ...FONTS.medium,
    fontSize: SIZES.medium,
    marginBottom: SPACING.xs,
  },
  contactValue: {
    ...FONTS.regular,
    fontSize: SIZES.small,
  },
  footer: {
    paddingTop: SPACING.lg,
    borderTopWidth: 1,
    alignItems: 'center',
  },
  footerText: {
    ...FONTS.regular,
    fontSize: SIZES.small,
    textAlign: 'center',
  },
}); 