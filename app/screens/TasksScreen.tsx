import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    FlatList,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { COLORS, FONTS, SHADOWS, SIZES, SPACING } from '../styles/theme';
import { useTheme } from '../theme/ThemeContext';

type Task = {
  id: string;
  title: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
};

const initialTasks: Task[] = [
  { id: '1', title: 'Complete weekly report', completed: false, priority: 'high' },
  { id: '2', title: 'Check email', completed: true, priority: 'medium' },
  { id: '3', title: 'Project meeting', completed: false, priority: 'high' },
  { id: '4', title: 'Update documents', completed: false, priority: 'low' },
];

const priorityColors = {
  high: COLORS.light.error,
  medium: COLORS.light.warning,
  low: COLORS.light.success,
};

export default function TasksScreen() {
  const { isDarkMode } = useTheme();
  const colors = isDarkMode ? COLORS.dark : COLORS.light;
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [newTask, setNewTask] = useState('');

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now().toString(),
          title: newTask.trim(),
          completed: false,
          priority: 'medium',
        },
      ]);
      setNewTask('');
    }
  };

  const renderTask = ({ item }: { item: Task }) => (
    <TouchableOpacity
      style={[
        styles.taskItem,
        {
          backgroundColor: colors.card,
          borderColor: colors.border,
        },
      ]}
      onPress={() => toggleTask(item.id)}
    >
      <View style={styles.taskContent}>
        <View style={[styles.checkbox, { borderColor: colors.border }]}>
          {item.completed && (
            <Ionicons name="checkmark" size={16} color={colors.primary} />
          )}
        </View>
        <Text
          style={[
            styles.taskTitle,
            {
              color: colors.text,
              textDecorationLine: item.completed ? 'line-through' : 'none',
            },
          ]}
        >
          {item.title}
        </Text>
      </View>
      <View
        style={[
          styles.priorityIndicator,
          { backgroundColor: priorityColors[item.priority] + '20' },
        ]}
      >
        <Text
          style={[
            styles.priorityText,
            { color: priorityColors[item.priority] },
          ]}
        >
          {item.priority.charAt(0).toUpperCase()}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: colors.background }]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
    >
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>Tasks</Text>
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
          Manage your task list
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: colors.card,
              color: colors.text,
              borderColor: colors.border,
            },
          ]}
          placeholder="Add a new task..."
          placeholderTextColor={colors.textSecondary}
          value={newTask}
          onChangeText={setNewTask}
          onSubmitEditing={addTask}
        />
        <TouchableOpacity
          style={[styles.addButton, { backgroundColor: colors.primary }]}
          onPress={addTask}
        >
          <Ionicons name="add" size={24} color={colors.card} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: SPACING.md,
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
  inputContainer: {
    flexDirection: 'row',
    padding: SPACING.md,
    gap: SPACING.sm,
  },
  input: {
    flex: 1,
    height: 48,
    borderRadius: SIZES.base,
    borderWidth: 1,
    paddingHorizontal: SPACING.md,
    ...FONTS.regular,
    fontSize: SIZES.medium,
  },
  addButton: {
    width: 48,
    height: 48,
    borderRadius: SIZES.base,
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.light,
  },
  list: {
    padding: SPACING.md,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: SPACING.md,
    borderRadius: SIZES.base,
    marginBottom: SPACING.sm,
    borderWidth: 1,
    ...SHADOWS.light,
  },
  taskContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskTitle: {
    ...FONTS.medium,
    fontSize: SIZES.medium,
    flex: 1,
  },
  priorityIndicator: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priorityText: {
    ...FONTS.bold,
    fontSize: SIZES.small,
  },
}); 