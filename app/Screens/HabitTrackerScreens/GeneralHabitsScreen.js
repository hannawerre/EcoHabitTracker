import GeneralOptions from '../../components/GeneralOptions';
import HabitScreenLayout from '../../components/HabitScreenLayout';
import { useContext, useState } from 'react';
import { PointsContext } from '../../context/PointsContext';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function GeneralHabitsScreen({ navigation }) {
  const { points, setPoints } = useContext(PointsContext);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleToggleOption = (optionId) => {
    if (selectedOptions.includes(optionId)) {
      setSelectedOptions(selectedOptions.filter(id => id !== optionId));
    } else {
      setSelectedOptions([...selectedOptions, optionId]);
    }
  };

  const handleFinish = async () => {
  const pointsToAdd = selectedOptions.length;
  const newPoints = [...points];
  newPoints[3] += pointsToAdd;
  setPoints(newPoints);

  const today = new Date();
  const todayString = today.toISOString().split('T')[0]; // t.ex. "2025-04-19"
  const monthKey = `@EcoHabit_${todayString.substring(0,7)}`; // t.ex. "@EcoHabit_2025-04"

  const newDayData = {
    dayId: todayString,
    points: newPoints,
    formCompleted: true,
  };

  try {
    const existingMonthData = await AsyncStorage.getItem(monthKey);
    let monthData = { monthData: [] };

    if (existingMonthData) {
      monthData = JSON.parse(existingMonthData);
    }

    const dayIndex = monthData.monthData.findIndex(day => day.dayId === todayString);

    if (dayIndex !== -1) {
      monthData.monthData[dayIndex] = newDayData; // Uppdatera existerande dag
    } else {
      monthData.monthData.push(newDayData); // Lägg till ny dag
    }

    await AsyncStorage.setItem(monthKey, JSON.stringify(monthData));
    console.log('Day data saved successfully to month!');
  } catch (error) {
    console.error('Error saving month data:', error);
  }
    
  navigation.navigate('Home');
};

  const options = [
    {id:1, phrase: 'Turned off the lights'},
    {id:2, phrase: 'Brought a reusable bag'},
    {id:3, phrase: 'Recycled trash'},
    {id:4, phrase: 'Shopped organic'},
    {id:5, phrase: 'Recycled a can'}
];
  return (
    <HabitScreenLayout 
      questionText="What else did you do today?" 
      nextScreen='Home'
      nextButtonText='Good job!'
      content={
      <GeneralOptions 
      options={options}
      selectedOptions={selectedOptions} 
      onToggleOption={handleToggleOption} />}
      onNext={handleFinish}
    />
  );
}