import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      backgroundColor: '#fff2cf',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });