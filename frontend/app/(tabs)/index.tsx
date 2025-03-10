import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Header } from 'react-native-elements';
import { Searchbar } from 'react-native-paper';
import Logo from '@/assets/images/CityHelpLogo.svg';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import HomeButton from '@/components/HomeButton';

export default function HomeScreen() {
  const [search, setSearch] = React.useState('');

  const updateSearch = (text: string): void => {
    setSearch(text);
  };

  return (
    <ThemedView lightColor='#E4EBF6' darkColor='#E4EBF6'>
      <Header
        style={styles.header}
        backgroundColor='#5087F7'
        containerStyle={styles.headerContainer}

        leftContainerStyle={styles.titleContainer}
        leftComponent={
          <View style={styles.titleContainer}>
            <Logo width={50} height={50} />
            <ThemedText type="title" style={styles.logoText}>城市助手</ThemedText>
          </View>
        }

        centerContainerStyle={styles.centerContainer}

        rightContainerStyle={styles.searchContainer}
        rightComponent={
          <Searchbar
            placeholder="Type Here..."
            onChangeText={updateSearch}
            value={search}
            style={styles.search}
          />
        }
      />

      <ThemedView style={styles.buttonsContainer}>
        <HomeButton imageName="MapIcon" text="Map" link="/map"/>
        <HomeButton imageName="MessageBotIcon" text="AI" link="/chatai"/>
        <HomeButton imageName="UserIcon" text="Profile" link="/profile" />
        <HomeButton imageName="CallIcon" text="Emergency" link="/emergency" />
        <HomeButton imageName="DonateIcon" text="Donate" link="/donate" />
        <HomeButton imageName="MoreIcon" text="Others" link="/others" />
      </ThemedView>

    </ThemedView>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    display: 'flex',
    height: 170,
    margin: 15,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  logoText: {
    fontSize: 20,
  },
  headerContainer: {
    padding: 0,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: 2,
    flexWrap: "nowrap",
  },
  header: {
    flex: 1,
    alignItems: 'center',
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

  centerContainer: {
    flex: 1,
    flexShrink: 1,
  },

  searchContainer: {
    borderTopWidth: 0,
    borderBottomWidth: 0,

    flex: 4,
    flexDirection: 'row',

    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  search: {
    borderTopWidth: 0,
    borderBottomWidth: 0,
    padding: 0,
    flex: 1,
    flexBasis: 'auto',
  }
});
