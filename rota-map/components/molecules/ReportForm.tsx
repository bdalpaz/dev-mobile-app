import { StyleSheet, View } from 'react-native';

import { FormField } from './FormField';

/** Molecule: os campos de endereço da denúncia, reaproveitando o FormField do login. */
export function ReportForm() {
  return (
    <View style={styles.grupo}>
      <FormField label="Problema" placeholder="Falta de rampa" />
      <FormField label="Rua" placeholder="Nome da rua" />
      <View style={styles.linha}>
        <View style={styles.numero}>
          <FormField label="Número" placeholder="1991" keyboardType="number-pad" />
        </View>
        <View style={styles.complemento}>
          <FormField label="Compl." placeholder="Apto 12" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  grupo: { gap: 12 },
  linha: { flexDirection: 'row', gap: 8 },
  numero: { flex: 1 },
  complemento: { flex: 1 },
});
