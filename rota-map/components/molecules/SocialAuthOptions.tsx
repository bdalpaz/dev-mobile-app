import { StyleSheet, View } from 'react-native';

import { SocialButton } from '../atoms/SocialButton';

/** Molecule: as alternativas de entrada, iguais no login e no cadastro. */
export function SocialAuthOptions({ onPress }: { onPress: () => void }) {
  return (
    <View style={styles.grupo}>
      <SocialButton title="Continuar com o Google" icon="google" onPress={onPress} />
      <SocialButton title="Continuar de outra forma" onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  grupo: { gap: 10 },
});
