import HabitScreenLayout from '../../components/HabitScreenLayout';
import FourOptions from '../../components/FourOptions';

export default function GeneralHabitsScreen() {
  return (
    <HabitScreenLayout 
      questionText="What else did you do today?" 
      nextScreen='Home'
      nextButtonText='Good job!'
      content={<FourOptions />}
    />
  );
}