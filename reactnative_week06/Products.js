import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, Pressable } from 'react-native';
import carbustops2 from "./carbusbtops2.png";
import daucam1 from "./daucam1.png";
import dauchuyen from "./dauchuyendoi1.png";
import dauchuyens2 from "./dauchuyendoipsps2.png";
import daynguon from "./daynguon1.png";
import giac from "./giacchuyen1.png"

//tao data
const DATA2 = [
  {
      id: '1',
      img: './giacchuyen1.png',
      tit:'Cáp chuyển từ Cổng USB sang PS2...',
      price:'69.900 đ'
  },
  {
      id: '2',
      img: './daynguon1.png',
      tit:'Cáp chuyển từ Cổng USB sang PS2...',
      price:'69.900 đ'
  },
  {
      id: '3',
      img: './dauchuyendoipsps2.png',
      tit:'Cáp chuyển từ Cổng USB sang PS2...',
      price:'69.900 đ'
  },
  {
      id: '4',
      img: './dauchuyendoi1.png',
      tit:'Cáp chuyển từ Cổng USB sang PS2...',
      price:'69.900 đ'
  },
  {
      id: '5',
      img: './carbusbtops2.png',
      tit:'Cáp chuyển từ Cổng USB sang PS2...',
      price:'69.900 đ'
  },
  {
      id: '6',
      img: './daucam1.png',
      tit:'Cáp chuyển từ Cổng USB sang PS2...',
      price:'69.900 đ'
  },
]

const Item = ({ img, tit, price }) => (
    <View style={styles.item}>
        <View style={{flex:5}}>
        <Image 
                source={require(img)}
                style={{width:155, height:90}}
                resizeMode= "contain"
            />
        </View>
        
        <View style={{marginTop: 40,flexDirection:'column', flex:4}}>
            <Text style={styles.tit}>{tit}</Text>
            <Image 
                source={require("./Star.png")}
                style={styles.star}
                resizeMode= "contain"
            />
            <Text style={styles.pri}>{price}
                <Text style={styles.dis} >-39%</Text>
            </Text>
        </View>
    </View>
);
export default Products = ()=> {
  const renderItem = ({ item }) => (
        <Item  img={item.img} tit={item.tit} price={item.price}/>
    );
  return(
    <View style={styles.container}>
        <View style={{flex:1, backgroundColor:"#1BA9FF", flexDirection:'row'}}>
            <View style={{flex:1, marginLeft: 10, justifyContent:'center'}}>
              <Image style={{ width: 30, height: 30 }}      
                  source={require('./left.png')}    />
            </View>
            <View style={{flex:3, justifyContent:'center', }}>
                  <Pressable
                //onPress={() => navigation.navigate('Xong', {image: img})}
                 style={{width: 192,
                        height: 30, 
                        alignItems:"center",
                        backgroundColor:"#fff", 
                        flexDirection:'row'
                        }}
                        >
                        <Image style={{ width: 20, height: 20,marginLeft:5, marginRight:10 }}      
                  source={require('./find.png')}    />
                        <Text style={{ fontSize:13, fontWeight:400, fontFamily:"Roboto", 
                                        alignContent:"center", color:"#7D5B5B" }}>
                            Dây cáp usb     
                        </Text>
                </Pressable>
            </View>
            <View style={{flex:1, justifyContent:'center'}}>
                <Image style={{ width: 30, height: 30, marginLeft:30 }}      
                  source={require('./bi_cart-check.png')}    />
            </View>
            <View style={{flex:1, justifyContent:'center'}}>
                  <Image style={{ width: 18, height: 5, marginLeft:30 }}      
                  source={require('./Group2.png')}    />
            </View>
            
        </View>


        <View style={{flex:12, backgroundColor:"C4C4C4"}}>
            <FlatList
                data={DATA2}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                 numColumns={2} // Set the number of columns
                // columnWrapperStyle={styles.columnWrapper} // Optional: style for each column
            />
        </View>


        <View style={{flex:1, backgroundColor:"#1BA9FF", justifyContent: "space-between", flexDirection: 'row'}}>
              <Image style={{ width: 30, height: 30, margin:10 }}      
                  source={require('./3.png')}    />
              <Image style={{ width: 30, height: 30, margin:10 }}      
                  source={require('./Home.png')}    />
              <Image style={{ width: 30, height: 30, margin:10 }}      
                  source={require('./Back.png')}    />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D3D3D3',
    },
    item: {
        flex:1,
        backgroundColor:"#D3D3D3",
        padding: 15,
        width:155,
        height:170
    },
    tit: {
        fontSize:12, 
        fontWeight:400, 
        fontFamily:"Roboto", 
        alignContent:"center",
        width:111,
        height:28,
        marginLeft:20
    },
    pri: {
        fontSize:12, 
        fontWeight:700, 
        fontFamily:"Roboto", 
        alignContent:"center",
        width:111,
        height:28,
        marginLeft:20
    },
    dis: {
        fontSize:12, 
        fontWeight:400, 
        fontFamily:"Roboto", 
        alignContent:"center",
        width:26,
        height:14,
        marginLeft:20,
        color:"#969DAA"
    },
    star: {
        width:106, 
        height:13,
        marginLeft:20,
        marginTop:3,
        marginBottom:3
    }
})