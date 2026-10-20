import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { BodyText } from '@/components/atoms/BodyText';
import { Card } from '@/components/atoms/Card';
import { PrimaryButton } from '@/components/atoms/PrimaryButton';
import { Title } from '@/components/atoms/Title';
import { AppScreen } from '@/components/organisms/AppScreen';
import { Cores, Espaco, Fontes } from '@/constants/rotamap';

/** Protocolo fixo da maquete — na versão com backend vem na resposta do envio. */
const PROTOCOLO = '2026-0482';

export default function Sucesso() {
  const router = useRouter();

  return (
    <AppScreen>
      <View style={styles.conteudo}>
        <View style={styles.selo}>
          <Feather name="check" size={56} color={Cores.branco} />
        </View>

        <Title>DENÚNCIA ENVIADA</Title>

        <BodyText style={styles.texto}>
          Sua denúncia foi registrada e segue para vistoria da prefeitura. Você pode acompanhar o
          andamento na aba Denúncias.
        </BodyText>

        <Card style={styles.protocolo}>
          <Text style={styles.rotulo}>PROTOCOLO</Text>
          <Text style={styles.numero}>#{PROTOCOLO}</Text>
        </Card>
      </View>

      <View style={styles.acoes}>
        <PrimaryButton
          title="ACOMPANHAR"
          onPress={() => router.replace('/(tabs)/denuncias')}
        />
        <PrimaryButton title="VOLTAR AO MAPA" onPress={() => router.replace('/(tabs)')} />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  conteudo: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: Espaco.md },
  selo: {
    width: 104,
    height: 104,
    borderRadius: 52,
    backgroundColor: Cores.preto,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: { textAlign: 'center' },
  protocolo: { alignSelf: 'stretch', alignItems: 'center' },
  rotulo: {
    fontFamily: Fontes.corpo,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2,
    color: Cores.placeholder,
  },
  numero: {
    fontFamily: Fontes.corpo,
    fontSize: 26,
    fontWeight: '800',
    color: Cores.preto,
    marginTop: 2,
  },
  acoes: { gap: Espaco.sm },
});
