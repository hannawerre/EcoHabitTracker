import HabitScreenLayout from '../../components/HabitScreenLayout';
import ShoppingOptions from '../../components/ShoppingOptions';

export default function ShoppingScreen() {
  return (
    <HabitScreenLayout 
      questionText="Did you buy something today?" 
      nextScreen='Food'
      nextButtonText='Next'
      content={<ShoppingOptions />}
    />
  );
}