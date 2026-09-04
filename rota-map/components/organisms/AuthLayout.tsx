import { ReactNode } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Logo } from '../atoms/Logo';
import { Title } from '../atoms/Title';
import { Cores, Espaco } from '@/constants/rotamap';

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
        contentContainerStyle={styles.conteudo}
        keyboardShouldPersistTaps="handled">
        <Logo />
        <Title>{title}</Title>
        <View style={styles.corpo}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: Cores.amarelo },
  conteudo: {
    flexGrow: 1,
    alignItems: 'center',
    gap: Espaco.lg,
    paddingHorizontal: Espaco.lg,
    paddingVertical: Espaco.xl,
  },
  corpo: { alignSelf: 'stretch', gap: Espaco.lg },
});
