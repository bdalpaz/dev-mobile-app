import { StyleSheet, Text, View } from 'react-native';

import { Card } from '../atoms/Card';
import { Cores, Fontes } from '@/constants/rotamap';

export type Estatistica = {
  valor: number | string;
  rotulo: string;
};

/** Molecule: a fileira de números do perfil e do mapa. */
export function StatTiles({ dados }: { dados: Estatistica[] }) {
  return (
    <View style={styles.fileira}>
      {dados.map(({ valor, rotulo }) => (
        <Card key={rotulo} style={styles.bloco}>
          <View accessible accessibilityLabel={`${valor} ${rotulo}`}>
            <Text style={styles.valor}>{valor}</Text>
            <Text style={styles.rotulo}>{rotulo}</Text>
          </View>
        </Card>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  fileira: { flexDirection: 'row', gap: 8 },
  bloco: { flex: 1, paddingVertical: 12, paddingHorizontal: 10 },
  valor: {
    fontFamily: Fontes.corpo,
    fontSize: 26,
    fontWeight: '800',
    color: Cores.preto,
    textAlign: 'center',
  },
  rotulo: {
    fontFamily: Fontes.corpo,
    fontSize: 11,
    lineHeight: 14,
    color: Cores.placeholder,
    textAlign: 'center',
    marginTop: 2,
  },
});
