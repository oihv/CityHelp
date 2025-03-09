import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import axios from 'axios';

const API_KEY = 'sk-d34815f1017e40ce86269e822b9953f1';

export default function ChatScreen() {
    const [messages, setMessages] = useState([
        {
            id: '1',
            text: 'Hi, I have a plan to go to Disneyland today, and I need to leave early at 08:00 so that I can enjoy the whole day. My current location is Donghu Lingang Hotel, Shanghai.',
            sender: 'user',
            timestamp: 'Mar 1, 2025, 07:55 AM'
        },
        {
            id: '2',
            text: 'There are many traffic jams due to working hours, and there is an accident at 上海东绣路道. It is better for you to take another route, such as SanDunZhen, to avoid the traffic jam. Here is the route.',
            sender: 'ai',
            timestamp: 'Mar 1, 2025, 07:56 AM'
        }
    ]);
    const [inputText, setInputText] = useState('');

    const sendMessage = async () => {
        if (inputText.trim() === '') return;

        const newMessage = {
            id: Date.now().toString(),
            text: inputText,
            sender: 'user',
            timestamp: new Date().toLocaleString()
        };

        setMessages([...messages, newMessage]);
        setInputText('');

        try {
            const response = await axios.post(
                'https://api.openai.com/v1/engines/davinci-codex/completions',
                {
                    prompt: inputText,
                    max_tokens: 150
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${API_KEY}`
                    }
                }
            );

            const aiMessage = {
                id: Date.now().toString(),
                text: response.data.choices[0].text.trim(),
                sender: 'ai',
                timestamp: new Date().toLocaleString()
            };

            setMessages(prevMessages => [...prevMessages, aiMessage]);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    const renderItem = ({ item }) => (
        <View style={item.sender === 'user' ? styles.userMessage : styles.aiMessage}>
            <Text style={styles.messageText}>{item.text}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Cityhelp AI</Text>
            </View>
            <FlatList
                data={messages}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.chatContainer}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Message..."
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
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        height: 60,
        backgroundColor: '#007AFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    chatContainer: {
        flexGrow: 1,
        padding: 10,
    },
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
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderTopWidth: 1,
        borderColor: '#ccc',
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
    },
    sendButton: {
        marginLeft: 10,
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    sendButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});