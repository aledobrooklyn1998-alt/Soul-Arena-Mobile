import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS } from '@constants/theme';

interface StatDisplayProps {
  label: string;
  value: number;
  maxValue?: number;
  color?: string;
}

const StatDisplay: React.FC<StatDisplayProps> = ({
  label,
  value,
  maxValue,
  color = COLORS.info,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.valueContainer}>
        <Text style={[styles.value, { color }]}>
          {value}
          {maxValue ? ` / ${maxValue}` : ''}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.bgCard,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.primary,
  },
  label: {
    color: COLORS.textSecondary,
    fontSize: 12,
    marginBottom: SPACING.xs,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  valueContainer: {
    alignItems: 'center',
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default StatDisplay;
