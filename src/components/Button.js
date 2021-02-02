import React from 'react'
import { View, Text ,TouchableOpacity,StyleSheet,} from 'react-native'

const Button = ({onPress,children}) => {
    return (
       <TouchableOpacity style={styles.button} onPress={onPress}>
           <Text style={styles.buttonText}>{children}</Text>
       </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button:{
        flex:1,
        backgroundColor:'#fff',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#007aff', 
        marginVertical:5
    },
    buttonText:{
       alignSelf:'center',
       color:'#007aff',
       fontSize:16,
       fontWeight:'600',
       paddingVertical: 10,

    }
    
})

export default Button
