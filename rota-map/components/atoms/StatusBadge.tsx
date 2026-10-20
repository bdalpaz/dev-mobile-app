import { Feather } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { STATUS, StatusDenuncia } from '@/constants/denuncias';
import { Cores, Fontes } from '@/constants/rotamap';

/**
 * Selo de situação da denúncia.
 *
 * Os três tons saem da própria paleta da marca (branco, amarelo, preto) e todos
 * passam de 4,5:1 com o texto que carregam. O ícone acompanha o rótulo para que
 * a informação não dependa só da cor — WCAG 2.2, critério 1.4.1.
 */
export function StatusBadge({ status }: { status: StatusDenuncia }) {
  const { rotulo, icone, tom } = STATUS[status];
  const escuro = tom === 'escuro';
  const corTexto = escuro ? Cores.branco : Cores.preto;

  return (
    <View style={[styles.selo, estilosTom[tom]]}>
      <Feather name={icone} size={13} color={corTexto} />
      <Text style={[styles.rotulo, { color: corTexto }]}>{rotulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  selo: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 6,
    borderWidth: 1,
    borderColor: Cores.preto,
    borderRadius: 999,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  rotulo: { fontFamily: Fontes.corpo, fontSize: 12, fontWeight: '700' },
});

const estilosTom = StyleSheet.create({
  claro: { backgroundColor: Cores.cinzaClaro },
  marca: { backgroundColor: Cores.amarelo },
  escuro: { backgroundColor: Cores.preto },
});
