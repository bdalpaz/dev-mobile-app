import { Feather } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

import { Cores, Fontes } from '@/constants/rotamap';

type PropsIcone = { color: string; size: number };

/**
 * As três áreas do app. O cabeçalho nativo fica oculto porque cada tela já traz
 * o AppHeader da marca.
 */
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Cores.preto,
        tabBarInactiveTintColor: Cores.placeholder,
        tabBarStyle: {
          backgroundColor: Cores.branco,
          borderTopWidth: 1,
          borderTopColor: Cores.preto,
        },
        tabBarLabelStyle: { fontFamily: Fontes.corpo, fontSize: 11, fontWeight: '700' },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Mapa',
          tabBarIcon: ({ color, size }: PropsIcone) => <Feather name="map" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="denuncias"
        options={{
          title: 'Denúncias',
          tabBarIcon: ({ color, size }: PropsIcone) => <Feather name="list" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, size }: PropsIcone) => <Feather name="user" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
