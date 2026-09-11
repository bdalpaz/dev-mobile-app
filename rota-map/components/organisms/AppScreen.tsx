import { ReactNode } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppHeader } from './AppHeader';
import { Cores, Espaco, LARGURA_CELULAR } from '@/constants/rotamap';

/**
 * Organism: o casco das telas internas — cabeçalho, fundo amarelo e o conteúdo
 * limitado à largura do frame do Figma.
 */
export function AppScreen({ children }: { children: ReactNode }) {
  return (
    <SafeAreaView style={styles.tela}>
      <ScrollView contentContainerStyle={styles.rolagem} keyboardShouldPersistTaps="handled">
        <View style={styles.moldura}>
          <AppHeader />
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: Cores.amarelo },
  rolagem: { flexGrow: 1, alignItems: 'center', paddingVertical: Espaco.md },
  moldura: {
    width: '100%',
    maxWidth: LARGURA_CELULAR,
    flex: 1,
    gap: Espaco.lg,
    paddingHorizontal: Espaco.md,
  },
});
