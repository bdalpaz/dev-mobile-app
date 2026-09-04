import { StyleSheet, Text, TextInputProps, View } from 'react-native';

import { InputField } from '../atoms/InputField';
import { Cores, Fontes } from '@/constants/rotamap';

type FormFieldProps = TextInputProps & {
  label: string;
};

/**
 * Molecule: rótulo + campo lado a lado, como no Figma.
 * Combinação com uma função clara — identificar e capturar um dado.
 */
export function FormField({ label, ...props }: FormFieldProps) {
  return (
    <View style={styles.linha}>
      <Text style={styles.rotulo}>{label}:</Text>
      <InputField style={styles.campo} accessibilityLabel={label} {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  linha: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  rotulo: {
    fontFamily: Fontes.corpo,
    fontSize: 17,
    color: Cores.preto,
    textAlign: 'right',
    minWidth: 96,
  },
  campo: { flex: 1 },
});
