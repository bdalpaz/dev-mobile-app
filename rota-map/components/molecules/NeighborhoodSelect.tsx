import { Select } from '../atoms/Select';

/** Bairros de Chapecó presentes no mapa do Figma. */
export const BAIRROS = [
  'Água Santa',
  'Alvorada',
  'Araras',
  'Bela Vista',
  'Bom Pastor',
  'Centro',
  'Efapi',
  'Jardim Itália',
  'Presidente Médici',
  'São Cristóvão',
] as const;

type NeighborhoodSelectProps = {
  value: string | null;
  onChange: (bairro: string) => void;
};

/** Molecule: o Select já preenchido com os bairros — reusado no mapa e na denúncia. */
export function NeighborhoodSelect({ value, onChange }: NeighborhoodSelectProps) {
  return (
    <Select
      placeholder="-Selecione o bairro-"
      options={BAIRROS}
      value={value}
      onChange={onChange}
    />
  );
}
