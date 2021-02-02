import React from 'react';
import {View,Text,Image,StyleSheet,Linking} from 'react-native';
import Button from './Button';
import Card from './Card'
import CardSection from './CardSection';

const AlbumDetail=({data})=>{
    const {id,first_name,last_name,avatar,email}=data;
return(
  <View>
  <Card>
    <CardSection>
      <View style={styles.imagecontiner}>
        <Image style={{width:35,height:35}}  source={{uri: avatar}}/>
      </View>
      <View style={styles.headercontiner}>
          <Text style={styles.headerText}>{id}-{first_name},{last_name}</Text>
          <Text>{email}</Text>

      </View>
    </CardSection>
    <CardSection>
        <Image  style={{height:450,width:null,flex:1}} resizeMode={'contain'} source={{uri:avatar}}/>
    </CardSection>
    <CardSection>
        <Button onPress={()=>Linking.openURL('https://www.amazon.com')}>
          Buy Now!
        </Button>
    </CardSection>
  </Card>
  </View>
);
};
export default AlbumDetail;
const styles = StyleSheet.create({
    headercontiner:{
        flexDirection:'column',
        justifyContent:'space-around'
    },
    headerText:{
        fontSize:18
    },
    imagecontiner:{
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:10
    }
})