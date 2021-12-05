import React, {useEffect, useState, useCallback} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {GiftedChat, Composer, Send} from 'react-native-gifted-chat';
import {Images} from '../../themes';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ChatWithDoctor = ({data}) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hi, How can I help you?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: data?.name,
          avatar:
            data?.name === 'Dr. Nguyen Thi Xuan Mai'
              ? Images.imgDoctor
              : Images.imgDoctorMan,
        },
      },
    ]);
  }, [data]);

  const onSend = useCallback((newMessage = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, newMessage),
    );
  }, []);

  const renderSend = props => {
    return (
      <Send {...props}>
        <View style={styles.iconChat}>
          <Icon name="paper-plane" size={20} color="#1e90ff" />
        </View>
      </Send>
    );
  };

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={onSend}
        user={{
          _id: 1,
        }}
        placeholder="Aa"
        renderSend={renderSend}
      />
    </View>
  );
};

export default ChatWithDoctor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  input: {
    flex: 1,
  },
  iconChat: {
    width: 40,
    height: 40,
    color: '#000000',
  },
});
