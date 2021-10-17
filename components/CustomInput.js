import React from 'react'
import { View, Text , TextInput, StyleSheet} from 'react-native'

export default function CustomInput({value,setValue,placeholder,secureTextEntry}) {
    return (
        <View style={styles.container}> 
            <TextInput style={styles.input} placeholder={placeholder}
            value={value} onChangeText={setValue} secureTextEntry={secureTextEntry} />
        </View>
    )
}

const styles = StyleSheet.create({
    input:{

    },
    container:{
  backgroundColor:'#eee',
  width:'100%',
  borderColor:'black',
  borderWidth:1,
  borderRadius:5,
  paddingHorizontal:10,
  marginVertical:5,
    },
})