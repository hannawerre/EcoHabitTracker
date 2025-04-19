import HabitScreenLayout from '../../components/HabitScreenLayout';
import ShoppingOptions from '../../components/ShoppingOptions';
import { useContext, useState } from 'react';
import { PointsContext } from '../../context/PointsContext'; 


export default function ShoppingScreen({ navigation }) {
  const { points, setPoints } = useContext(PointsContext);

  const [numberOfItems, setNumberOfItems] = useState(0);
  const [boughtSecondHand, setBoughtSecondHand] = useState(false);

  const handleNext = () => {
    let pointsToAdd =0;

    if (numberOfItems === 0) { //justera sen, la bara in preliminära värden
      pointsToAdd =5;
    } else if (numberOfItems <= 2) {
      pointsToAdd =3;
    } else {
      pointsToAdd = 1;
    }
    if (numberOfItems > 0 && boughtSecondHand) {
      pointsToAdd +=2;
    }

    const newPoints =[...points];
    newPoints[1] += pointsToAdd; 
    setPoints(newPoints);

    navigation.navigate('Food');
  
  };


  return (
    <HabitScreenLayout 
      questionText="Did you buy something today?" 
      nextScreen='Food'
      nextButtonText='Next'
      content={<ShoppingOptions 
        numberOfItems={numberOfItems}
        setNumberOfItems={setNumberOfItems}
        boughtSecondHand={boughtSecondHand}
        setBoughtSecondHand={setBoughtSecondHand}
        />}
        onNext={handleNext}
    />
  );
}