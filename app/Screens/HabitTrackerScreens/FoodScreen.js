import HabitScreenLayout from '../../components/HabitScreenLayout';

export default function FoodScreen() {
  return (
    <HabitScreenLayout 
      questionText="What did you eat today?" 
      nextScreen='GeneralHabits'
      nextButtonText='Next'
    />
  );
}