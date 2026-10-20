import { Feather } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { BodyText } from '@/components/atoms/BodyText';
import { Card } from '@/components/atoms/Card';
import { SectionTitle } from '@/components/atoms/SectionTitle';
import { StatusBadge } from '@/components/atoms/StatusBadge';
import { Title } from '@/components/atoms/Title';
import { BackLink } from '@/components/molecules/BackLink';
import { InfoList } from '@/components/molecules/InfoList';
import { StatusTimeline } from '@/components/molecules/StatusTimeline';
import { AppScreen } from '@/components/organisms/AppScreen';
import { buscarDenuncia } from '@/constants/denuncias';
import { Cores, Espaco, Fontes } from '@/constants/rotamap';

export default function DetalheDenuncia() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const denuncia = buscarDenuncia(id);

  if (!denuncia) {
    return (
      <AppScreen>
        <BackLink onPress={() => router.back()} />
        <Title>NÃO ENCONTRADA</Title>
        <BodyText style={styles.centralizado}>
          Esta denúncia não existe ou foi removida.
        </BodyText>
      </AppScreen>
    );
  }

  return (
    <AppScreen>
      <BackLink onPress={() => router.back()} label="Minhas denúncias" />

      <View style={styles.cabecalho}>
        <StatusBadge status={denuncia.status} />
        <Text style={styles.problema}>{denuncia.problema}</Text>
        <Text style={styles.protocolo}>Protocolo #{denuncia.protocolo}</Text>
      </View>

      <View style={styles.foto} accessible accessibilityLabel="Fotografia do local denunciado">
        <Feather name="image" size={64} color={Cores.branco} />
        <Text style={styles.fotoTexto}>Foto enviada pela pessoa denunciante</Text>
      </View>

      <View style={styles.bloco}>
        <SectionTitle>Local</SectionTitle>
        <Card>
          <InfoList
            dados={[
              { rotulo: 'Rua', valor: `${denuncia.rua}, ${denuncia.numero}` },
              { rotulo: 'Bairro', valor: denuncia.bairro },
              { rotulo: 'Registro', valor: denuncia.data },
            ]}
          />
        </Card>
      </View>

      <View style={styles.bloco}>
        <SectionTitle>Descrição</SectionTitle>
        <Card>
          <BodyText>{denuncia.descricao}</BodyText>
        </Card>
      </View>

      <View style={styles.bloco}>
        <SectionTitle>Andamento</SectionTitle>
        <Card>
          <StatusTimeline etapas={denuncia.historico} />
        </Card>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  cabecalho: { gap: Espaco.xs },
  problema: { fontFamily: Fontes.titulo, fontSize: 28, lineHeight: 34, color: Cores.preto },
  protocolo: { fontFamily: Fontes.corpo, fontSize: 13, color: Cores.placeholder },
  foto: {
    height: 170,
    backgroundColor: Cores.oliva,
    borderWidth: 1,
    borderColor: Cores.preto,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    gap: Espaco.sm,
  },
  fotoTexto: { fontFamily: Fontes.corpo, fontSize: 12, color: Cores.branco },
  bloco: { gap: Espaco.sm },
  centralizado: { textAlign: 'center' },
});
