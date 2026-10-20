import { useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Card } from '@/components/atoms/Card';
import { Title } from '@/components/atoms/Title';
import { ReportCard } from '@/components/molecules/ReportCard';
import { FiltroStatus, StatusFilter } from '@/components/molecules/StatusFilter';
import { AppScreen } from '@/components/organisms/AppScreen';
import { DENUNCIAS } from '@/constants/denuncias';
import { Cores, Espaco, Fontes } from '@/constants/rotamap';

export default function Denuncias() {
  const router = useRouter();
  const [filtro, setFiltro] = useState<FiltroStatus>(null);

  const lista = useMemo(
    () => (filtro ? DENUNCIAS.filter((denuncia) => denuncia.status === filtro) : DENUNCIAS),
    [filtro]
  );

  return (
    <AppScreen>
      <Title>DENÚNCIAS</Title>
      <View style={styles.bloco}>
        <StatusFilter value={filtro} onChange={setFiltro} />
        <Text style={styles.contagem}>
          {lista.length === 1 ? '1 denúncia' : `${lista.length} denúncias`}
        </Text>
      </View>

      {lista.length === 0 ? (
        <Card>
          <Text style={styles.vazio}>Nenhuma denúncia nesta situação.</Text>
        </Card>
      ) : (
        <View style={styles.lista}>
          {lista.map((denuncia) => (
            <ReportCard
              key={denuncia.id}
              denuncia={denuncia}
              onPress={() =>
                router.push({ pathname: '/denuncia/[id]', params: { id: denuncia.id } })
              }
            />
          ))}
        </View>
      )}
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  bloco: { gap: Espaco.sm },
  contagem: { fontFamily: Fontes.corpo, fontSize: 13, fontWeight: '700', color: Cores.preto },
  lista: { gap: Espaco.sm },
  vazio: { fontFamily: Fontes.corpo, fontSize: 15, color: Cores.placeholder, textAlign: 'center' },
});
