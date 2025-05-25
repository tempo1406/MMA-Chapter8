import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { COLORS, FONTS, SHADOWS, SIZES, SPACING } from '../styles/theme';
import { useTheme } from '../theme/ThemeContext';

const stats = [
  {
    id: '1',
    title: 'Total tasks',
    value: '12',
    icon: 'list',
    color: COLORS.light.primary,
  },
  {
    id: '2',
    title: 'Completed',
    value: '5',
    icon: 'checkmark-circle',
    color: COLORS.light.success,
  },
  {
    id: '3',
    title: 'In progress',
    value: '4',
    icon: 'time',
    color: COLORS.light.warning,
  },
  {
    id: '4',
    title: 'Not started',
    value: '3',
    icon: 'hourglass-outline',
    color: COLORS.light.secondary,
  },
];

export default function DashboardScreen() {
  const { isDarkMode } = useTheme();
  const colors = isDarkMode ? COLORS.dark : COLORS.light;

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.content}
    >
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>Overview</Text>
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
          Your task statistics
        </Text>
      </View>

      <View style={styles.statsGrid}>
        {stats.map((stat) => (
          <View 
            key={stat.id} 
            style={[
              styles.statCard,
              { 
                backgroundColor: colors.card,
                borderColor: colors.border,
              }
            ]}
          >
            <View style={[styles.statIcon, { backgroundColor: stat.color + '20' }]}>
              <Ionicons name={stat.icon as any} size={24} color={stat.color} />
            </View>
            <Text style={[styles.statValue, { color: colors.text }]}>{stat.value}</Text>
            <Text style={[styles.statTitle, { color: colors.textSecondary }]}>{stat.title}</Text>
          </View>
        ))}
      </View>

      <View style={[styles.chartCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <Text style={[styles.chartTitle, { color: colors.text }]}>Week Progress</Text>
        <View style={styles.chartPlaceholder}>
          <Text style={[styles.chartPlaceholderText, { color: colors.textSecondary }]}>
            The chart will be displayed here
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: SPACING.md,
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
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -SPACING.xs,
    marginBottom: SPACING.lg,
  },
  statCard: {
    width: '48%',
    margin: SPACING.xs,
    padding: SPACING.md,
    borderRadius: SIZES.base,
    borderWidth: 1,
    ...SHADOWS.light,
  },
  statIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  statValue: {
    ...FONTS.bold,
    fontSize: SIZES.extraLarge,
    marginBottom: SPACING.xs,
  },
  statTitle: {
    ...FONTS.medium,
    fontSize: SIZES.small,
  },
  chartCard: {
    padding: SPACING.md,
    borderRadius: SIZES.base,
    borderWidth: 1,
    ...SHADOWS.light,
  },
  chartTitle: {
    ...FONTS.bold,
    fontSize: SIZES.large,
    marginBottom: SPACING.md,
  },
  chartPlaceholder: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: SIZES.base,
  },
  chartPlaceholderText: {
    ...FONTS.regular,
    fontSize: SIZES.medium,
    textAlign: 'center',
  },
}); 