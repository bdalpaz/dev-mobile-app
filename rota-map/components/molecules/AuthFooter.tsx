import { Feather } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

import { BodyText } from '../atoms/BodyText';
import { LinkText } from '../atoms/LinkText';
import { Cores } from '@/constants/rotamap';

type AuthFooterProps = {
  question: string;
  linkLabel: string;
  onPressLink: () => void;
};

/** Molecule: troca entre login e cadastro, termos de uso e redes sociais. */
export function AuthFooter({ question, linkLabel, onPressLink }: AuthFooterProps) {
  return (
    <View style={styles.rodape}>
      <View style={styles.divisor} />
      <View style={styles.troca}>
        <BodyText>{question}</BodyText>
        <LinkText onPress={onPressLink}>{linkLabel}</LinkText>
      </View>
      <BodyText style={styles.termos}>
        Ao continuar, você concorda com os Termos de Uso. Leia nossa Política de Privacidade.
      </BodyText>
      <View style={styles.redes}>
        <Feather name="instagram" size={26} color={Cores.preto} accessibilityLabel="Instagram" />
        <Feather name="facebook" size={26} color={Cores.preto} accessibilityLabel="Facebook" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rodape: { alignItems: 'center', gap: 4 },
  divisor: { height: 1, alignSelf: 'stretch', backgroundColor: Cores.preto, marginBottom: 8 },
  troca: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  termos: { textAlign: 'center', fontSize: 13, lineHeight: 18 },
  redes: { flexDirection: 'row', gap: 20, marginTop: 12 },
});
