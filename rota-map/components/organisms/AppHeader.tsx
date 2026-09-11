import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { IconButton } from '../atoms/IconButton';
import { Cores, Fontes } from '@/constants/rotamap';

/**
 * Organism: a barra superior do app — início, marca e perfil.
 * Aparece em todas as telas internas.
 */
export function AppHeader() {
  const router = useRouter();

  return (
    <View style={styles.barra}>
      <IconButton name="home" label="Início" onPress={() => router.replace('/(tabs)')} />
      <View style={styles.marca}>
        <Text style={styles.nome}>ROTA MAP</Text>
        <Text style={styles.slogan}>MAPEANDO A INCLUSÃO</Text>
      </View>
      <IconButton name="user" label="Perfil" onPress={() => router.replace('/(tabs)')} />
    </View>
  );
}

const styles = StyleSheet.create({
  barra: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
  },
  marca: { alignItems: 'center' },
  nome: {
    fontFamily: Fontes.corpo,
    fontSize: 17,
    fontWeight: '800',
    letterSpacing: 1.5,
    color: Cores.preto,
  },
  slogan: { fontFamily: Fontes.corpo, fontSize: 7, letterSpacing: 1.5, color: Cores.preto },
});
