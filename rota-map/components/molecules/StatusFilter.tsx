import { ScrollView, StyleSheet } from 'react-native';

import { Chip } from '../atoms/Chip';
import { StatusDenuncia } from '@/constants/denuncias';

/** `null` representa "todas" — a ausência de filtro. */
export type FiltroStatus = StatusDenuncia | null;

const OPCOES: { valor: FiltroStatus; rotulo: string }[] = [
  { valor: null, rotulo: 'Todas' },
  { valor: 'analise', rotulo: 'Em análise' },
  { valor: 'execucao', rotulo: 'Em execução' },
  { valor: 'resolvida', rotulo: 'Resolvidas' },
];

type StatusFilterProps = {
  value: FiltroStatus;
  onChange: (valor: FiltroStatus) => void;
};

/** Molecule: a fila de chips que filtra a listagem por situação. */
export function StatusFilter({ value, onChange }: StatusFilterProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.fila}>
      {OPCOES.map(({ valor, rotulo }) => (
        <Chip
          key={rotulo}
          label={rotulo}
          selected={value === valor}
          onPress={() => onChange(valor)}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fila: { gap: 8, paddingVertical: 2 },
});
