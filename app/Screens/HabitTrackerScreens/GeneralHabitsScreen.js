import HabitScreenLayout from '../../components/HabitScreenLayout';

export default function GeneralHabitsScreen() {
  return (
    <HabitScreenLayout 
      questionText="What else did you do today?" 
      nextScreen='Home'
      nextButtonText='Good job!'
    />
  );
}