import {Text,View, Image, StyleSheet,Pressable} from 'react-native';
import mainStyle from '../MainStyle';


export default function ShoppingOptions({ numberOfItems, setNumberOfItems, boughtSecondHand, setBoughtSecondHand }) { 
  const textStyle=mainStyle.text

  const increaseCount = () => {
    setNumberOfItems(prev => prev + 1);
  };

  const decreaseCount = () => {
    setNumberOfItems(prev => (prev > 0 ? prev - 1 : 0));
  };

  const toggleCheckbox = () => {
    if (numberOfItems > 0) {
      setBoughtSecondHand(prev => !prev);
    }
    
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
                <Text style={styles.counterText}>{numberOfItems}</Text>
                <Pressable onPress={decreaseCount} style={styles.arrowButton}>
                  <Text style={textStyle}>↓</Text>
                </Pressable>
            </View>
          </View>
      
        <View style={styles.secondHandContainer}>
        <View style={[
          styles.secondHandQuestion,
          {backgroundColor: numberOfItems === 0 ? '#cccccc' : '#55a987',
            opacity: numberOfItems === 0 ? 0.5 : 1
          }
        ]}>
          <Text style={[
            textStyle, 
            {fontSize: 20},
            {color: numberOfItems === 0 ? '#808080' : '#ffffff'}
          ]}>
            Did you buy it second hand?
          </Text>
        </View>
          <Pressable 
          onPress={toggleCheckbox} 
          style={[
            styles.checkboxContainer,
            {opacity: numberOfItems === 0 ? 0.5 : 1}
          ]}
          disabled={numberOfItems === 0} >
            <View style={[styles.checkbox, boughtSecondHand && styles.checked]}>
              {boughtSecondHand && <Text style={styles.checkmark}>✓</Text>}
            </View>
            <Text style={[textStyle, {fontSize: 20}, {color: numberOfItems === 0 ? '#cccccc' : '#808080'}]}>Yes!</Text>
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
      disabledCheckbox: {
        backgroundColor: '#cccccc', 
        borderColor: '#aaaaaa',
      },
      
    });