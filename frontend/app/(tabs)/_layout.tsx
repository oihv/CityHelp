import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarActiveBackgroundColor: Colors['light']['tabBackgroundColor'],
        tabBarInactiveBackgroundColor: Colors['light']['tabBackgroundColor'],
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="image"
        options={{
          title: 'Image',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="image.fill" color={'#fff'} />,
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: 'Map',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="map.fill" color={'#fff'} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={'#fff'} />,
        }}
      />
      <Tabs.Screen
        name="report"
        options={{
          title: 'Report',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="camera.fill" color={'#fff'} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="profile.fill" color={'#fff'} />,
        }}
      />
      <Tabs.Screen
        name="chatai"
        options={{
          tabBarButton: (props) => null, // This will hide the ChatAI tab from the bottom navigation bar
          tabBarStyle: { display: 'none' }, //this is additional if you want to hide the whole bottom tab from the screen version 6.x
        }}
      />
    </Tabs>
  );
}
