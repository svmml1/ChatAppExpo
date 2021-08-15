import * as React from 'react';
import { Text, View,Image , StyleSheet} from 'react-native'


export default function TabOneScreen() {
  return (
    <View>
      <Image 
      source={ {uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png'}} 
      style={Styles.image}
      />
      <View>
        <View>
          <Text>Elon Musk</Text>
          <Text>11:11 AM</Text>
        </View>
      </View>
    </View>
  );
}


const Styles = StyleSheet.create({
    container:{

    },
    image: {
      height: 100,
      width: 100
    }

})
