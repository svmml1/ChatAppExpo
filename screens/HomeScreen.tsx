import * as React from 'react';
import { Text, View,Image , StyleSheet, FlatList} from 'react-native'
import { ChatRoomItem } from '../components/ChatRoomItem';
import ChatRoomsData from '../assets/dummy-data/ChatRooms';




export function HomeScreen() {
  return (
    <View style={styles.page}>
      <FlatList 
      data={ChatRoomsData}
      renderItem={({item}) => <ChatRoomItem chatRoom={item} /> }
      showsVerticalScrollIndicator={false}
      />

    </View>
  );
}


const styles = StyleSheet.create({
    
  page:{
    backgroundColor: 'white'
  }

})
