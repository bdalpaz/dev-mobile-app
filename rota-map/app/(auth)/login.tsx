import { useRouter } from 'expo-router';

import { AuthFooter } from '@/components/molecules/AuthFooter';
import { LoginForm } from '@/components/molecules/LoginForm';
import { SocialAuthOptions } from '@/components/molecules/SocialAuthOptions';
import { AuthLayout } from '@/components/organisms/AuthLayout';

export default function Login() {
  const router = useRouter();

  return (
    <AuthLayout title="BEM VINDO!">
      <LoginForm onSubmit={() => router.replace('/(tabs)')} />
      <SocialAuthOptions onPress={() => router.replace('/(tabs)')} />
      <AuthFooter
        question="Não tem login?"
        linkLabel="Cadastre-se"
        onPressLink={() => router.push('/(auth)/cadastro')}
      />
    </AuthLayout>
  );
}
