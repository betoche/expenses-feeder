import { Image, StyleSheet, Platform, Dimensions, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  console.log("HomeScreen: index.tsx called!");
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  
  const width = Dimensions.get('screen').width;
  const height = Dimensions.get('screen').height;
  
  return (
    
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#030303', dark: '#050505' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>

      <View
        style={{
          borderBottomColor: '#ff0000',
          borderBottomWidth: StyleSheet.hairlineWidth,
          width: 196,
          position: 'absolute',
          left: 0,
          top: 400,
          zIndex:99,
        }}
      />
      <View style={styles.verticleLine}></View>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome Enano jajaj!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.screenInfo}>
        <ThemedText type="subtitle">Screen Info: {windowWidth.toFixed(0)} x {windowHeight.toFixed(0)}</ThemedText>
        <ThemedText type="subtitle">Dimensions: {width.toFixed(0)} x {height.toFixed(0)}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
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
    </ParallaxScrollView>
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
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  screenInfo: {
    gap: 10,
    marginBottom: 10,
  },
  verticleLine: {
    height: 400,
    width: 10,
    backgroundColor: '#ff0000',
    position:'absolute',
    bottom: 0,
    left:100,
    zIndex:99,
  },
});
