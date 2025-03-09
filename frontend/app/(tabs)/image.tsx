import React from 'react';
import { StyleSheet, Image, TextInput, ScrollView, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';


export default function TabTwoScreen() {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <ThemedText style={styles.headerText}>Feeds</ThemedText>
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="Search" />
          <IconSymbol name="camera" size={24} color="#fff" style={styles.cameraIcon} />  // tambah icon scan yang disamping search bar, yang bisa akses kamera 
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.postContainer}>
          <View style={styles.postHeader}>
            <IconSymbol name="user" size={24} style={styles.profileIcon} />
            <ThemedText style={styles.username}>Username1</ThemedText>
          </View>
          <Image source={{ uri: 'https://example.com/image2.jpg' }} style={styles.postImage} />
          <ThemedText style={styles.postCaption}>Caption for the first post</ThemedText>
          <TextInput style={styles.commentInput} placeholder="Write a comment..." />
        </View>
        <View style={styles.postContainer}>
          <View style={styles.postHeader}>
            <IconSymbol name="user" size={24} style={styles.profileIcon} />
            <ThemedText style={styles.username}>Username2</ThemedText>
          </View>
          <Image source={{ uri: 'https://example.com/image2.jpg' }} style={styles.postImage} />
          <TextInput style={styles.commentInput} placeholder="Write a comment..." />
        </View>
        {/* Add more posts as needed */}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 40,
    paddingBottom: 10,
    paddingHorizontal: 15,
    backgroundColor: '#007AFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
  
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '57%', 
    paddingHorizontal: 15, 
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
    flex: 1,
  },
  cameraIcon: {
    marginLeft: 25,
    color: '#fff',
  },
  scrollView: {
    paddingHorizontal: 15,
  },
  postContainer: {
    backgroundColor: 'rgb(201, 234, 247)', 
    padding: 10,
    marginBottom: 15,
  },
  postHeader: {
    backgroundColor: 'rgb(255, 255, 255)',
    flexDirection: 'row',
    padding: 5,
    width: '100%',
    alignItems: 'center',
  },
  profileIcon: {
    backgroundColor: 'rgb(131, 131, 131)',
    width: 40,
    height: 40, 
    borderRadius: 20, 
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  postCaption: {
    backgroundColor: 'rgb(255, 255, 255)',
    borderRadius: 10,
    height: 140,
    fontSize: 16,
    marginBottom: 10,
  },
  commentInput: {
    backgroundColor: 'rgb(255, 255, 255)',
    borderColor: 'rgb(201, 234, 247)',
    borderWidth: 1,
    borderRadius: 40,
    paddingHorizontal: 24,
    height: 40,
  },
});