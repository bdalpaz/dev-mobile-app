import { useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { PrimaryButton } from '@/components/atoms/PrimaryButton';
import { SectionTitle } from '@/components/atoms/SectionTitle';
import { Title } from '@/components/atoms/Title';
import { MenuList } from '@/components/molecules/MenuList';
import { ProfileIdentity } from '@/components/molecules/ProfileIdentity';
import { StatTiles } from '@/components/molecules/StatTiles';
import { AppScreen } from '@/components/organisms/AppScreen';
import { DENUNCIAS, USUARIO, contarPorStatus } from '@/constants/denuncias';
import { Espaco } from '@/constants/rotamap';

export default function Perfil() {
  const router = useRouter();
  const bairros = new Set(DENUNCIAS.map((denuncia) => denuncia.bairro)).size;

  return (
    <AppScreen>
      <Title>PERFIL</Title>

      <ProfileIdentity nome={USUARIO.nome} email={USUARIO.email} desde={USUARIO.desde} />

      <View style={styles.bloco}>
        <SectionTitle>Minha contribuição</SectionTitle>
        <StatTiles
          dados={[
            { valor: DENUNCIAS.length, rotulo: 'Denúncias\nenviadas' },
            { valor: contarPorStatus('resolvida'), rotulo: 'Problemas\nresolvidos' },
            { valor: bairros, rotulo: 'Bairros\nalcançados' },
          ]}
        />
      </View>

      <View style={styles.bloco}>
        <SectionTitle>Ajustes</SectionTitle>
        <MenuList
          itens={[
            { icone: 'user', rotulo: 'Dados pessoais', onPress: () => {} },
            { icone: 'bell', rotulo: 'Notificações', onPress: () => {} },
            { icone: 'eye', rotulo: 'Acessibilidade', onPress: () => {} },
            { icone: 'file-text', rotulo: 'Termos de uso', onPress: () => {} },
            { icone: 'info', rotulo: 'Sobre o Rota Map', onPress: () => {} },
          ]}
        />
      </View>

      <PrimaryButton title="SAIR" onPress={() => router.replace('/(auth)/login')} />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  bloco: { gap: Espaco.sm },
});
