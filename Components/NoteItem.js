import React from "react";
import { View, StyleSheet,Text, Pressable } from "react-native";



function NoteItem(props) {



   return (
   <View style={styles.notesItem}> 
   <Pressable 
   onPress={props.onDeleteItem.bind(this, props.id)}
   android_ripple={{color:'#dddddd'}}
   style={({pressed})=> pressed && styles.presseditem}
   >
   <Text style={styles.notesText}> {props.text} </Text>
   </Pressable> 

   </View>
    );
    
};
export default NoteItem;

const styles= StyleSheet.create({
    notesItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#c2e4eb',
      },
    
      notesText: 
      {
        padding: 8,
        color:'white'
      },

      presseditem:{
        opacity:0.5
      }
    

})

