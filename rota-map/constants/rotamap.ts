import { Platform } from 'react-native';

/** Paleta amostrada do Figma (projeto livre team library). */
export const Cores = {
  amarelo: '#F3C912',
  preto: '#111111',
  branco: '#FFFFFF',
  cinzaClaro: '#E9EAEC',
  placeholder: '#596579',
  /** Fundo da area de upload de foto. */
  oliva: '#907912',
} as const;

/**
 * Largura do frame do Figma (430x932). Em celular nao muda nada; no navegador
 * e em tablet impede que o conteudo estique pela tela inteira.
 */
export const LARGURA_CELULAR = 430;

export const Espaco = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 } as const;

/**
 * Alvo mínimo de toque — WCAG 2.2 AA, critério 2.5.8 (24px) elevado para os
 * 44-48px recomendados por Android e iOS.
 */
export const ALVO_TOQUE = 48;

export const Fontes = {
  /** Serifada display: só em títulos curtos, como no Figma. */
  titulo: Platform.select({ ios: 'Georgia', android: 'serif', default: 'Georgia, serif' }),
  /** Corpo de texto em sem-serifa — melhor legibilidade e leitura com dislexia. */
  corpo: Platform.select({ ios: 'System', android: 'sans-serif', default: 'system-ui, sans-serif' }),
} as const;
