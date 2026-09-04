import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Tab1' }} />
      <Tabs.Screen name="tab2" options={{ title: 'Tab2' }} />
      <Tabs.Screen name="tab3" options={{ title: 'Tab3' }} />
    </Tabs>
  );
}
