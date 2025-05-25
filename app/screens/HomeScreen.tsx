import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, SHADOWS, SIZES, SPACING } from "../styles/theme";
import { useTheme } from "../theme/ThemeContext";

export default function HomeScreen() {
    const navigation = useNavigation();
    const { isDarkMode } = useTheme();
    const colors = isDarkMode ? COLORS.dark : COLORS.light;

    return (
        <View
            style={[styles.container, { backgroundColor: colors.background }]}
        >
            <View style={styles.content}>
                <Text style={[styles.title, { color: colors.text }]}>
                    Welcome to the application
                </Text>
                <Text
                    style={[styles.subtitle, { color: colors.textSecondary }]}
                >
                    Manage your tasks efficiently
                </Text>

                <TouchableOpacity
                    style={[styles.button, { backgroundColor: colors.primary }]}
                    onPress={() => navigation.navigate("Detail" as never)}
                >
                    <Text style={[styles.buttonText, { color: colors.card }]}>
                    View details
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: SPACING.lg,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        ...FONTS.bold,
        fontSize: SIZES.extraLarge,
        textAlign: "center",
        marginBottom: SPACING.md,
    },
    subtitle: {
        ...FONTS.regular,
        fontSize: SIZES.medium,
        textAlign: "center",
        marginBottom: SPACING.xl,
    },
    button: {
        paddingVertical: SPACING.md,
        paddingHorizontal: SPACING.xl,
        borderRadius: SIZES.base,
        ...SHADOWS.light,
    },
    buttonText: {
        ...FONTS.medium,
        fontSize: SIZES.medium,
    },
});
