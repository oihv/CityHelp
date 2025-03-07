import { View, StyleSheet, Platform } from 'react-native';
import { Header, Image, SearchBar } from 'react-native-elements';
import Logo from '@/assets/images/CityHelpLogo.svg';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    //<ParallaxScrollView
    //  headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    //  headerImage={
    //    <Image
    //      source={require('@/assets/images/partial-react-logo.png')}
    //      style={styles.reactLogo}
    //    />
    //  }>
    <View>
      <Header
        backgroundColor='#5087F7'
        leftComponent={
          <Logo width={50} height={50} />
        }
      />
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">城市助手</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Felix anjayy</ThemedText>
        <ThemedText>
          felix <ThemedText type="defaultSemiBold">anjayyyyyy</ThemedText>anjayyyyyyyy
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12'
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
      <Image
        source={require('@/assets/images/CityHelpText.svg')}
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  logo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
  },
});
