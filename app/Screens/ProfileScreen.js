import React, { useEffect, useState } from 'react';
import { Text, View, Dimensions, ScrollView, Modal, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useNavigation } from '@react-navigation/native';
import mainStyleScroll from '../MainStyleScroll';
import BottomNavBar from '../components/NavigationBar';
import ChallangeProgressBar from '../components/ChallangeProgressBar';



const screenWidth = Dimensions.get('window').width;

export default function ProfileScreen() {
    const navigation = useNavigation();
    const [scores, setScores] = useState([]);
    const [selectedPoint, setSelectedPoint] = useState(null);  // State för vald datapunkt
    const [modalVisible, setModalVisible] = useState(false);  // State för att visa modal
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 }); // State för tooltipens position

    useEffect(() => {
        const fetchData = async () => {
            //Här funktion för att hämta data från quiz:
            const mockData = [
                { date: '2023-01-01', score: 10 },
                { date: '2023-02-01', score: 20 },
                { date: '2023-03-01', score: 20 },
                { date: '2023-04-01', score: 60 },
                { date: '2023-05-01', score: 50 },
                { date: '2023-06-01', score: 0 },
                { date: '2023-07-01', score: 50 },
                { date: '2023-08-01', score: 60 },
                { date: '2023-09-01', score: 40 },
                { date: '2023-10-01', score: 30 },
                { date: '2023-11-01', score: 50 },
                { date: '2023-12-01', score: 60 },
            ];
            setScores(mockData);
        };

        fetchData();
    }, []);
    const chartConfig = {
        backgroundColor: '#ffffff',
        backgroundGradientFrom: '#ffffff',
        backgroundGradientTo: '#ffffff',
        decimalPlaces: 0,
        color: (opacity = 1) => `rgba(108, 219, 174, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        propsForDots: {
          r: '5',
          strokeWidth: '2',
          stroke: '#6cdbaeff',
          fill: '#6cdbaeff',
        },
        fillShadowGradientFrom: '#6cdbaeff',
        fillShadowGradientFromOpacity: 0.5,
      };
    
      const chartProps = {
        width: screenWidth - 32,
        height: 260,
        yAxisSuffix: '',
        yAxisInterval: 1,
        chartConfig: chartConfig,
        bezier: false,
        style: {
          borderRadius: 16,
          marginHorizontal: 16,
        },
        onDataPointClick: (data) => {
            setSelectedPoint(data);
            setTooltipPosition({ x: data.x, y: data.y });
            setModalVisible(true);
            }
      };
      const handleOutsideClick = () => {
        setSelectedPoint(null);  // Rensa den valda punkten
        setModalVisible(false);  // Stäng modalen
      }
    return (
       
        <ScrollView 
        style={mainStyleScroll.container} // Använd container-stilen för ScrollView
        contentContainerStyle={mainStyleScroll.contentContainerStyle} // Använd contentContainerStyle för layouten på innehållet
        >
            <Text style={mainStyleScroll.text}>Hej Profil</Text>
            {scores.length > 0 && (
            <LineChart
               data={{
                 labels: scores.map((_, i) => (i + 1).toString()),
                 datasets: [{ data: scores.map(item => item.score) }],
               }}
               {...chartProps}
             />
            )}
            {/* Modal för att visa information om den valda punkten */}
            {selectedPoint && (
                <Modal
                    visible={modalVisible}
                    animationType="slide"
                    transparent={true}
                    onRequestClose={() => setModalVisible(false)}
                >
                    
                    <TouchableWithoutFeedback onPress={handleOutsideClick}>
                        <View style={{ flex: 1, 
                            justifyContent: 'center',
                            alignItems: 'center',
                        
                            }}>
                            <TouchableOpacity
                                style={{ backgroundColor: 'white', padding: 10, borderRadius: 10, minWidth: 150, alignItems: 'center', borderColor: '#6cdbaeff', borderWidth: 2 }}
                            >
                                <Text style={[mainStyleScroll.text, {fontSize: 18}]}>Dag: {selectedPoint.index + 1}</Text>
                                <Text style={[mainStyleScroll.text, {fontSize: 18}]}>Poäng: {selectedPoint.value}</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            )}
            {/* implementera challanges med progress bar */}
            <Text style={[mainStyleScroll.text, {fontSize: 20, marginTop: 20}]}>Challanges</Text>
            <ChallangeProgressBar label="Buy an item second hand" currentPoints={1} maxPoints={1} />
            <ChallangeProgressBar label="Eat vegetarian fro 5 days" currentPoints={1} maxPoints={5} />
            <ChallangeProgressBar label="Recycle for 3 days" currentPoints={2} maxPoints={3} />
             {/* Implementerar navbar */}
             <BottomNavBar active="Profile" /> 
        </ScrollView>  
    );
}



