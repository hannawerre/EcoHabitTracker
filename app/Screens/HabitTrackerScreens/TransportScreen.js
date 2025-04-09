import HabitScreenLayout from '../../components/HabitScreenLayout';

export default function TransportScreen() {
  return (
    <HabitScreenLayout 
      questionText="How did you travel today?" 
      nextScreen='Shopping'
      nextButtonText='Next'
    />
  );
}