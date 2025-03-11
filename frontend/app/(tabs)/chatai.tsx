import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import axios from 'axios';

const API_KEY: string = process.env.EXPO_PUBLIC_API_KEY; // Store this securely!

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: string;
};

export default function ChatScreen() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');

  const sendMessage = async () => {
    if (inputText.trim() === '') return;

    const userMessage = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date().toLocaleString(),
    };

    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputText('');

    try {
      const response = await axios.post(
        'https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation',
        {
          model: "deepseek-r1",
          input: {
            messages: [
              {
                role: "user",
                content: inputText
              }
            ]
          },
          parameters: {
            result_format: "message"
          }
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
          }
        }
      );

      console.log("API Response:", response.data); // Debugging

      const aiContent = response.data.output?.choices?.[0]?.message?.content || "No response";

      console.log("AI Chat content: ", aiContent);

      const aiMessage = {
        id: Date.now().toString(),
        text: aiContent,
        sender: 'ai',
        timestamp: new Date().toLocaleString(),
      };
      
      setMessages(prevMessages => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error('Error sending message:', (error as any).response?.data || (error as any).message);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={item.sender === 'user' ? styles.userMessage : styles.aiMessage}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.chatContainer}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  chatContainer: { flexGrow: 1, padding: 10 },
  userMessage: { backgroundColor: '#DCF8C6', padding: 10, borderRadius: 10, marginBottom: 10, alignSelf: 'flex-start' },
  aiMessage: { backgroundColor: '#E5E5EA', padding: 10, borderRadius: 10, marginBottom: 10, alignSelf: 'flex-end' },
  messageText: { fontSize: 16 },
  inputContainer: { flexDirection: 'row', alignItems: 'center', padding: 10, borderTopWidth: 1, borderColor: '#ccc' },
  input: { flex: 1, height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 20, paddingHorizontal: 10 },
  sendButton: { marginLeft: 10, backgroundColor: '#007AFF', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 20 },
  sendButtonText: { color: '#fff', fontSize: 16 },
});

