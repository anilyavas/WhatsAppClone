import { ImageBackground, StyleSheet, FlatList } from 'react-native';
import bg from '../../assets/images/BG.png';
import Message from '../components/Message';
import messages from '../../assets/data/messages.json';
export default function ChatScreen() {
  return (
    <ImageBackground source={bg} style={styles.bg}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <Message message={item} />}
        inverted
        style={{ padding: 10 }}
      />
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
});
