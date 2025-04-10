import GeneralOptions from '../../components/GeneralOptions';
import HabitScreenLayout from '../../components/HabitScreenLayout';


export default function GeneralHabitsScreen() {
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
      content={<GeneralOptions options={options} />}
    />
  );
}