import { Pressable, StyleSheet, Text } from 'react-native';

import { Cores, Fontes } from '@/constants/rotamap';

type ChipProps = {
  label: string;
  selected: boolean;
  onPress: () => void;
};

/** Opção de filtro. Marcada, inverte para preto — não distingue só pela cor, muda o peso também. */
export function Chip({ label, selected, onPress }: ChipProps) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ selected }}
      accessibilityLabel={label}
      hitSlop={6}
      style={({ pressed }) => [
        styles.chip,
        selected && styles.selecionado,
        pressed && !selected && styles.pressionado,
      ]}>
      <Text style={[styles.texto, selected && styles.textoSelecionado]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    minHeight: 36,
    justifyContent: 'center',
    backgroundColor: Cores.branco,
    borderWidth: 1,
    borderColor: Cores.preto,
    borderRadius: 999,
    paddingHorizontal: 14,
  },
  selecionado: { backgroundColor: Cores.preto },
  pressionado: { backgroundColor: Cores.cinzaClaro },
  texto: { fontFamily: Fontes.corpo, fontSize: 13, fontWeight: '600', color: Cores.preto },
  textoSelecionado: { color: Cores.branco, fontWeight: '800' },
});
