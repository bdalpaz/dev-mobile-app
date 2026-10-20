import { Feather } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { Card } from '../atoms/Card';
import { Cores, Espaco, Fontes } from '@/constants/rotamap';

type ProfileIdentityProps = {
  nome: string;
  email: string;
  desde: string;
};

/** Molecule: o cartão de identificação no topo do perfil. */
export function ProfileIdentity({ nome, email, desde }: ProfileIdentityProps) {
  return (
    <Card>
      <View style={styles.linha}>
        <View style={styles.avatar}>
          <Feather name="user" size={34} color={Cores.preto} />
        </View>
        <View style={styles.textos}>
          <Text style={styles.nome}>{nome}</Text>
          <Text style={styles.email} numberOfLines={1}>
            {email}
          </Text>
          <Text style={styles.desde}>No Rota Map desde {desde}</Text>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  linha: { flexDirection: 'row', alignItems: 'center', gap: Espaco.md },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: Cores.preto,
    backgroundColor: Cores.amarelo,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textos: { flex: 1 },
  nome: { fontFamily: Fontes.corpo, fontSize: 19, fontWeight: '800', color: Cores.preto },
  email: { fontFamily: Fontes.corpo, fontSize: 13, color: Cores.placeholder, marginTop: 2 },
  desde: { fontFamily: Fontes.corpo, fontSize: 11, color: Cores.placeholder, marginTop: 6 },
});
