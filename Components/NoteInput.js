import {Text,Button,StyleSheet,TextInput,View, Modal} from 'react-native';
import { useState} from 'react';


function NoteInput(props)
{
    const [text,setText]=useState(''); 

    function handleChange(val)
    {
        setText(val);
    };

      function handleClick()
      {
        props.onAddNotes(text);
        setText('');
      }


    return (
        <Modal visible={props.visible} animationType="slide">
        <View style={styles.formContainer}>
        <Text style={styles.title}>Add Note</Text>
          <TextInput 
          onChangeText={handleChange} 
          style={styles.input}          
          value={text}/> 
          <View style={styles.buttonConatiner}>
            <View style={styles.button}>
            <Button onPress={handleClick} title="Add"/>
            </View>
          <View style={styles.button}>
          <Button onPress={props.oncancel} title="Cancel"/>
          </View>
        </View>
        </View>
        </Modal>

    )
}

export default NoteInput;

const styles=StyleSheet.create({
    formContainer:
    {
        flex:1,
        backgroundColor:"#f5f5f5",
        padding:10,
        marginVertical:10,
        marginHorizontal:10,
        alignItems:'center',
        justifyContent:'center'
      },

    title:
    {
      fontSize:20,
      fontWeight:"bold",
    },

    input:{
      marginVertical:20,
      width:"100%",
      borderBottomWidth:2,
      fontSize:16,
      padding:10 
    },
    buttonConatiner:
    {
        flexDirection:'row'
    },
    button:{
        width:'40%',
        marginHorizontal:8
    }
    

})


  