import { StyleSheet, Text, View } from 'react-native';

import { Cores, Fontes } from '@/constants/rotamap';

export type Informacao = {
  rotulo: string;
  valor: string;
};

/** Molecule: pares rótulo/valor em coluna. Usada nos detalhes da denúncia. */
export function InfoList({ dados }: { dados: Informacao[] }) {
  return (
    <View style={styles.grupo}>
      {dados.map(({ rotulo, valor }) => (
        <View key={rotulo} style={styles.linha} accessible accessibilityLabel={`${rotulo}: ${valor}`}>
          <Text style={styles.rotulo}>{rotulo}</Text>
          <Text style={styles.valor}>{valor}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grupo: { gap: 10 },
  linha: { flexDirection: 'row', alignItems: 'flex-start', gap: 12 },
  rotulo: { width: 90, fontFamily: Fontes.corpo, fontSize: 13, color: Cores.placeholder },
  valor: { flex: 1, fontFamily: Fontes.corpo, fontSize: 15, color: Cores.preto },
});
