import { useRouter } from 'expo-router';
import { useState } from 'react';

import { PrimaryButton } from '@/components/atoms/PrimaryButton';
import { Title } from '@/components/atoms/Title';
import { NeighborhoodSelect } from '@/components/molecules/NeighborhoodSelect';
import { PhotoUpload } from '@/components/molecules/PhotoUpload';
import { ReportForm } from '@/components/molecules/ReportForm';
import { AppScreen } from '@/components/organisms/AppScreen';

export default function Denuncia() {
  const router = useRouter();
  const [bairro, setBairro] = useState<string | null>(null);

  return (
    <AppScreen>
      <Title>DENÚNCIA</Title>
      <NeighborhoodSelect value={bairro} onChange={setBairro} />
      <ReportForm />
      <PhotoUpload onPress={() => {}} />
      <PrimaryButton title="CONCLUIR" onPress={() => router.replace('/(tabs)')} />
    </AppScreen>
  );
}
