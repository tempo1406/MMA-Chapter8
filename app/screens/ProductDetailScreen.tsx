import { Ionicons } from '@expo/vector-icons';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DrawerParamList } from '../_layout';
import { COLORS, FONTS, SHADOWS, SIZES, SPACING } from '../styles/theme';
import { useTheme } from '../theme/ThemeContext';

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

interface RouteParams {
  product: Product;
}

type NavigationProp = DrawerNavigationProp<DrawerParamList>;

export default function ProductDetailScreen() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute();
  const { product } = route.params as RouteParams;
  const { isDarkMode } = useTheme();
  const colors = isDarkMode ? COLORS.dark : COLORS.light;
  const windowWidth = Dimensions.get('window').width;
  const isTablet = windowWidth >= 600;

  const handleBackToProducts = () => {
    navigation.navigate('Products');
  };

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={[styles.content, { padding: isTablet ? SPACING.xl : SPACING.lg }]}
    >
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={handleBackToProducts}
        >
          <Ionicons name="arrow-back" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={[styles.title, { color: colors.text }]}>{product.name}</Text>
      </View>

      <View style={[styles.imageContainer, { backgroundColor: colors.card }]}>
        <Image
          source={{ uri: product.image }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <Text style={[styles.productName, { color: colors.text }]}>
          {product.name}
        </Text>
        
        <Text style={[styles.price, { color: colors.primary }]}>
          {product.price}
        </Text>

        <Text style={[styles.description, { color: colors.textSecondary }]}>
          {product.description}
        </Text>

        <View style={styles.featuresContainer}>
          <Text style={[styles.featuresTitle, { color: colors.text }]}>
            Features:
          </Text>
          
          {[
            'High-quality materials',
            'Modern design',
            'Easy to maintain',
            'Durable construction',
          ].map((feature, index) => (
            <View key={index} style={styles.featureItem}>
              <Ionicons
                name="checkmark-circle"
                size={24}
                color={colors.primary}
                style={styles.featureIcon}
              />
              <Text style={[styles.featureText, { color: colors.text }]}>
                {feature}
              </Text>
            </View>
          ))}
        </View>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.primary }]}
        >
          <Text style={[styles.buttonText, { color: '#FFFFFF' }]}>
            Add to cart
          </Text>
        </TouchableOpacity>
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
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    marginBottom: SPACING.lg,
  },
  backButton: {
    marginRight: SPACING.md,
    padding: SPACING.xs,
  },
  title: {
    ...FONTS.bold,
    fontSize: SIZES.large,
  },
  imageContainer: {
    borderRadius: SIZES.base,
    overflow: 'hidden',
    marginBottom: SPACING.lg,
    ...SHADOWS.light,
  },
  image: {
    width: '100%',
    height: 320,
  },
  card: {
    padding: SPACING.lg,
    borderRadius: SIZES.base,
    borderWidth: 1,
    ...SHADOWS.light,
  },
  productName: {
    ...FONTS.bold,
    fontSize: SIZES.extraLarge,
    marginBottom: SPACING.sm,
  },
  price: {
    ...FONTS.bold,
    fontSize: SIZES.large,
    marginBottom: SPACING.md,
  },
  description: {
    ...FONTS.regular,
    fontSize: SIZES.medium,
    marginBottom: SPACING.xl,
    lineHeight: 24,
  },
  featuresContainer: {
    marginBottom: SPACING.xl,
  },
  featuresTitle: {
    ...FONTS.medium,
    fontSize: SIZES.medium,
    marginBottom: SPACING.md,
  },
  featureItem: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    marginBottom: SPACING.sm,
  },
  featureIcon: {
    marginRight: SPACING.sm,
  },
  featureText: {
    ...FONTS.regular,
    fontSize: SIZES.medium,
  },
  button: {
    marginTop: SPACING.lg,
    padding: SPACING.md,
    borderRadius: SIZES.base,
    alignItems: 'center' as const,
    ...SHADOWS.light,
  },
  buttonText: {
    ...FONTS.medium,
    fontSize: SIZES.medium,
  },
}); 