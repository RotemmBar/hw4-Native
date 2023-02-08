import { StyleSheet, Dimensions, View, Button , FlatList} from 'react-native';
import { useState } from 'react';
import NoteInput from '../Components/NoteInput';
import NoteItem from '../Components/NoteItem';



export default function Work() 
{

  const [noteArr,setNoteArr]=useState([]);

  function handleClick (text) 
  {
    setNoteArr((currentnotesarr)=>[...noteArr,
    {text: text, id: Math.random().toString()}]);
    endAddNoteHandle();
  };
 
  function deleteNoteHandler(id){
    setNoteArr((currentnotesarr) => {
     return currentnotesarr.filter((note)=> note.id !==id );
    });

    console.log('Delete')

  }

  const[modalIsVisible,setModalIsVisible]= useState(false);

  function startAddNoteHandle() 
  {
    setModalIsVisible(true);
  }

  function endAddNoteHandle() 
  {
    setModalIsVisible(false);
  }
  return (
    <View style={styles.container}>

    <View style={styles.butview}>  
    <Button 
    title='Add Work Note' 
    color="#83bbef" 
    onPress={startAddNoteHandle}
    style={styles.button}/>
    </View>
  
    {modalIsVisible && <NoteInput oncancel={endAddNoteHandle} visible={modalIsVisible} onAddNotes={handleClick}/>}
  
    <FlatList
       data={noteArr} 
       renderItem={(itemData) => {
        return <NoteItem 
        text={itemData.item.text}
        id={itemData.item.id}
        onDeleteItem={deleteNoteHandler}
        
        />    
      }} 
      alwaysBounceVertical={false}/>
      </View>  
  );
}

const styles=StyleSheet.create({
  
  container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
},
ContainerItem:{
  width:Dimensions.get("window").width-100,
  height:"25%",
  marginVertical:10,
  backgroundColor:"#fff",
  justifyContent:"center",
  alignItems:"center",
  elevation:10

},
title:{
  fontSize:25,
  fontWeight:"bold",
  textAlign:"center",
  color:"pink"
},

icon:{
  fontSize:25,
},

addicon:{
  color:"purple", 
  fontSize:70, 
  fontWeight:"bold",

},
button:
{
  width:'40%',
  marginHorizontal:8,
},

butview:{
  flexDirection:'row',
  paddingTop:60


}

});

