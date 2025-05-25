import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS, SHADOWS, SIZES, SPACING } from '../styles/theme';
import { useTheme } from '../theme/ThemeContext';

const features = [
  {
    id: '1',
    title: 'Task Management',
    description: 'Create and track your tasks easily',
    icon: 'checkmark-circle-outline',
  },
  {
    id: '2',
    title: 'Effective Statistics',
    description: 'View reports and statistics about task progress',
    icon: 'stats-chart-outline',
  },
  {
    id: '3',
    title: 'User-Friendly Interface',
    description: 'Great user experience with modern interface',
    icon: 'phone-portrait-outline',
  },
];

export default function DetailScreen() {
  const navigation = useNavigation();
  const { isDarkMode } = useTheme();
  const colors = isDarkMode ? COLORS.dark : COLORS.light;

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.content}
    >
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>Detailed Information</Text>
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
          Learn more about our application
        </Text>
      </View>

      <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Introduction</Text>
        <Text style={[styles.description, { color: colors.textSecondary }]}>
          Our task management application helps you track and complete tasks efficiently. 
          With a user-friendly interface and useful features, we are committed to providing the best experience for our users.
        </Text>

        <Text style={[styles.sectionTitle, { color: colors.text, marginTop: SPACING.lg }]}>
          Key Features
        </Text>
        {features.map((feature) => (
          <View key={feature.id} style={styles.featureItem}>
            <View style={[styles.featureIcon, { backgroundColor: colors.primary + '20' }]}>
              <Ionicons name={feature.icon as any} size={24} color={colors.primary} />
            </View>
            <View style={styles.featureContent}>
              <Text style={[styles.featureTitle, { color: colors.text }]}>
                {feature.title}
              </Text>
              <Text style={[styles.featureDescription, { color: colors.textSecondary }]}>
                {feature.description}
              </Text>
            </View>
          </View>
        ))}
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={() => navigation.goBack()}
      >
        <Text style={[styles.buttonText, { color: colors.card }]}>Go Back</Text>
      </TouchableOpacity>
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
  card: {
    padding: SPACING.lg,
    borderRadius: SIZES.base,
    borderWidth: 1,
    ...SHADOWS.light,
  },
  sectionTitle: {
    ...FONTS.bold,
    fontSize: SIZES.large,
    marginBottom: SPACING.md,
  },
  description: {
    ...FONTS.regular,
    fontSize: SIZES.medium,
    lineHeight: 24,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: SPACING.md,
  },
  featureIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.md,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    ...FONTS.medium,
    fontSize: SIZES.medium,
    marginBottom: SPACING.xs,
  },
  featureDescription: {
    ...FONTS.regular,
    fontSize: SIZES.small,
    lineHeight: 20,
  },
  button: {
    marginTop: SPACING.xl,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.xl,
    borderRadius: SIZES.base,
    alignItems: 'center',
    ...SHADOWS.light,
  },
  buttonText: {
    ...FONTS.medium,
    fontSize: SIZES.medium,
  },
}); 