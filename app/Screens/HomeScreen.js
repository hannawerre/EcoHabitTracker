import { Text, View, Button, StyleSheet, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import mainStyle from '../MainStyle';
import BottomNavBar from '../components/NavigationBar';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default function HomeScreen() {
    const navigation = useNavigation();
      // Din array med poäng (kan komma från props, context, eller API)
      const points = [10, 15, 20, 100]; 

      // 1. Summera alla poäng
      const totalPoints = points.reduce((sum, p) => sum + p, 0);

      // 2. Maxpoäng (sätt en gräns t.ex. 100)
      const maxPoints = 200;

      // 3. Räkna ut procent (för fill-värde)
      const percentage = Math.min((totalPoints / maxPoints) * 100, 100);

    return (
      <View style={mainStyle.container}>
        <View style={styles.container}>
        <Text style={styles.text}>Total Points: {totalPoints}</Text>
          <AnimatedCircularProgress
          size={200}
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
          <Text style={styles.addText}> + Add Daily Habits </Text>
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
