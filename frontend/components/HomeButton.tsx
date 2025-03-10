import { TouchableOpacity, StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Image } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Link } from 'expo-router';

const imageMap: { [key: string]: any } = {
  'MapIcon': require('@/assets/images/MapIcon.png'),
  'MessageBotIcon': require('@/assets/images/MessageBotIcon.png'),
  'UserIcon': require('@/assets/images/UserIcon.png'),
  'CallIcon': require('@/assets/images/CallIcon.png'),
  'DonateIcon': require('@/assets/images/DonateIcon.png'),
  'MoreIcon': require('@/assets/images/MoreIcon.png'),
};

export default function HomeButton({ imageName, text, link }: { imageName: string, text: string, link: string }) {
  return (
    <Link href={link as any} asChild>
      <TouchableOpacity style={styles.buttons}>
        <ThemedView style={styles.buttonText}>
          <Image 
            style={styles.image}
            resizeMode={'cover'}
            source={imageMap[imageName]} 
            alt={text}
          />
          <ThemedText>{text}</ThemedText>
        </ThemedView>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
    height: '50%',
    flexGrow: 1,
  },
  buttonText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 50,
    resizeMode: 'contain',
    aspectRatio: 1,
    borderRadius: 15,
    backgroundColor: Colors['light']['buttonBackground'],
  },
})
