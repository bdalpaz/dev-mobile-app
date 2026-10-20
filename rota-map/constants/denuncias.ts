/**
 * Dados fictícios da maquete. Substituir por chamadas ao backend quando a API
 * existir — a forma dos objetos aqui é o contrato que as telas já consomem.
 */

export type StatusDenuncia = 'analise' | 'execucao' | 'resolvida';

export type EtapaHistorico = {
  etapa: string;
  data: string | null;
  concluida: boolean;
};

export type Denuncia = {
  id: string;
  protocolo: string;
  problema: string;
  rua: string;
  numero: string;
  bairro: string;
  data: string;
  status: StatusDenuncia;
  descricao: string;
  historico: EtapaHistorico[];
};

/** Rótulo e ícone de cada status. O ícone evita depender só da cor (WCAG 1.4.1). */
export const STATUS: Record<
  StatusDenuncia,
  { rotulo: string; icone: 'clock' | 'tool' | 'check'; tom: 'claro' | 'marca' | 'escuro' }
> = {
  analise: { rotulo: 'Em análise', icone: 'clock', tom: 'claro' },
  execucao: { rotulo: 'Em execução', icone: 'tool', tom: 'marca' },
  resolvida: { rotulo: 'Resolvida', icone: 'check', tom: 'escuro' },
};

export const DENUNCIAS: Denuncia[] = [
  {
    id: '1',
    protocolo: '2026-0481',
    problema: 'Falta de rampa',
    rua: 'Rua Marechal Deodoro',
    numero: '1991',
    bairro: 'Centro',
    data: '12/10/2026',
    status: 'execucao',
    descricao:
      'Esquina sem rampa de acesso. Cadeirantes precisam descer na pista para atravessar.',
    historico: [
      { etapa: 'Denúncia recebida', data: '12/10/2026', concluida: true },
      { etapa: 'Vistoria no local', data: '15/10/2026', concluida: true },
      { etapa: 'Obra em andamento', data: '18/10/2026', concluida: true },
      { etapa: 'Obra concluída', data: null, concluida: false },
    ],
  },
  {
    id: '2',
    protocolo: '2026-0477',
    problema: 'Calçada obstruída',
    rua: 'Avenida Getúlio Vargas',
    numero: '420',
    bairro: 'Centro',
    data: '09/10/2026',
    status: 'analise',
    descricao: 'Mesas de bar ocupam toda a largura da calçada em frente ao número 420.',
    historico: [
      { etapa: 'Denúncia recebida', data: '09/10/2026', concluida: true },
      { etapa: 'Vistoria no local', data: null, concluida: false },
      { etapa: 'Obra em andamento', data: null, concluida: false },
      { etapa: 'Obra concluída', data: null, concluida: false },
    ],
  },
  {
    id: '3',
    problema: 'Piso tátil interrompido',
    protocolo: '2026-0459',
    rua: 'Rua Nereu Ramos',
    numero: '877',
    bairro: 'Bela Vista',
    data: '02/10/2026',
    status: 'resolvida',
    descricao: 'Piso tátil terminava antes do ponto de ônibus, sem sinalização de alerta.',
    historico: [
      { etapa: 'Denúncia recebida', data: '02/10/2026', concluida: true },
      { etapa: 'Vistoria no local', data: '04/10/2026', concluida: true },
      { etapa: 'Obra em andamento', data: '07/10/2026', concluida: true },
      { etapa: 'Obra concluída', data: '14/10/2026', concluida: true },
    ],
  },
  {
    id: '4',
    protocolo: '2026-0433',
    problema: 'Semáforo sem sinal sonoro',
    rua: 'Rua Benjamin Constant',
    numero: '150',
    bairro: 'Alvorada',
    data: '28/09/2026',
    status: 'analise',
    descricao: 'Travessia movimentada sem aviso sonoro para pessoas com deficiência visual.',
    historico: [
      { etapa: 'Denúncia recebida', data: '28/09/2026', concluida: true },
      { etapa: 'Vistoria no local', data: null, concluida: false },
      { etapa: 'Obra em andamento', data: null, concluida: false },
      { etapa: 'Obra concluída', data: null, concluida: false },
    ],
  },
  {
    id: '5',
    protocolo: '2026-0418',
    problema: 'Vaga PCD irregular',
    rua: 'Rua Quintino Bocaiúva',
    numero: '63',
    bairro: 'Araras',
    data: '21/09/2026',
    status: 'resolvida',
    descricao: 'Vaga reservada sem demarcação no piso e sem placa de identificação.',
    historico: [
      { etapa: 'Denúncia recebida', data: '21/09/2026', concluida: true },
      { etapa: 'Vistoria no local', data: '24/09/2026', concluida: true },
      { etapa: 'Obra em andamento', data: '29/09/2026', concluida: true },
      { etapa: 'Obra concluída', data: '06/10/2026', concluida: true },
    ],
  },
  {
    id: '6',
    protocolo: '2026-0402',
    problema: 'Buraco na calçada',
    rua: 'Rua Florianópolis',
    numero: '1240',
    bairro: 'Bom Pastor',
    data: '17/09/2026',
    status: 'execucao',
    descricao: 'Afundamento de cerca de 30 cm no meio do trecho, sem isolamento.',
    historico: [
      { etapa: 'Denúncia recebida', data: '17/09/2026', concluida: true },
      { etapa: 'Vistoria no local', data: '22/09/2026', concluida: true },
      { etapa: 'Obra em andamento', data: '10/10/2026', concluida: true },
      { etapa: 'Obra concluída', data: null, concluida: false },
    ],
  },
];

export function buscarDenuncia(id: string | undefined) {
  return DENUNCIAS.find((denuncia) => denuncia.id === id);
}

export function contarPorStatus(status: StatusDenuncia) {
  return DENUNCIAS.filter((denuncia) => denuncia.status === status).length;
}

/** Perfil fictício de quem está usando a maquete. */
export const USUARIO = {
  nome: 'Josefino Augusto',
  email: 'josefino433@gmail.com',
  telefone: '(49) 9 4002-8922',
  bairro: 'Centro',
  desde: 'setembro de 2026',
} as const;
