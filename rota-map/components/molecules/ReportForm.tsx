import { StyleSheet, View } from 'react-native';

import { FormField } from './FormField';

/**
 * Molecule: os campos de endereço da denúncia, reaproveitando o FormField do login.
 *
 * Número e complemento ficam em linhas próprias: lado a lado, os dois rótulos
 * somados não cabem na largura do celular e o segundo campo saía da tela.
 */
export function ReportForm() {
  return (
    <View style={styles.grupo}>
      <FormField label="Problema" placeholder="Falta de rampa" />
      <FormField label="Rua" placeholder="Nome da rua" />
      <FormField label="Número" placeholder="1991" keyboardType="number-pad" />
      <FormField label="Complemento" placeholder="Apto 12" />
    </View>
  );
}

const styles = StyleSheet.create({
  grupo: { gap: 12 },
});
