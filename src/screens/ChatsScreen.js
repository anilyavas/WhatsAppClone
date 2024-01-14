import { View, Text, FlatList } from 'react-native';
import React from 'react';
import ChatListItem from '../components/ChatListItem';
import chats from '../../assets/data/chats.json';

export default function ChatsScreen() {
  return (
    <FlatList
      data={chats}
      renderItem={({ item }) => <ChatListItem data={item} />}
    />
  );
}
