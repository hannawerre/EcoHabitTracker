import {Text, View, Image, StyleSheet, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import mainStyle from '../MainStyle';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HabitScreenLayout({questionText, nextScreen, nextButtonText}) {
    const navigation = useNavigation();
    const textStyle = mainStyle.text

    return (
        <SafeAreaView style={mainStyle.container}>
                <View style={styles.habitQuestion}>
                    <Text style={textStyle}> {questionText} </Text>
                </View>
                <Pressable 
                    style={styles.closeButton}
                    onPress={() => {navigation.navigate('Home'); 
                    }}>
                        <Image
                            source={require('../assets/closeCross.png')}
                            style={styles.image}
                            
                        />
                </Pressable>
            <View style={styles.options}>
            </View>
            <Pressable 
                style={styles.nextButton} 
                onPress={() => {navigation.navigate(nextScreen); 
                }}>
                    <Text style={textStyle}> {nextButtonText} </Text>
            </Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    
    habitQuestion: {
      flex: 1,  
      backgroundColor: "#6cdbaeff",
      borderRadius:15,
      width:'80%',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    closeButton: {
        position: 'absolute',
        right: 0,
        top: 45
    },
    image:{
        height: 40,
        width: 40,
        resizeMode:'contain'

    },
    options: {
        flex: 7
    },
    nextButton: {
        backgroundColor:"#6cdbaeff",
        flex: 1,
        width:'80%',
        borderRadius:15,
        alignItems:'center',
        justifyContent: 'center',

    },
  });