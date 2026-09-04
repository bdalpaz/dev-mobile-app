import { Pressable, StyleSheet, Text } from 'react-native';

import { ALVO_TOQUE, Cores, Fontes } from '@/constants/rotamap';

type LinkTextProps = {
  children: string;
  onPress: () => void;
};

/**
 * Link textual.
 *
 * O Figma usava azul claro (#5E87C4) sobre o amarelo da marca (#F3C912):
 * razão de contraste 2,3:1, abaixo dos 4,5:1 exigidos pela WCAG 2.2 AA para
 * texto normal. Trocado por preto em negrito sublinhado — 12,2:1 — e o
 * sublinhado garante que o link não dependa só da cor para ser identificado.
 */
export function LinkText({ children, onPress }: LinkTextProps) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="link"
      accessibilityLabel={children}
      hitSlop={12}
      style={styles.area}>
      <Text style={styles.link}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  area: { minHeight: ALVO_TOQUE, justifyContent: 'center' },
  link: {
    fontFamily: Fontes.corpo,
    fontSize: 15,
    fontWeight: '700',
    color: Cores.preto,
    textDecorationLine: 'underline',
  },
});
