import {View, Image, StyleSheet,Pressable} from 'react-native';



export default function FourOptions({options, onOptionPress}) { 
    return (
        <View style={styles.gridContainer}>
          {options.map((option) => (
            <Pressable 
              key={option.id} 
              style={styles.option}
              onPress={()=> onOptionPress(option.id)}>
              <Image source={option.image} style={styles.icon} />
            </Pressable>
          ))}
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        margin: 10,
        marginTop: '18%'
      },
      option: {
        width: 165, 
        height: 165, 
        margin: 10,
        backgroundColor: '#6cdbaeff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      icon: {
        width: 120,
        height: 130,
        resizeMode: 'contain',
      },
    });

