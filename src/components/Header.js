import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{props.headertitel}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header:{
        height:60,
        paddingTop:12,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:'#F8F8F8',
       shadowColor:'#000',
       shadowOffset:{width:0,height:2},
       shadowOpacity:0.2,
       elevation:2,
       position:'relative'
    },
    text:{
        fontSize:20
    }

})
export default Header
