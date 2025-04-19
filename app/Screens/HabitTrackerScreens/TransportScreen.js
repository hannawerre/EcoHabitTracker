import HabitScreenLayout from '../../components/HabitScreenLayout';
import FourOptions from '../../components/FourOptions';
import { useContext } from 'react';
import { PointsContext } from '../../context/PointsContext'; 

export default function TransportScreen({ navigation }) {
  const { points, setPoints} = useContext(PointsContext);

  const handleOptionPress = (optionId) => { //här bestämmer vi poängen för vad varje val ger

    let pointsToAdd = 0;

    if (optionId === 1) { // buss elr tåg
      pointsToAdd = 3;
    } else if (optionId === 2) { // bil
      pointsToAdd = 0;
    } else if (optionId === 3) { // promenad
      pointsToAdd = 5;
    } else if (optionId === 4) { // cykel
      pointsToAdd = 4;
    }

    const newPoints = [...points];
    newPoints[0] += pointsToAdd; // Transport är index 0
    setPoints(newPoints);
  };




  const options = [
    {id:1, image: require('../../assets/images/transportImages/busTrainImage.png')},
    {id:2, image: require('../../assets/images/transportImages/carImage.png')},
    {id:3, image: require('../../assets/images/transportImages/walkingImage.png')},
    {id:4, image: require('../../assets/images/transportImages/bicycleImage.png')},
];
  return (
    <HabitScreenLayout 
      questionText="How did you travel today?" 
      nextScreen='Shopping'
      nextButtonText='Next'
      content={<FourOptions options={options} onOptionPress={handleOptionPress}/>}
    />
  );

}