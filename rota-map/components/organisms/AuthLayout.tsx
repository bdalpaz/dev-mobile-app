import { ReactNode } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Logo } from '../atoms/Logo';
import { Title } from '../atoms/Title';
import { Cores, Espaco, LARGURA_CELULAR } from '@/constants/rotamap';

type AuthLayoutProps = {
  title: string;
  children: ReactNode;
};

/**
 * Organism: o bloco completo das telas de acesso — marca, título e conteúdo
 * sobre o amarelo da identidade. Login e Cadastro compartilham este mesmo casco.
 */
export function AuthLayout({ title, children }: AuthLayoutProps) {
  return (
    <SafeAreaView style={styles.tela}>
      <ScrollView
        contentContainerStyle={styles.rolagem}
        keyboardShouldPersistTaps="handled">
        <View style={styles.moldura}>
          <Logo />
          <Title>{title}</Title>
          <View style={styles.corpo}>{children}</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: Cores.amarelo },
  rolagem: { flexGrow: 1, alignItems: 'center', paddingVertical: Espaco.xl },
  moldura: {
    width: '100%',
    maxWidth: LARGURA_CELULAR,
    alignItems: 'center',
    gap: Espaco.lg,
    paddingHorizontal: Espaco.lg,
  },
  corpo: { alignSelf: 'stretch', gap: Espaco.lg },
});
