import {Text,View, StyleSheet,Pressable} from 'react-native';
import mainStyle from '../MainStyle';

export default function GeneralOptions({options, selectedOptions, onToggleOption}) { 
    const textStyle=mainStyle.text; 

    return (
        <View>
          {options.map((option) => (
            <View key={option.id} style={styles.questionContainer}>
                <View style={styles.question}>
                <Text style={[textStyle, {fontSize: 20}]}> {option.phrase} </Text> 
                </View> 

                <Pressable onPress={() => onToggleOption(option.id)} style={styles.checkboxContainer}>
                    <View style={[styles.checkbox, selectedOptions.includes(option.id) && styles.checked]}>
                    {selectedOptions.includes(option.id) && <Text style={styles.checkmark}>✓</Text>}
                    </View>
                </Pressable>
            
            </View> 
          ))}
          </View> 
      );
    }

    const styles = StyleSheet.create({
        questionContainer:{
            alignSelf: 'center',
            width: '90%',
            height:100,
            flexDirection:'row',
            //alignItems: 'center',
            justifyContent: 'center',
          },

          question: {  
            backgroundColor: "#55a987",
            borderRadius:15,
            padding: 10,
            marginTop:'5%',
            width:'90%',
            justifyContent: 'center',
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