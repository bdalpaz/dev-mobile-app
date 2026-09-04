import { Pressable, StyleSheet, Text } from 'react-native';

import { ALVO_TOQUE, Cores, Fontes } from '@/constants/rotamap';

type PrimaryButtonProps = {
  title: string;
  onPress: () => void;
};

/** Ação principal da tela. O atom recebe o título e a ação; a tela decide o efeito. */
export function PrimaryButton({ title, onPress }: PrimaryButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={title}
      style={({ pressed }) => [styles.botao, pressed && styles.pressionado]}>
      <Text style={styles.texto}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  botao: {
    minHeight: ALVO_TOQUE + 8,
    backgroundColor: Cores.branco,
    borderWidth: 1,
    borderColor: Cores.preto,
    borderRadius: (ALVO_TOQUE + 8) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  pressionado: { backgroundColor: Cores.cinzaClaro },
  texto: { fontFamily: Fontes.corpo, fontSize: 22, color: Cores.preto },
});
