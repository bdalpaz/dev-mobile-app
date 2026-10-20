import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { PrimaryButton } from '@/components/atoms/PrimaryButton';
import { Title } from '@/components/atoms/Title';
import { BackLink } from '@/components/molecules/BackLink';
import { NeighborhoodSelect } from '@/components/molecules/NeighborhoodSelect';
import { PhotoUpload } from '@/components/molecules/PhotoUpload';
import { ReportForm } from '@/components/molecules/ReportForm';
import { AppScreen } from '@/components/organisms/AppScreen';
import { Cores, Espaco, Fontes } from '@/constants/rotamap';

export default function NovaDenuncia() {
  const router = useRouter();
  const [bairro, setBairro] = useState<string | null>(null);
  const [fotoEnviada, setFotoEnviada] = useState(false);

  return (
    <AppScreen>
      <BackLink onPress={() => router.back()} label="Voltar ao mapa" />
      <Title>DENÚNCIA</Title>

      <View style={styles.bloco}>
        <NeighborhoodSelect value={bairro} onChange={setBairro} />
        <ReportForm />
      </View>

      <View style={styles.bloco}>
        <PhotoUpload onPress={() => setFotoEnviada(true)} />
        {fotoEnviada ? (
          <Text style={styles.confirmacao}>Fotografia anexada.</Text>
        ) : null}
      </View>

      <PrimaryButton title="CONCLUIR" onPress={() => router.replace('/denuncia/sucesso')} />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  bloco: { gap: Espaco.sm },
  confirmacao: {
    fontFamily: Fontes.corpo,
    fontSize: 13,
    fontWeight: '700',
    color: Cores.preto,
    textAlign: 'center',
  },
});
