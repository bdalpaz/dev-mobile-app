import { Feather } from '@expo/vector-icons';
import { Pressable, StyleSheet } from 'react-native';

import { ALVO_TOQUE, Cores } from '@/constants/rotamap';

type IconButtonProps = {
  name: keyof typeof Feather.glyphMap;
  label: string;
  onPress: () => void;
  size?: number;
};

/** Botão só com ícone. O rótulo acessível é obrigatório — sem ele o leitor de tela anuncia nada. */
export function IconButton({ name, label, onPress, size = 30 }: IconButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      hitSlop={8}
      style={({ pressed }) => [styles.area, pressed && styles.pressionado]}>
      <Feather name={name} size={size} color={Cores.preto} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  area: {
    minWidth: ALVO_TOQUE,
    minHeight: ALVO_TOQUE,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: ALVO_TOQUE / 2,
  },
  pressionado: { opacity: 0.6 },
});
