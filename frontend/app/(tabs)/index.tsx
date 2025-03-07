import React from 'react';
import { View, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { Header, SearchBar } from 'react-native-elements';
import Logo from '@/assets/images/CityHelpLogo.svg';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [search, setSearch] = React.useState('');

  const updateSearch = (text: string): void => {
    setSearch(text);
  };

  return (
    <ThemedView lightColor='#E4EBF6'>
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
          <SearchBar
            placeholder="Type Here..."
            placeholderTextColor="Gray"
            onChangeText={updateSearch}
            value={search}
            style={styles.search}
            containerStyle={styles.searchContainer}
            inputContainerStyle={{ backgroundColor: '#fff' }}
          />
        }
      />

      <ThemedView>
        <TouchableOpacity>
          <ThemedView>
            <ThemedText>Test</ThemedText>
          </ThemedView>
        </TouchableOpacity>
      </ThemedView>

    </ThemedView>
  );
}

const styles = StyleSheet.create({
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

    padding:0,
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
