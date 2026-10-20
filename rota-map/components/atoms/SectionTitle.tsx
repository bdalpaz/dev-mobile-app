import { StyleSheet, Text } from 'react-native';

import { Cores, Fontes } from '@/constants/rotamap';

/** Cabeçalho de bloco dentro de uma tela. Menor que o Title, que nomeia a tela inteira. */
export function SectionTitle({ children }: { children: string }) {
  return (
    <Text accessibilityRole="header" style={styles.titulo}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontFamily: Fontes.corpo,
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    color: Cores.preto,
  },
});
