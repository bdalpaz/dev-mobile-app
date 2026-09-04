import { StyleSheet, View } from 'react-native';

import { PrimaryButton } from '../atoms/PrimaryButton';
import { FormField } from './FormField';

/** Molecule: dois campos de entrada e um atom de ação. */
export function LoginForm({ onSubmit }: { onSubmit: () => void }) {
  return (
    <View style={styles.grupo}>
      <FormField
        label="Email"
        placeholder="josefino433@gmail.com"
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
      />
      <FormField label="Senha" placeholder="••••••••" secureTextEntry autoComplete="current-password" />
      <PrimaryButton title="Login" onPress={onSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  grupo: { gap: 12 },
});
