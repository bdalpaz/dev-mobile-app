import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { PrimaryButton } from '@/components/atoms/PrimaryButton';
import { NeighborhoodSelect } from '@/components/molecules/NeighborhoodSelect';
import { StatTiles } from '@/components/molecules/StatTiles';
import { AppScreen } from '@/components/organisms/AppScreen';
import { DENUNCIAS, contarPorStatus } from '@/constants/denuncias';
import { Cores, Espaco, Fontes } from '@/constants/rotamap';

export default function Mapa() {
  const router = useRouter();
  const [bairro, setBairro] = useState<string | null>(null);

  const noBairro = bairro
    ? DENUNCIAS.filter((denuncia) => denuncia.bairro === bairro).length
    : null;

  return (
    <AppScreen>
      <View style={styles.bloco}>
        <NeighborhoodSelect value={bairro} onChange={setBairro} />
        {bairro ? (
          <Text style={styles.aviso}>
            {noBairro === 0
              ? `Nenhuma denúncia registrada em ${bairro}. Seja a primeira pessoa a apontar um problema.`
              : `${noBairro} ${noBairro === 1 ? 'denúncia' : 'denúncias'} em ${bairro}.`}
          </Text>
        ) : null}
      </View>

      <View style={styles.mapa}>
        <Image
          source={require('@/assets/images/mapa-chapeco.png')}
          style={styles.imagem}
          contentFit="contain"
          accessibilityLabel="Mapa dos bairros de Chapecó"
        />
      </View>

      <StatTiles
        dados={[
          { valor: DENUNCIAS.length, rotulo: 'Denúncias\nno mapa' },
          { valor: contarPorStatus('execucao'), rotulo: 'Em\nexecução' },
          { valor: contarPorStatus('resolvida'), rotulo: 'Já\nresolvidas' },
        ]}
      />

      <PrimaryButton title="DENUNCIAR" onPress={() => router.push('/denuncia')} />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  bloco: { gap: Espaco.sm },
  aviso: { fontFamily: Fontes.corpo, fontSize: 13, lineHeight: 18, color: Cores.preto },
  mapa: { flex: 1, minHeight: 300 },
  imagem: { flex: 1, width: '100%' },
});
