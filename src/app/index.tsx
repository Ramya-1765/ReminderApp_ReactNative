import { Link, router } from "expo-router";
import { Alert, Button, Text, TouchableOpacity, View } from "react-native";

const Index = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',gap:25 }}>
      
      {/* <Button title="press me" onPress={()=>Alert.alert("hello")} /> */}
      
      <TouchableOpacity
        onPress={() => Alert.alert('Hello')}
        style={{
          backgroundColor: '#007bff', // Button color
          paddingVertical: 10,        // Vertical padding
          paddingHorizontal: 20,      // Horizontal padding
          borderRadius: 5,            // Rounded corners
          alignItems: 'center',
          width:100,       // Center text
        }}
      >
        <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: 'bold' }}>Press Me</Text>
      </TouchableOpacity>
   
 
      <Link href="/About" style={{backgroundColor:'teal',padding:10,borderRadius:10,color:'#fff'}}>Go To About Screen</Link>
      <Link href="/login" style={{backgroundColor:'teal',padding:10,borderRadius:10,color:'#fff'}}>Login page</Link>
    </View>
  );
};

export default Index;