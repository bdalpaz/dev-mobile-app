import { Feather } from '@expo/vector-icons';
import { Pressable, StyleSheet } from 'react-native';

import { Cores } from '@/constants/rotamap';

type UploadBoxProps = {
  onPress: () => void;
  label: string;
};

/** Área de envio de foto. O atom só desenha e avisa o toque; a tela decide a origem da imagem. */
export function UploadBox({ onPress, label }: UploadBoxProps) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      style={({ pressed }) => [styles.caixa, pressed && styles.pressionada]}>
      <Feather name="download" size={72} color={Cores.branco} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  caixa: {
    height: 190,
    backgroundColor: Cores.oliva,
    borderTopWidth: 3,
    borderBottomWidth: 3,
    borderColor: Cores.preto,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressionada: { opacity: 0.85 },
});
