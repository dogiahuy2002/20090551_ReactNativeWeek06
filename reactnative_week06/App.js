import { Text, SafeAreaView, StyleSheet, View, Pressable, Image } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatScreen from "./ChatScreen"
import Products from "./Products"
const Stack = createNativeStackNavigator();
function MyTitle() {
return ( 
  <View style={{flex:1, flexDirection:'row', backgroundColor:"#1BA9FF"}}>
        <View style={{flex:1, margin: 15}}>
          <Image style={{ width: 30, height: 30 }}      
              source={require('./left.png')}    />
        </View>
        <View style={{flex:5,  marginLeft:130, justifyContent:'center', backgroundColor:"#1BA9FF", fflexDirection:'row'}}>
        
             <Text style={{fontSize:15, fontWeight:500, color:"#fff"}}>CHAT</Text>
        </View>
        <View style={{flex:4, marginLeft:90,justifyContent:'center', backgroundColor:"#1BA9FF", 
        marginHorizontal:10}}>
              <Image style={{ width: 30, height: 30 }}      
              source={require('./bi_cart-check.png')}    />
        </View>
  </View>
    
  );}


function App() {
  return (
    //<Products />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Chat" component={ChatScreen} 
            options={{ headerTitle: (props) => <MyTitle {...props} /> }} />
        <Stack.Screen name="Product" component={Products}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;