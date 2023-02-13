import {Text,Button,StyleSheet,TextInput,View, Modal} from 'react-native';
import {useState} from 'react';
import { Picker } from '@react-native-picker/picker';



function NoteInput(props)
{
    const [text,setText]=useState(" "); 

    function handleNote(val)
    {
        setText(val);
    }

      function handleClick()
      {
        props.onAddNotes(text);
        setText('');
      }
      


    return (
        <Modal visible={props.visible} animationType="slide">
        <View style={styles.formContainer}>
        <Text style={styles.title}>Add Note</Text>
        {/* <TextInput  
        style={styles.input} 
        placeholder='Title'
        onChangeText={handleTitle} 
        value={note.title}
        >
        </TextInput> */}
          <TextInput 
          placeholder='Your note'
          onChangeText={handleNote} 
          style={styles.input}          
          value={text}/> 
          <View>
          {/* <Picker
          selectedValue={category}
          onValueChange={currentCategory => setCategory(currentCategory)}>
          <Picker.Item id="1" label="Personal" value="Personal" />
          <Picker.Item id="2" label="Work" value="Work" />
          <Picker.Item id="3" label="Ideas" value="Ideas" />
        </Picker> */}
        {/* <Text>
          Selected: {category}
        </Text> */}

          </View>
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


  