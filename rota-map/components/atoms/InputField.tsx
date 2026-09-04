import { StyleSheet, TextInput, TextInputProps } from 'react-native';

import { ALVO_TOQUE, Cores, Fontes } from '@/constants/rotamap';

/**
 * Campo de entrada. Unidade mínima da interface: recebe propriedades, exibe um
 * campo e não conhece a tela em que está.
 */
export function InputField({ style, ...props }: TextInputProps) {
  return (
    <TextInput
      placeholderTextColor={Cores.placeholder}
      style={[styles.campo, style]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  campo: {
    minHeight: ALVO_TOQUE,
    backgroundColor: Cores.branco,
    borderWidth: 1,
    borderColor: Cores.preto,
    borderRadius: ALVO_TOQUE / 2,
    paddingHorizontal: 16,
    fontFamily: Fontes.corpo,
    fontSize: 15,
    color: Cores.preto,
  },
});
