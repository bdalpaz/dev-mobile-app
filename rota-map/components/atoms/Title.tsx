import { StyleSheet, Text } from 'react-native';

import { Cores, Fontes } from '@/constants/rotamap';

/** Título de tela. Serifada display, como no Figma — só em textos curtos. */
export function Title({ children }: { children: string }) {
  return (
    <Text accessibilityRole="header" style={styles.titulo}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontFamily: Fontes.titulo,
    fontSize: 40,
    lineHeight: 46,
    fontWeight: '900',
    textAlign: 'center',
    color: Cores.preto,
  },
});
