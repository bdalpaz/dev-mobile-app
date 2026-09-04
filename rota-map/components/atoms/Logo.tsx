import { StyleSheet, Text, View } from 'react-native';

import { Cores, Fontes } from '@/constants/rotamap';

/** Marca do app. Um único elemento indivisível — por isso é um atom. */
export function Logo() {
  return (
    <View
      style={styles.linha}
      accessible
      accessibilityRole="image"
      accessibilityLabel="RotaMap, mapeando a inclusão">
      <View style={styles.losango} />
      <View>
        <Text style={styles.marca}>ROTA</Text>
        <Text style={styles.marca}>MAP</Text>
        <View style={styles.regua} />
        <Text style={styles.slogan}>MAPEANDO A INCLUSÃO</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  linha: { flexDirection: 'row', alignItems: 'center', gap: 18 },
  losango: {
    width: 56,
    height: 56,
    borderWidth: 3,
    borderColor: Cores.preto,
    transform: [{ rotate: '45deg' }],
  },
  marca: {
    fontFamily: Fontes.corpo,
    fontSize: 34,
    lineHeight: 36,
    fontWeight: '800',
    letterSpacing: 2,
    color: Cores.preto,
  },
  regua: { height: 1, backgroundColor: Cores.preto, marginTop: 4 },
  slogan: {
    fontFamily: Fontes.corpo,
    fontSize: 8,
    letterSpacing: 2,
    color: Cores.preto,
    marginTop: 3,
  },
});
