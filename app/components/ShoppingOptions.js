import React, { useState } from 'react';
import {Text,View, Image, StyleSheet,Pressable} from 'react-native';
import mainStyle from '../MainStyle';



export default function ShoppingOptions() { 
  const textStyle=mainStyle.text
  const [itemCount, setItemCount] = useState(0);
  const [isSecondHand, setIsSecondHand] = useState(false);

  const increaseCount = () => {
    setItemCount(itemCount + 1);
  };

  const decreaseCount = () => {
    if (itemCount > 0) {
      setItemCount(itemCount - 1);
    }
  }

  const toggleCheckbox = () => {
    setIsSecondHand(!isSecondHand);
  };

    return (
        <View>
          <View style={styles.shopCountContainer}>
            <Image style={styles.image}
                source={require('../assets/images/clothesImage.png')}/>

            <View style={styles.counterContainer}>
              <Pressable onPress={increaseCount} style={styles.arrowButton}>
                  <Text style={textStyle}>↑</Text>
                </Pressable>
                <Text style={styles.counterText}>{itemCount}</Text>
                <Pressable onPress={decreaseCount} style={styles.arrowButton}>
                  <Text style={textStyle}>↓</Text>
                </Pressable>
            </View>
          </View>
      
        <View style={styles.secondHandContainer}>
          <View style={styles.secondHandQuestion}>
            <Text style={[textStyle, {fontSize: 20}]}> Did you buy it second hand? </Text>
          </View>
          <Pressable onPress={toggleCheckbox} style={styles.checkboxContainer}>
            <View style={[styles.checkbox, isSecondHand && styles.checked]}>
              {isSecondHand && <Text style={styles.checkmark}>✓</Text>}
            </View>
            <Text style={[textStyle, {fontSize: 20}, {color:'#808080ff'}]}>Yes!</Text>
          </Pressable>
        </View>
        </View> 
      );    
    }

    const styles = StyleSheet.create({
      //Styling for image and counter
      shopCountContainer: {
        flexDirection: 'row',
        marginTop: '10%'
      },

      image: {
        height: 275,
        width: 275,
      },

      counterContainer: {
        alignItems: 'center',
        marginTop: 35,
        padding: 25
      },

      arrowButton: {
        padding: 10,
        backgroundColor: '#55a987',
        borderRadius: 15,
        width: 50,
        marginVertical: 8
      },
      counterText: {
        fontSize: 30,
        fontWeight: 'bold',
        color:'#808080ff',
      },

      //Styling for secondhand options
      secondHandContainer:{
        alignSelf: 'center',
        width: '85%',
        flexDirection:'row',
        marginTop: '15%',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
      },

      secondHandQuestion: {  
        backgroundColor: "#55a987",
        borderRadius:15,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:'5%',
        flex: 7
      },

      checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        flex: 2,
        padding: 10
  
      },
      checkbox: {
        width: 27,
        height: 27,
        borderWidth: 4,
        borderColor: '#55a987',
        borderRadius: 4,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      checked: {
        backgroundColor: '#55a987',
      },
      checkmark: {
        color: 'white',
        fontSize: 18,
      },
    });