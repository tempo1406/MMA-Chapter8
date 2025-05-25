import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    Dimensions,
    FlatList,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { COLORS, FONTS, SHADOWS, SIZES, SPACING } from '../styles/theme';
import { useTheme } from '../theme/ThemeContext';

const products = [
  {
    id: '1',
    name: 'Premium Laptop',
    description: 'High-performance laptop with the latest technology',
    price: '$1,299',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853',
    category: 'Electronics',
    rating: 4.5,
    stock: 15,
  },
  {
    id: '2',
    name: 'Wireless Headphones',
    description: 'Noise-cancelling wireless headphones with premium sound',
    price: '$199',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    category: 'Audio',
    rating: 4.8,
    stock: 30,
  },
  {
    id: '3',
    name: 'Smart Watch',
    description: 'Feature-rich smartwatch with health monitoring',
    price: '$299',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
    category: 'Wearables',
    rating: 4.3,
    stock: 20,
  },
  {
    id: '4',
    name: 'Professional Camera',
    description: 'High-resolution camera for professional photography',
    price: '$899',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
    category: 'Photography',
    rating: 4.7,
    stock: 10,
  },
];

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  rating: number;
  stock: number;
}

export default function ProductsScreen() {
  const navigation = useNavigation();
  const { isDarkMode } = useTheme();
  const colors = isDarkMode ? COLORS.dark : COLORS.light;
  const [searchQuery, setSearchQuery] = useState('');
  const windowWidth = Dimensions.get('window').width;
  const isTablet = windowWidth >= 600;
  const numColumns = isTablet ? 2 : 1;

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderProductCard = ({ item }: { item: Product }) => (
    <TouchableOpacity
      style={[styles.productCard, { backgroundColor: colors.card, borderColor: colors.border }]}
      onPress={() => navigation.navigate('ProductDetail', { product: item })}
    >
      <Image
        source={{ uri: item.image }}
        style={styles.productImage}
        resizeMode="cover"
      />
      <View style={styles.productInfo}>
        <Text style={[styles.productName, { color: colors.text }]}>{item.name}</Text>
        <Text style={[styles.productPrice, { color: colors.primary }]}>{item.price}</Text>
        <Text 
          style={[styles.productDescription, { color: colors.textSecondary }]}
          numberOfLines={2}
        >
          {item.description}
        </Text>
        <View style={styles.productMeta}>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={16} color={colors.primary} />
            <Text style={[styles.ratingText, { color: colors.textSecondary }]}>
              {item.rating}
            </Text>
          </View>
          <Text style={[styles.stockText, { color: colors.textSecondary }]}>
            {item.stock} in stock
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.searchContainer, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <Ionicons name="search" size={20} color={colors.textSecondary} style={styles.searchIcon} />
        <TextInput
          style={[styles.searchInput, { color: colors.text }]}
          placeholder="Search products..."
          placeholderTextColor={colors.textSecondary}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <FlatList
        data={filteredProducts}
        renderItem={renderProductCard}
        keyExtractor={item => item.id}
        numColumns={numColumns}
        contentContainerStyle={styles.productList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    margin: SPACING.lg,
    padding: SPACING.md,
    borderRadius: SIZES.base,
    borderWidth: 1,
    ...SHADOWS.light,
  },
  searchIcon: {
    marginRight: SPACING.sm,
  },
  searchInput: {
    flex: 1,
    ...FONTS.regular,
    fontSize: SIZES.medium,
  },
  productList: {
    padding: SPACING.lg,
  },
  productCard: {
    flex: 1,
    margin: SPACING.sm,
    borderRadius: SIZES.base,
    borderWidth: 1,
    overflow: 'hidden',
    ...SHADOWS.light,
  },
  productImage: {
    width: '100%',
    height: 200,
  },
  productInfo: {
    padding: SPACING.md,
  },
  productName: {
    ...FONTS.bold,
    fontSize: SIZES.medium,
    marginBottom: SPACING.xs,
  },
  productPrice: {
    ...FONTS.bold,
    fontSize: SIZES.large,
    marginBottom: SPACING.sm,
  },
  productDescription: {
    ...FONTS.regular,
    fontSize: SIZES.small,
    marginBottom: SPACING.md,
    lineHeight: 20,
  },
  productMeta: {
    flexDirection: 'row' as const,
    justifyContent: 'space-between' as const,
    alignItems: 'center' as const,
  },
  ratingContainer: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
  },
  ratingText: {
    ...FONTS.medium,
    fontSize: SIZES.small,
    marginLeft: SPACING.xs,
  },
  stockText: {
    ...FONTS.regular,
    fontSize: SIZES.small,
  },
}); 