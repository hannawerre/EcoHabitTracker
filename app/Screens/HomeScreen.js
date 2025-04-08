import { Text, View, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import mainStyles from '../MainStyle';

export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <View style={mainStyles.container}>
        <Text> HEJ EMMA </Text>
        <Button
          title="Press me"
          color="#f194ff"
          onPress={() => {navigation.navigate('Transport'); 
          }}
        />
        </View>
    );
}

