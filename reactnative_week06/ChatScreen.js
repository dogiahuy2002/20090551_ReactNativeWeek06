import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, Pressable } from 'react-native';
import ca_nau_lau from "./ca_nau_lau.png";
import do_choi from "./do_choi_dang_mo_hinh.png";
import ga from "./ga_bo_toi.png";
import lanhdao from "./lanh_dao_gian_don.png";
import xecau from "./xa_can_cau.png";
import trum from "./trump1.png";
import hieu from "./hieu_long_con_tre.png"

const DATA1 = [
    { id: '1', 
    title: 'Ca nau lau, nau my mini', 
    shop:'Shop: DeVang', 
    image: './ca_nau_lau.png' }
    ,
    { id: '2', 
    title: '1KG kho ga bo toi',
    shop:'Shop: LTD Food', 
    image: './ga_bo_toi.png'}
    ,
    { id: '3', 
    title: 'Xe can cau da nang',
    shop:'Shop: The Gioi Do Choi',
    image: './xa_can_cau.png' }
    ,
    { id: '4',
     title: 'Do choi dang mo hinh',
     shop:'Shop: The Gioi Do Choi',
     image: './do_choi_dang_mo_hinh.png' }
     ,
    { id: '5', 
    title: 'Lanh dao don gian',
    shop:'Shop: Minh Long Book',
    image: './lanh_dao_gian_don.png' }
    ,
    { id: '6', 
    title: 'Hieu long tre con',
    shop:'Shop: Minh Long Book',
    image: './hieu_long_con_tre.png' }
    ,
    { id: '7', 
    title: 'Donal Trum thien tai lanh dao',
    shop:'Shop: Minh Long Book',
    image: './trump1.png' },
    // Thêm nhiều mục hơn nếu cần
];

const Item = ({ title, image, shop, navigation }) => (
    <View style={styles.item}>
    <View style={{flex:2}}>
    <Image 
            source={require(image)}
            style={{width:60, height:60}}
            //resizeMode= "contain"
        />
    </View>
    
    <View style={{flexDirection:'column', flex:4}}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.title}>{shop}</Text>
    </View>
    
    <Pressable 
      onPress={()=>{navigation.navigate('Product')}}    
      style={{width:88, height:38, backgroundColor:"red", alignItems:'center',  justifyContent:'center', marginRight: 10, marginTop: 10}}>
      <Text style={{fontSize:15, fontWeight:700, color:"#fff"}}>
        CHAT
      </Text>
    </Pressable>

    </View>
);

const ChatScreen = ({navigation}) => {
    const renderItem = ({ item }) => (
        <Item title={item.title} image={item.image} shop={item.shop}/>
    );

    return (
        <View style={styles.container}>
          <View></View>
          <View style={{width: 360, alignItems: 'center', justifyContent:"center", flexDirection:'row'}}>
              <Text style={{alignContent:'center', marginLeft: 20, marginBottom:20}}>
                Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
              </Text>
              <Pressable 
                onPress={()=> navigation.navigate('Product')}    
                style={{width:118, height:38, backgroundColor:"green", 
                      alignItems:'center',  justifyContent:'center', marginRight: 10}}>
                <Text style={{fontSize:15, fontWeight:700, color:"#fff"}}>
                  Go to Products
                </Text>
              </Pressable>
          </View>
            <FlatList
                data={DATA1}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                // numColumns={2} // Set the number of columns
                // columnWrapperStyle={styles.columnWrapper} // Optional: style for each column
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: '#fff',
    },
    item: {
        flex:1,
        backgroundColor:"#C4C4C4",
        padding: 5,
        borderBottomWidth: 4,
        borderBottomColor: '#ccc',
        flexDirection: 'row',
        width:360,
        height:80
    },
    title: {
        marginTop:5,
        fontSize: 12,
        fontWeight: 700

    },
  //   columnWrapper: {
  //   justifyContent: 'space-between', // Space out columns
  // },
});

export default ChatScreen;
