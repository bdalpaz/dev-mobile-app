import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { PrimaryButton } from '@/components/atoms/PrimaryButton';
import { NeighborhoodSelect } from '@/components/molecules/NeighborhoodSelect';
import { AppScreen } from '@/components/organisms/AppScreen';

export default function Mapa() {
  const router = useRouter();
  const [bairro, setBairro] = useState<string | null>(null);

  return (
    <AppScreen>
      <NeighborhoodSelect value={bairro} onChange={setBairro} />
      <View style={styles.mapa}>
        <Image
          source={require('@/assets/images/mapa-chapeco.png')}
          style={styles.imagem}
          contentFit="contain"
          accessibilityLabel="Mapa dos bairros de Chapecó"
        />
      </View>
      <PrimaryButton title="DENUNCIAR" onPress={() => router.push('/denuncia')} />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  mapa: { flex: 1, minHeight: 360 },
  imagem: { flex: 1, width: '100%' },
});
