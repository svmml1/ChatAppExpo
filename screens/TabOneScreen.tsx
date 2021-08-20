import * as React from 'react';
import { Text, View,Image , StyleSheet} from 'react-native'
import { ChatRoomItem } from '../components/ChatRoomItem';
import ChatRoomsData from '../assets/dummy-data/ChatRooms';

const chatRoom1 = ChatRoomsData[0];
const chatRoom2 = ChatRoomsData[2];


export default function TabOneScreen() {
  return (
    <View style={styles.page}>
   <ChatRoomItem chatRoom={chatRoom1} name="a"/>
   <ChatRoomItem chatRoom={chatRoom2}/>

    </View>
  );
}


const styles = StyleSheet.create({
    
  page:{
    backgroundColor: 'white'
  }

})
