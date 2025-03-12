import React from 'react';
import { View, StyleSheet, Platform, FlatList, ActivityIndicator, Image, TextInput } from 'react-native';
import { Header } from 'react-native-elements';
import { Searchbar } from 'react-native-paper';
import Logo from '@/assets/images/CityHelpLogo.svg';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import HomeButton from '@/components/HomeButton';
import { Colors } from '@/constants/Colors';

const feed = [
  {
    news_id: 1,
    image: "https://www.china-briefing.com/news/wp-content/uploads/2024/01/Shanghai-Lingang-New-Area.jpg",
    location: "北京, 中国",
    caption: "突发新闻：示例事件正在发生！这是一个非常重要的新闻，大家都在关注。"
  },
  {
    news_id: 2,
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/a7/8d/48/nice-place-to-hang-around.jpg?w=1200&h=-1&s=1",
    location: "上海, 中国",
    caption: "突发新闻：另一个示例事件正在发生！这也是一个非常重要的新闻，吸引了很多人的注意。"
  },
  {
    news_id: 3,
    image: "https://www.thatsmags.com/image/view/202206/Nio-Car.jpg",
    location: "广州, 中国",
    caption: "突发新闻：又一个示例事件正在发生！这同样是一个非常重要的新闻，大家都在讨论。"
  }
];

export default function HomeScreen() {
  const [search, setSearch] = React.useState('');

  const updateSearch = (text: string): void => {
    setSearch(text);
  };

  const [commentInput, setCommentInput] = React.useState('');

  const updateComment = (text: string): void => {
    setCommentInput(text);
  };

  return (
    <FlatList
      style={styles.newsFeedContainer}
      data={feed}
      keyExtractor={(item, index) => { return item.news_id.toFixed() }}
      ListHeaderComponent={
        <>
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
              <HomeButton imageName="MapIcon" text="Map" link="/map" />
              <HomeButton imageName="MessageBotIcon" text="AI" link="/chatai" />
              <HomeButton imageName="UserIcon" text="Profile" link="/profile" />
              <HomeButton imageName="CallIcon" text="Emergency" link="/emergency" />
              <HomeButton imageName="DonateIcon" text="Donate" link="/donate" />
              <HomeButton imageName="MoreIcon" text="Others" link="/others" />
            </ThemedView>
          </ThemedView>
        </>
      }
      renderItem={({ item, index }) => (
        <ThemedView style={styles.newsView}>
          <Image
            style={styles.image}
            resizeMode={'cover'}
            source={{ uri: item.image }}
          />
          <ThemedText>{item.caption}</ThemedText>
          <ThemedView style={styles.commentInput}>
            <TextInput value={commentInput} onChangeText={(val)=>updateComment(val)} placeholder={"Write your comment..."}></TextInput>
          </ThemedView>
        </ThemedView>
      )}
    />
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
  },

  buttonsContainer: {
    display: 'flex',
    height: 200,
    padding: 16,
    margin: 16,
    marginBottom: 8,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderRadius: 4,
    backgroundColor: Colors['light']['elementBackground'],
    borderColor: Colors['light']['elementBackground'],
    elevation: 4,
  },

  image: {
    margin: 4,
    width: '100%',
    height: 160,
    resizeMode: 'contain',
    borderRadius: 16,
    backgroundColor: Colors['light']['buttonBackground'],
    elevation: 2,
  },
  newsView: {
    margin: 16,
    marginBottom: 8,
    padding: 16,
    display: 'flex',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors['light']['elementBackground'],
    elevation: 4,
  },

  newsFeedContainer: {
    backgroundColor: Colors['light']['background'],
  },
  commentInput: {
    marginTop: 8,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 4,
    width: '100%',
    backgroundColor: '#dae4f5',
  },
});
