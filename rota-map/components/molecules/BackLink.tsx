import { Feather } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text } from 'react-native';

import { ALVO_TOQUE, Cores, Fontes } from '@/constants/rotamap';

/** Molecule: ícone e rótulo de retorno. Alvo de toque completo, não só o texto. */
export function BackLink({ onPress, label = 'Voltar' }: { onPress: () => void; label?: string }) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      hitSlop={8}
      style={({ pressed }) => [styles.area, pressed && styles.pressionado]}>
      <Feather name="arrow-left" size={20} color={Cores.preto} />
      <Text style={styles.texto}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  area: {
    minHeight: ALVO_TOQUE,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  pressionado: { opacity: 0.6 },
  texto: { fontFamily: Fontes.corpo, fontSize: 15, fontWeight: '700', color: Cores.preto },
});
