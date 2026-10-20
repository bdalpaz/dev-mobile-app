import { Feather } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { EtapaHistorico } from '@/constants/denuncias';
import { Cores, Fontes } from '@/constants/rotamap';

/** Molecule: o andamento da denúncia, etapa por etapa. */
export function StatusTimeline({ etapas }: { etapas: EtapaHistorico[] }) {
  return (
    <View>
      {etapas.map((etapa, indice) => {
        const ultima = indice === etapas.length - 1;

        return (
          <View key={etapa.etapa} style={styles.etapa}>
            <View style={styles.trilha}>
              <View style={[styles.marcador, etapa.concluida && styles.marcadorConcluido]}>
                {etapa.concluida ? <Feather name="check" size={12} color={Cores.branco} /> : null}
              </View>
              {ultima ? null : (
                <View style={[styles.linha, etapa.concluida && styles.linhaConcluida]} />
              )}
            </View>
            <View style={styles.textos}>
              <Text style={[styles.rotulo, !etapa.concluida && styles.rotuloPendente]}>
                {etapa.etapa}
              </Text>
              <Text style={styles.data}>{etapa.data ?? 'Aguardando'}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  etapa: { flexDirection: 'row', gap: 12 },
  trilha: { alignItems: 'center' },
  marcador: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: Cores.preto,
    backgroundColor: Cores.branco,
    alignItems: 'center',
    justifyContent: 'center',
  },
  marcadorConcluido: { backgroundColor: Cores.preto },
  linha: { width: 2, flex: 1, minHeight: 22, backgroundColor: Cores.cinzaClaro },
  linhaConcluida: { backgroundColor: Cores.preto },
  textos: { flex: 1, paddingBottom: 16 },
  rotulo: { fontFamily: Fontes.corpo, fontSize: 15, fontWeight: '700', color: Cores.preto },
  rotuloPendente: { fontWeight: '400', color: Cores.placeholder },
  data: { fontFamily: Fontes.corpo, fontSize: 12, color: Cores.placeholder, marginTop: 1 },
});
