import { AntDesign } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text } from 'react-native';

import { ALVO_TOQUE, Cores, Fontes } from '@/constants/rotamap';

type SocialButtonProps = {
  title: string;
  onPress: () => void;
  /** Ícone opcional à esquerda do rótulo. */
  icon?: 'google';
};

/** Botão secundário de autenticação alternativa. */
export function SocialButton({ title, onPress, icon }: SocialButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={title}
      style={({ pressed }) => [styles.botao, pressed && styles.pressionado]}>
      {icon === 'google' ? <AntDesign name="google" size={18} color="#DB4437" /> : null}
      <Text style={styles.texto}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  botao: {
    minHeight: ALVO_TOQUE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: Cores.branco,
    borderWidth: 1,
    borderColor: Cores.preto,
    borderRadius: ALVO_TOQUE / 2,
    paddingHorizontal: 20,
  },
  pressionado: { backgroundColor: Cores.cinzaClaro },
  texto: { fontFamily: Fontes.corpo, fontSize: 14, fontWeight: '600', color: Cores.preto },
});
