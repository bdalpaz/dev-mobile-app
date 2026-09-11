import { StyleSheet, View } from 'react-native';

import { BodyText } from '../atoms/BodyText';
import { Title } from '../atoms/Title';
import { UploadBox } from '../atoms/UploadBox';

/** Molecule: título, instrução e área de envio — a etapa da foto da denúncia. */
export function PhotoUpload({ onPress }: { onPress: () => void }) {
  return (
    <View style={styles.grupo}>
      <Title>IMAGEM</Title>
      <BodyText style={styles.instrucao}>
        Apresente uma fotografia do local denunciado
      </BodyText>
      <UploadBox onPress={onPress} label="Enviar fotografia do local denunciado" />
    </View>
  );
}

const styles = StyleSheet.create({
  grupo: { gap: 8 },
  instrucao: { textAlign: 'center', marginBottom: 8 },
});
