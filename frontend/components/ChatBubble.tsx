import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatBubble = ({ message }) => {
  return (
    <View style={message.sender === 'user' ? styles.userMessage : styles.aiMessage}>
      <Text style={styles.messageText}>{message.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  userMessage: {
    backgroundColor: '#DCF8C6',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  aiMessage: {
    backgroundColor: '#E5E5EA',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: 'flex-end',
  },
  messageText: {
    fontSize: 16,
  },
});

export default ChatBubble;
