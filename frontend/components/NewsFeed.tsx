import { TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Image } from 'react-native';
import { Colors } from '@/constants/Colors';

const feed = [
  {
    news_id: 1,
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/20200110_Tiananmen-3.jpg",
    location: "北京, 中国",
    caption: "突发新闻：示例事件正在发生！这是一个非常重要的新闻，大家都在关注。"
  },
  {
    news_id: 2,
    image: "https://example.com/image2.jpg",
    location: "上海, 中国",
    caption: "突发新闻：另一个示例事件正在发生！这也是一个非常重要的新闻，吸引了很多人的注意。"
  },
  {
    news_id: 3,
    image: "https://example.com/image3.jpg",
    location: "广州, 中国",
    caption: "突发新闻：又一个示例事件正在发生！这同样是一个非常重要的新闻，大家都在讨论。"
  }
];

export default function NewsFeed() {
  return (
    <FlatList
      data={feed}
      keyExtractor={(item, index) => { return item.news_id.toFixed() }}
      renderItem={({ item, index }) => (
        <ThemedView style={styles.newsView}>
          <Image
            style={styles.image}
            resizeMode={'cover'}
            source={{uri:item.image}} 
          />
          <ThemedText>{item.news_id}</ThemedText>
        </ThemedView>
      )}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    margin: 4,
    width: '100%',


    resizeMode: 'contain',
    borderRadius: 16,
    backgroundColor: Colors['light']['buttonBackground'],
    elevation: 2,
  },
  newsView: {
    margin: 16,
    padding: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors['light']['elementBackground'],
  },
})
