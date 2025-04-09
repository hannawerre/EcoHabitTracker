import HabitScreenLayout from '../../components/HabitScreenLayout';
import FourOptions from '../../components/FourOptions';


export default function TransportScreen() {
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
      content={<FourOptions options={options}/>}
    />
  );
}