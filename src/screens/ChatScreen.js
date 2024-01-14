import {
  ImageBackground,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';
import bg from '../../assets/images/BG.png';
import Message from '../components/Message';
import messages from '../../assets/data/messages.json';
import InputBox from '../components/InputBox';
import { useEffect } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function ChatScreen() {
  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: route.params.name });
  }, [route.params.name]);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.bg}
    >
      <ImageBackground source={bg} style={styles.bg}>
        <FlatList
          data={messages}
          renderItem={({ item }) => <Message message={item} />}
          inverted
          style={{ padding: 10 }}
        />
        <InputBox />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
});
