import { StyleSheet, Dimensions, View, Button , FlatList,AsyncStorage} from 'react-native';
import { useState } from 'react';
import NoteInput from '../Components/NoteInput';
import NoteItem from '../Components/NoteItem';



export default function Personal() 
{
  // const categories=[
  //   {
  //   name:'Personal',
  //   id:1,
  //   notes:[
  //     {
  //       id:1,
  //       text:'Test Note'
  //     }
  //   ]
  //   },
  //   {
  //   name:'Work',
  //   id:2,
  //   notes:[
  //     {
  //       id:1,
  //       text:'Test Note'
  //     }
  //   ]
  //   },
  //   {
  //   name:'Ideas',
  //   id:2,
  //   notes:[
  //     {
  //       id:1,
  //       text:'Test Note'
  //     }
  //   ]
  //   }
    
  //   ]

  //   const [category, setCategory]=useState({categories})


  const [noteArr,setNoteArr]=useState([]);

  function handleClick(text,id) 
  {
    setNoteArr((currentnotesarr)=>[...noteArr,
    {text: text, id: Math.random().toString()}]);

    // const newcat=categories.map(category=>{
    //   if (categories.id==id)
    //   {
    //     category.notes.push(text)
    //     category.id.push(id)

    //   }
    //   console.log(category)
    //   return category

    // })
    // setCategory(newcat)


    endAddNoteHandle();

  };
 
  function deleteNoteHandler(id){
    setNoteArr((currentnotesarr) => {
     return currentnotesarr.filter((note)=> note.id !==id );
    });

    console.log('Delete')

  }

  //The Modal (pop-up) of the new note

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
    title='Add Personal Note' 
    color="#ef4e95" 
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

