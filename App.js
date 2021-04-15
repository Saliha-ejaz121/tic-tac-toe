/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import {useState , useEffect } from 'react';
 import React from 'react';
 
 
 import {
   Pressable,
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   Modal,
    Button,
   TouchableWithoutFeedback,
   View,
 } from 'react-native';
 
 
 const App = () => {
   //Hooks
   const [getMark11, setMark11] = useState('.');
   const [getMark12, setMark12] = useState('.');
   const [getMark13, setMark13] = useState('.');
   const [getMark21, setMark21] = useState('.');
   const [getMark22, setMark22] = useState('.');
   const [getMark23, setMark23] = useState('.');
   const [getMark31, setMark31] = useState('.');
   const [getMark32, setMark32] = useState('.');
   const [getMark33, setMark33] = useState('.');
   const [getm, setm] = useState('1');
   const [getWinner, setWinner] = useState('');
   const [modalVisible, setModalVisible] = useState(false);
     useEffect(() => {
       if (
       (getMark11 === 'X' && getMark12 === 'X' && getMark13 === 'X') ||
       (getMark21 === 'X' && getMark22 === 'X' && getMark23 === 'X') ||
       (getMark31 === 'X' && getMark32 === 'X' && getMark33 === 'X') ||
       (getMark11=== 'X' && getMark21 === 'X' && getMark31 === 'X') ||
       (getMark12 === 'X' && getMark22 === 'X' && getMark32 === 'X') ||
       (getMark13=== 'X' && getMark23 === 'X' && getMark33 === 'X') ||
       (getMark13 === 'X' && getMark22 === 'X' && getMark31 === 'X') ||
       (getMark11 === 'X' && getMark22 === 'X' && getMark33 === 'X') 
     ) {
       setWinner("Player 1");
       setModalVisible(true)
     } else if (
       (getMark11 === '0' && getMark12 === '0' && getMark13 === '0') ||
       (getMark21 === '0' && getMark22 === '0' && getMark23 === '0') ||
       (getMark31 === '0' && getMark32 === '0' && getMark33 === '0') ||
       (getMark11=== '0' && getMark21 === '0' && getMark31 === '0') ||
       (getMark12 === '0' && getMark22 === '0' && getMark32 === '0') ||
       (getMark13=== '0' && getMark23 === '0' && getMark33 === '0') ||
       (getMark13 === '0' && getMark22 === '0' && getMark31 === '0') ||
       (getMark11 === '0' && getMark22 === '0' && getMark33 === '0')
     ) {
       setWinner("Player 2")
      setModalVisible(true)
     // setWinner("row 1"+" "+getMark11+","+getMark12+", "+getMark13+
     //   "row 2"+" "+getMark21+","+getMark22+", "+getMark23+
     //   "row 3"+" "+getMark31+","+getMark32+", "+getMark33);
   }
     });
      
   const PlayAgain= () =>{
     setMark11(".")
     setMark12(".")
     setMark13(".")
     setMark21(".")
     setMark22(".")
     setMark23(".")
     setMark31(".")
     setMark32(".")
     setMark33(".")
     setWinner('')
     setm('1')
     setModalVisible(false)
 
   }
   
   const TurnCount = () => {
     if (getm === '1') {
       setm("2");
       return "X";
     }
     if (getm === '2') {
       setm("1");
       return "0";
     }
   };
   const onPressFunction = btnNumber => {
     var turn = TurnCount();
     if (btnNumber == '11') {
       if(!(getMark11=="X" || getMark11 =="0")) 
       setMark11(turn);
       
     } else if (btnNumber == '12') {
      if(!(getMark12=="X" || getMark12 =="0")) 
       setMark12(turn);
       
     } else if (btnNumber == '13') {
      if(!(getMark13=="X" || getMark13 =="0")) 
       setMark13(turn);
       
     } else if (btnNumber == '21') {
      if(!(getMark21=="X" || getMark21 =="0")) 
       setMark21(turn);
       
     } else if (btnNumber == '22') {
      if(!(getMark22=="X" || getMark22 =="0")) 
       setMark22(turn);
       
     } else if (btnNumber == '23') {
      if(!(getMark23=="X" || getMark23 =="0")) 
       setMark23(turn);
       
     } else if (btnNumber == '31') {
      if(!(getMark31=="X" || getMark31 =="0")) 
       setMark31(turn);
       
     } else if (btnNumber == '32') {
      if(!(getMark32=="X" || getMark32 =="0")) 
       setMark32(turn);
       
     } else {
      if(!(getMark33=="X" || getMark33 =="0")) 
       setMark33(turn);
       
     }
   };
   return (
     <SafeAreaView>
       <StatusBar />
       <ScrollView contentInsetAdjustmentBehavior="automatic">
         <View>
           <View>
             <Text style={styles.headerStyle}>Tic Tac Toe! </Text>
           </View>
           <View style={styles.box}>
             <View style={styles.row}>
               <Pressable onPress={onPressFunction.bind(this, '11')}>
                 <Text style={styles.btn}>{getMark11}</Text>
               </Pressable>
               <Pressable onPress={onPressFunction.bind(this, '12')}>
                 <Text style={styles.btn}>{getMark12}</Text>
               </Pressable>
               <Pressable onPress={onPressFunction.bind(this, '13')}>
                 <Text style={styles.btn}>{getMark13}</Text>
               </Pressable>
             </View>
             <View style={styles.row}>
               <Pressable onPress={onPressFunction.bind(this, '21')}>
                 <Text style={styles.btn}>{getMark21}</Text>
               </Pressable>
               <Pressable onPress={onPressFunction.bind(this, '22')}>
                 <Text style={styles.btn}>{getMark22}</Text>
               </Pressable>
               <Pressable onPress={onPressFunction.bind(this, '23')}>
                 <Text style={styles.btn}>{getMark23}</Text>
               </Pressable>
             </View>
             <View style={styles.row}>
               <Pressable onPress={onPressFunction.bind(this, '31')}>
                 <Text style={styles.btn}>{getMark31}</Text>
               </Pressable>
               <Pressable onPress={onPressFunction.bind(this, '32')}>
                 <Text style={styles.btn}>{getMark32}</Text>
               </Pressable>
               <Pressable onPress={onPressFunction.bind(this, '33')}>
                 <Text style={styles.btn}>{getMark33}</Text>
               </Pressable>
             </View>
             
           </View>
           <View style = {{alignItems : 'center'}}>
           <Text>Player : {getm}</Text>
           <Text>Winner : {getWinner}</Text>
           </View>
           <View >
 
 
 </View>
 <Modal visible={modalVisible} >
 <Text style={styles.modalTitle}>Winner!</Text>
 <Text style={styles.modalClass}>{getWinner}</Text>
 <Button
   onPress={PlayAgain}
   title="Play Again"
   color="#841584"
   marginTop = "20"
  />
 </Modal>
         </View>
       </ScrollView>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   btnPlayAgain : {
     width : 100,
     height : 50,
     backgroundColor : 'pink', 
 marginTop : 30,
   },
   btn: {
     fontSize: 20,
     paddingHorizontal: 40,
     paddingVertical: 30,
     justifyContent: 'center',
     alignItems: 'center',
     alignSelf: 'center',
     backgroundColor: 'rgb(255, 231, 166)',
   },
   row: {
     flex: 1,
     flexDirection: 'row',
   },
   box: {
     marginHorizontal: 20,
     marginVertical: 20,
     marginTop: 80,
     padding: 60,
     backgroundColor: 'rgb(255, 239, 196)',
     justifyContent: 'center',
     alignItems: 'center',
   },
 modalTitle : {
   marginTop : 60,
       justifyContent: 'center',
     alignItems: 'center',
     alignSelf: 'center',
     fontSize : 30,
     color : 'purple',
     
 },
 modalClass : {
   marginTop : 20,
       justifyContent: 'center',
     alignItems: 'center',
     alignSelf: 'center',
     fontSize : 30,
     color : 'purple',
     marginBottom : 30
 },
   headerStyle: {
     flex: 1,
     fontSize: 30,
     fontWeight: 'bold',
     backgroundColor: 'white',
     alignItems: 'center',
     justifyContent: 'flex-start',
     paddingHorizontal: 90,
     paddingTop: 20,
     
   },
  
   
   
   
 });
 
 export default App;
 