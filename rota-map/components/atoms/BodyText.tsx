import { StyleSheet, Text, TextProps } from 'react-native';

import { Cores, Fontes } from '@/constants/rotamap';

/** Corpo de texto. Sem-serifa, contraste alto sobre o amarelo da marca. */
export function BodyText({ style, ...props }: TextProps) {
  return <Text style={[styles.corpo, style]} {...props} />;
}

const styles = StyleSheet.create({
  corpo: {
    fontFamily: Fontes.corpo,
    fontSize: 15,
    lineHeight: 21,
    color: Cores.preto,
  },
});
