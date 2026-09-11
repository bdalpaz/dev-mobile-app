import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import { FlatList, Modal, Pressable, StyleSheet, Text, View } from 'react-native';

import { ALVO_TOQUE, Cores, Fontes } from '@/constants/rotamap';

type SelectProps = {
  /** Texto exibido quando nada foi escolhido. */
  placeholder: string;
  options: readonly string[];
  value: string | null;
  onChange: (value: string) => void;
};

/** Campo de escolha única. Abre a lista em um modal — sem dependência externa. */
export function Select({ placeholder, options, value, onChange }: SelectProps) {
  const [aberto, setAberto] = useState(false);

  return (
    <>
      <Pressable
        onPress={() => setAberto(true)}
        accessibilityRole="button"
        accessibilityLabel={value ?? placeholder}
        accessibilityHint="Abre a lista de opções"
        style={styles.campo}>
        <Text style={styles.valor} numberOfLines={1}>
          {value ?? placeholder}
        </Text>
        <View style={styles.divisor} />
        <Feather name="chevron-down" size={22} color={Cores.preto} />
      </Pressable>

      <Modal visible={aberto} transparent animationType="fade" onRequestClose={() => setAberto(false)}>
        <Pressable style={styles.fundo} onPress={() => setAberto(false)} accessibilityLabel="Fechar lista">
          <View style={styles.lista}>
            <FlatList
              data={options}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => {
                    onChange(item);
                    setAberto(false);
                  }}
                  accessibilityRole="button"
                  accessibilityState={{ selected: item === value }}
                  style={({ pressed }) => [styles.opcao, pressed && styles.opcaoPressionada]}>
                  <Text style={styles.textoOpcao}>{item}</Text>
                </Pressable>
              )}
            />
          </View>
        </Pressable>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  campo: {
    minHeight: ALVO_TOQUE,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Cores.branco,
    borderWidth: 1,
    borderColor: Cores.preto,
    paddingLeft: 16,
  },
  valor: { flex: 1, fontFamily: Fontes.corpo, fontSize: 17, color: Cores.preto },
  divisor: { width: 1, alignSelf: 'stretch', backgroundColor: Cores.preto, marginHorizontal: 10 },
  fundo: { flex: 1, justifyContent: 'center', padding: 32, backgroundColor: 'rgba(0,0,0,0.45)' },
  lista: { backgroundColor: Cores.branco, borderRadius: 12, maxHeight: '70%', overflow: 'hidden' },
  opcao: { minHeight: ALVO_TOQUE, justifyContent: 'center', paddingHorizontal: 20 },
  opcaoPressionada: { backgroundColor: Cores.cinzaClaro },
  textoOpcao: { fontFamily: Fontes.corpo, fontSize: 16, color: Cores.preto },
});
