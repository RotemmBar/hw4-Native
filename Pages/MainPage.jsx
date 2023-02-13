import { StyleSheet, Text, View,TouchableOpacity, Dimensions, Alert,Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default function MainPage(props)
{
    
  const openAlert=()=>{
    alert('To delete a Note, Please press on it :) ');
  }


 
  return (
  <View style={styles.container}>
  <Text style={{fontSize:40, color:'lightblue'}}>The Best Notes App! </Text>


  <TouchableOpacity 
  onPress={()=> {props.navigation.navigate('Personal')}}>
   <View style={styles.ContainerItem}>
  <Text style={styles.title}>Personal</Text>
  <Icon style={styles.icon} name="arrow-forward-outline"></Icon>
  </View>
  </TouchableOpacity>

  <TouchableOpacity onPress={()=> {props.navigation.navigate('Work')}}>
   <View style={styles.ContainerItem}>
  <Text style={styles.title}>Work</Text>
  <Icon style={styles.icon} name="arrow-forward-outline"></Icon>
  </View>
  </TouchableOpacity>


  <TouchableOpacity onPress={()=> {props.navigation.navigate('Ideas')}}>
   <View style={styles.ContainerItem}>
  <Text style={styles.title}>Ideas</Text>
  <Icon style={styles.icon} name="arrow-forward-outline"></Icon>
  </View>
  </TouchableOpacity>

  <View style={styles.mainWrapper}>
        <Button 
        title='How to Delete?' 
        color="#d9ead3"
        onPress={openAlert}/>
      </View>

    </View>
  )
}





const styles = StyleSheet.create({
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
    color:'pink'
  },
  
  icon:{
    fontSize:25,
  },

  addicon:{
    color:"purple", 
    fontSize:70, 
    fontWeight:"bold",
  
  }

});