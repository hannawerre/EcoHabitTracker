import FourOptions from '../../components/FourOptions';
import HabitScreenLayout from '../../components/HabitScreenLayout';

export default function FoodScreen() {
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
      content={<FourOptions options={options} />}
    />
  );
}