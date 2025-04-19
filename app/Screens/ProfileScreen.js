import React, { useEffect, useState } from 'react';
import { Text, View, Dimensions, ScrollView, StyleSheet} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useNavigation } from '@react-navigation/native';
import mainStyleScroll from '../MainStyleScroll';
import BottomNavBar from '../components/NavigationBar';
import ChallangeProgressBar from '../components/ChallangeProgressBar';
import AsyncStorage from '@react-native-async-storage/async-storage';


const screenWidth = Dimensions.get('window').width;

export default function ProfileScreen() {
    const navigation = useNavigation();
    const [scores, setScores] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const today = new Date();
        const yearMonthKey = today.toISOString().substring(0, 7);
        const monthKey = `@EcoHabit_${yearMonthKey}`;
  
        try {
          const data = await AsyncStorage.getItem(monthKey);
          const parsed = data ? JSON.parse(data) : { monthData: [] };
  
          const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  
          const scoresArray = Array.from({ length: daysInMonth }, (_, index) => {
            const dayData = parsed.monthData.find(day => day.dayId.endsWith(`-${String(index + 1).padStart(2, '0')}`));
            if (dayData) {
              return dayData.formCompleted ? dayData.points.reduce((a, b) => a + b, 0) : 0;
            } else {
              return 0;
            }
          });
  
          setScores(scoresArray);
  
        } catch (error) {
          console.error('Error loading profile data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    const chartConfig = {
      backgroundColor: '#ffffff',
      backgroundGradientFrom: '#ffffff',
      backgroundGradientTo: '#ffffff',
      decimalPlaces: 0,
      color: (opacity = 1) => `rgba(255, 105, 135, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      propsForDots: {
        r: '5',
        strokeWidth: '2',
        stroke: '#ff6987',
        fill: '#ff6987',
      },
      fillShadowGradientFrom: '#ff6987',
      fillShadowGradientFromOpacity: 0.3,
      fillShadowGradientToOpacity: 0.05,
    };

    // Dynamisk Tree Size
    const totalScore = scores.reduce((sum, current) => sum + current, 0);
    const treeSize = Math.floor(totalScore / 10); // Exempel: 1 meter per 10 poäng
  
    return (
      <ScrollView 
        style={mainStyleScroll.container}
        contentContainerStyle={mainStyleScroll.contentContainerStyle}
      >
        {/* HEADER likadan som på andra vyer */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Hej namn!</Text>
        </View>

        {/* Tree Size och Diagram */}
        <Text style={[mainStyleScroll.text, { fontSize: 20 }]}>Tree Size: {treeSize} meters</Text>
        <Text style={[mainStyleScroll.text, { fontSize: 18, marginBottom: 10 }]}>Your monthly chart</Text>
  
        {scores.length > 0 && (
          <View>
            <LineChart
              data={{
                labels: scores.map((_, index) => (index + 1).toString()),
                datasets: [{ data: scores }],
              }}
              width={screenWidth - 32}
              height={220}
              chartConfig={chartConfig}
              withShadow
              bezier={false}
              style={{
                borderRadius: 16,
                marginHorizontal: 16,
              }}
            />
            {/* X-axis label */}
            <View style={{ alignItems: 'center', marginTop: 5 }}>
              <Text style={{ fontFamily: 'mainFont', fontSize: 12, color: 'black' }}>Day</Text>
            </View>
          </View>
        )}
  
        {/* CHALLENGES box */}
        <View style={styles.challengeBox}>
          <Text style={styles.challengeHeader}>Your challenges</Text>
          <ChallangeProgressBar label="Buy a second hand item" currentPoints={1} maxPoints={1} />
          <ChallangeProgressBar label="Eat vegetarian for five days" currentPoints={2} maxPoints={5} />
          <ChallangeProgressBar label="Recycle for three days" currentPoints={0} maxPoints={3} />
        </View>
  
        {/* Navigation */}
        <BottomNavBar active="Profile" />
      </ScrollView>
    );
}

// Extra styling för Header och ChallengeBox
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#6cdbaeff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginTop: 40,
    marginBottom: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'mainFont',
    textAlign: 'center',
  },
  challengeBox: {
    borderWidth: 2,
    borderColor: '#6cdbaeff',
    borderRadius: 20,
    margin: 16,
    padding: 16,
    backgroundColor: 'white',
  },
  challengeHeader: {
    fontFamily: 'mainFont',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 16,
    color: '#6cdbaeff',
  },
});