import * as React from 'react';
import { Text, View,Image , StyleSheet, FlatList, Pressable} from 'react-native'
import { Auth, DataStore } from 'aws-amplify';
import { ChatRoomItem } from '../components/ChatRoomItem';
import ChatRoomsData from '../assets/dummy-data/ChatRooms';




export function HomeScreen() {

function logOut () {
    Auth.signOut();
  }



  return (
    <View style={styles.page}>
      <FlatList 
      data={ChatRoomsData}
      renderItem={({item}) => <ChatRoomItem chatRoom={item} /> }
      showsVerticalScrollIndicator={false}
      />
      {/* <Pressable onPress={logOut} style={{backgroundColor: 'red', height: 50, margin: 10, borderRadius: 50, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Logout</Text>
  </Pressable>*/ }
    
      
    </View>
  );
}


const styles = StyleSheet.create({
    
  page:{
    backgroundColor: 'white',
    flex: 1
  }

})
