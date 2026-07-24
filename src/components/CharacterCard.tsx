import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Character } from '@types';
import { COLORS, SPACING, BORDER_RADIUS } from '@constants/theme';

interface CharacterCardProps {
  character: Character;
  onSelect?: () => void;
  selected?: boolean;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  onSelect,
  selected = false,
}) => {
  const rarityColors: Record<string, string> = {
    common: COLORS.rarityCommon,
    rare: COLORS.rarityRare,
    epic: COLORS.rarityEpic,
    legendary: COLORS.rarityLegendary,
  };

  return (
    <TouchableOpacity
      onPress={onSelect}
      style={[
        styles.container,
        selected && styles.selected,
      ]}
    >
      {character.image && (
        <Image source={{ uri: character.image }} style={styles.image} />
      )}
      <View style={styles.overlay}>
        <Text style={styles.name}>{character.name}</Text>
        <Text style={styles.series}>{character.series}</Text>
        <View
          style={[
            styles.rarityBadge,
            { backgroundColor: rarityColors[character.rarity] },
          ]}
        >
          <Text style={styles.rarityText}>{character.rarity.toUpperCase()}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: BORDER_RADIUS.lg,
    overflow: 'hidden',
    marginBottom: SPACING.md,
    borderWidth: 2,
    borderColor: COLORS.borderLight,
    height: 180,
  },
  selected: {
    borderColor: COLORS.primary,
    borderWidth: 3,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: SPACING.md,
  },
  name: {
    color: COLORS.textPrimary,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: SPACING.xs,
  },
  series: {
    color: COLORS.textSecondary,
    fontSize: 12,
    marginBottom: SPACING.sm,
  },
  rarityBadge: {
    paddingVertical: SPACING.xs,
    paddingHorizontal: SPACING.md,
    borderRadius: BORDER_RADIUS.sm,
    alignSelf: 'flex-start',
  },
  rarityText: {
    color: '#000',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default CharacterCard;
