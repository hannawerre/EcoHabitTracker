import HabitScreenLayout from '../../components/HabitScreenLayout';

export default function ShoppingScreen() {
  return (
    <HabitScreenLayout 
      questionText="Did you buy something today?" 
      nextScreen='Food'
      nextButtonText='Next'
    />
  );
}