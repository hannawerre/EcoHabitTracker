import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import mainStyles from '../MainStyle';
import BottomNavBar from '../components/NavigationBar';

export default function CalendarScreen() {
    const navigation = useNavigation();

    return (
        <View style={mainStyles.container}>
            <Text> HEJ CalendarScreen </Text>
            {/* Implementerar navbar */}
            <BottomNavBar active="Calendar" /> 
        </View>
    );
   
}
