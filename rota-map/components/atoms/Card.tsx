import { ReactNode } from 'react';
import { Pressable, StyleSheet, View, ViewStyle } from 'react-native';

import { Cores, Espaco } from '@/constants/rotamap';

type CardProps = {
  children: ReactNode;
  /** Sem onPress o card é só uma superfície; com ele vira um botão. */
  onPress?: () => void;
  accessibilityLabel?: string;
  style?: ViewStyle;
};

/** Superfície branca sobre o amarelo da marca. Base de todos os blocos de conteúdo. */
export function Card({ children, onPress, accessibilityLabel, style }: CardProps) {
  if (!onPress) {
    return <View style={[styles.card, style]}>{children}</View>;
  }

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      style={({ pressed }) => [styles.card, style, pressed && styles.pressionado]}>
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Cores.branco,
    borderWidth: 1,
    borderColor: Cores.preto,
    borderRadius: 14,
    padding: Espaco.md,
  },
  pressionado: { backgroundColor: Cores.cinzaClaro },
});
