import FourOptions from '../../components/FourOptions';
import HabitScreenLayout from '../../components/HabitScreenLayout';
import { useContext } from 'react';
import { PointsContext } from '../../context/PointsContext';


export default function FoodScreen({ navigation }) {
  const { points, setPoints} = useContext(PointsContext);

  const handleOptionPress = (optionId) => {
    let pointsToAdd = 0;

    if (optionId === 1) { //kyckling
      pointsToAdd = 2;
    } else if (optionId === 2) { //nöt
      pointsToAdd = 0;
    } else if (optionId === 3) {//fisk
      pointsToAdd = 1;
    } else if (optionId === 4) { //veggo
      pointsToAdd = 5;
    }

    const newPoints = [...points];
    newPoints[2] += pointsToAdd; //food är på index 2 i arrayen
    setPoints(newPoints);

    navigation.navigate('GeneralHabits');
  };

  const options = [
    {id:1, image: require('../../assets/images/foodImages/chickenImage.png')},
    {id:2, image: require('../../assets/images/foodImages/cowImage.png')},
    {id:3, image: require('../../assets/images/foodImages/fishImage.png')},
    {id:4, image: require('../../assets/images/foodImages/carrotImage.png')},
];
  return (
    <HabitScreenLayout 
      questionText="What did you eat today?" 
      nextScreen='GeneralHabits'
      nextButtonText='Next'
      content={<FourOptions options={options} onOptionPress={handleOptionPress} />}
    />
  );
}