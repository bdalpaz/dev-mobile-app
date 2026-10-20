import { Feather } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { Card } from '../atoms/Card';
import { StatusBadge } from '../atoms/StatusBadge';
import { Denuncia } from '@/constants/denuncias';
import { Cores, Espaco, Fontes } from '@/constants/rotamap';

type ReportCardProps = {
  denuncia: Denuncia;
  onPress: () => void;
};

/** Molecule: o resumo de uma denúncia na listagem — selo, endereço e data. */
export function ReportCard({ denuncia, onPress }: ReportCardProps) {
  const endereco = `${denuncia.rua}, ${denuncia.numero}`;

  return (
    <Card
      onPress={onPress}
      accessibilityLabel={`${denuncia.problema}, ${endereco}, ${denuncia.bairro}. Protocolo ${denuncia.protocolo}.`}>
      <View style={styles.topo}>
        <StatusBadge status={denuncia.status} />
        <Text style={styles.protocolo}>#{denuncia.protocolo}</Text>
      </View>

      <Text style={styles.problema}>{denuncia.problema}</Text>

      <View style={styles.linha}>
        <Feather name="map-pin" size={14} color={Cores.placeholder} />
        <Text style={styles.detalhe} numberOfLines={1}>
          {endereco} — {denuncia.bairro}
        </Text>
      </View>

      <View style={styles.rodape}>
        <View style={styles.linha}>
          <Feather name="calendar" size={14} color={Cores.placeholder} />
          <Text style={styles.detalhe}>{denuncia.data}</Text>
        </View>
        <Feather name="chevron-right" size={20} color={Cores.preto} />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  topo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Espaco.sm,
  },
  protocolo: {
    fontFamily: Fontes.corpo,
    fontSize: 12,
    fontWeight: '700',
    color: Cores.placeholder,
  },
  problema: {
    fontFamily: Fontes.corpo,
    fontSize: 18,
    fontWeight: '700',
    color: Cores.preto,
    marginBottom: Espaco.xs,
  },
  linha: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  detalhe: { flexShrink: 1, fontFamily: Fontes.corpo, fontSize: 13, color: Cores.placeholder },
  rodape: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Espaco.sm,
  },
});
