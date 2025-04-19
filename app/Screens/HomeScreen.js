import React from 'react';
import { Text, View, StyleSheet, Pressable} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import mainStyle from '../MainStyle';
import BottomNavBar from '../components/NavigationBar';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useState } from 'react';

export default function HomeScreen() {
    const navigation = useNavigation();
    const [totalPoints, setTotalPoints] = useState(0);

useFocusEffect(
  React.useCallback(() => {
    const fetchPoints = async () => {
      try {
        const today = new Date().toISOString().split('T')[0];
        const storedData = await AsyncStorage.getItem(`@EcoHabit_${today}`);
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          const pointsSum = parsedData.points.reduce((acc, cur) => acc + cur, 0);
          setTotalPoints(pointsSum);
        } else {
          setTotalPoints(0);
        }
      } catch (error) {
        console.error('Error fetching points:', error);
      }
    };

    fetchPoints();
  }, [])
);

const maxPoints = 200;
const percentage = Math.min((totalPoints / maxPoints) * 100, 100);

    
  
   /* // Array just nu, ersätt med data från databasen senare
      const points = [10, 15, 20, 100]; 

      // 1. Summera alla poäng
      const totalPoints = points.reduce((sum, p) => sum + p, 0);

      // 2. Maxpoäng (sätt en gräns t.ex. 100)
      const maxPoints = 200;

      // 3. Räkna ut procent (för fill-värde)
      const percentage = Math.min((totalPoints / maxPoints) * 100, 100);
*/






    return (
      <View style={mainStyle.container}>
        <View style={styles.container}>
        <Text style={styles.text}>Total Points: {totalPoints}</Text>
          <AnimatedCircularProgress
          size={170}
          width={12}
          fill={percentage}
          tintColor="#6cdbaeff"
          backgroundColor="#3d5875"
          duration={500}
          rotation={0} //startar från 0 grader
          arcSweepAngle={360} //sveper hela vägen runt
          lineCap="round" //makes the ends round
          children={() => (
            <View style={styles.textContainer}>
              <Text style={[styles.text, {color: '#6cdbaeff'}]}>
              {Math.round(percentage)}%
              </Text>

            </View>
          )}
          />
      </View>
       
       <Pressable 
          style={styles.addButton} 
          onPress={() => {navigation.navigate('Transport'); 
          }}>
          <Text style={[mainStyle.text, {fontSize:27}]}> + Add Daily Habits </Text>
        </Pressable>
        {/* Implementerar navbar */}
         <BottomNavBar active="Home" /> 
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'top', 
    alignItems: 'center', 
    marginTop: 50
  },
  text: {
    padding: 10,
    fontFamily: 'mainFont',
    color: '#6cdbaeff',
    fontSize: 30,
    textAlign: 'center',
  },
  textContainer: {
    position: 'absolute',
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6cdbaeff',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 100,
  },
  addText: {
    color: '#fff',
    fontSize: 25,

  },
});
