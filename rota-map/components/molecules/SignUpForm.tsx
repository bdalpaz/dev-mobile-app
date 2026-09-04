import { StyleSheet, View } from 'react-native';

import { PrimaryButton } from '../atoms/PrimaryButton';
import { FormField } from './FormField';

/** Molecule: os campos do cadastro reaproveitando o mesmo FormField do login. */
export function SignUpForm({ onSubmit }: { onSubmit: () => void }) {
  return (
    <View style={styles.grupo}>
      <FormField label="Nome" placeholder="Josefino Augusto" autoComplete="name" />
      <FormField
        label="Email"
        placeholder="josefino433@gmail.com"
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
      />
      <FormField
        label="Telefone"
        placeholder="(49) 9 4002-8922"
        keyboardType="phone-pad"
        autoComplete="tel"
      />
      <FormField label="Senha" placeholder="••••••••" secureTextEntry autoComplete="new-password" />
      <FormField label="Confirmar senha" placeholder="••••••••" secureTextEntry />
      <PrimaryButton title="Cadastrar-se" onPress={onSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  grupo: { gap: 12 },
});
