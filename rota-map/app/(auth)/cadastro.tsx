import { useRouter } from 'expo-router';

import { AuthFooter } from '@/components/molecules/AuthFooter';
import { SignUpForm } from '@/components/molecules/SignUpForm';
import { SocialAuthOptions } from '@/components/molecules/SocialAuthOptions';
import { AuthLayout } from '@/components/organisms/AuthLayout';

export default function Cadastro() {
  const router = useRouter();

  return (
    <AuthLayout title="CADASTRO">
      <SignUpForm onSubmit={() => router.replace('/(tabs)')} />
      <SocialAuthOptions onPress={() => router.replace('/(tabs)')} />
      <AuthFooter
        question="Já tem login?"
        linkLabel="Login"
        onPressLink={() => router.replace('/(auth)/login')}
      />
    </AuthLayout>
  );
}
