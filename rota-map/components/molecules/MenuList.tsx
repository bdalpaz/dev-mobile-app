import { Feather } from '@expo/vector-icons';
import { Fragment } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Card } from '../atoms/Card';
import { ALVO_TOQUE, Cores, Fontes } from '@/constants/rotamap';

export type ItemMenu = {
  icone: keyof typeof Feather.glyphMap;
  rotulo: string;
  onPress: () => void;
};

/** Molecule: a lista de ajustes do perfil, dentro de um único card. */
export function MenuList({ itens }: { itens: ItemMenu[] }) {
  return (
    <Card style={styles.card}>
      {itens.map(({ icone, rotulo, onPress }, indice) => (
        <Fragment key={rotulo}>
          {indice > 0 ? <View style={styles.divisor} /> : null}
          <Pressable
            onPress={onPress}
            accessibilityRole="button"
            accessibilityLabel={rotulo}
            style={({ pressed }) => [styles.linha, pressed && styles.pressionada]}>
            <Feather name={icone} size={19} color={Cores.preto} />
            <Text style={styles.rotulo}>{rotulo}</Text>
            <Feather name="chevron-right" size={19} color={Cores.placeholder} />
          </Pressable>
        </Fragment>
      ))}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { paddingVertical: 0, paddingHorizontal: 0, overflow: 'hidden' },
  linha: {
    minHeight: ALVO_TOQUE,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  pressionada: { backgroundColor: Cores.cinzaClaro },
  rotulo: { flex: 1, fontFamily: Fontes.corpo, fontSize: 15, color: Cores.preto },
  divisor: { height: 1, backgroundColor: Cores.cinzaClaro, marginHorizontal: 16 },
});
