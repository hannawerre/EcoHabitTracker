import React, { useEffect, useRef } from "react";
import { Text, View, StyleSheet, Animated } from "react-native";

export default function ChallangeProgressBar({ label, currentPoints, maxPoints }) {
    const progress = Math.min(currentPoints / maxPoints, 1);
    const animatedValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: progress,
            duration: 800, //hur snabb den är
            useNativeDriver: false,
        }).start();
    }, [progress]);
    const width = animatedValue.interpolate({ // interpolera värdet, hur mycket den ska fyllas
        inputRange: [0, 1],
        outputRange: ["0%", "100%"],
    });
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label} - {Math.round(progress * 100)}%</Text>
            <View style={styles.progressBar}>
                
                    <Animated.View 
                    style={[styles.progressFill, {width } ]}/>
                
            </View>
            <Text style={styles.points}>
                {currentPoints} / {maxPoints}
            </Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        width: "90%",
        alignSelf: "center",
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
    },
    progressBar: {
        height: 20,
        borderRadius: 10,
        backgroundColor: "#e0e0e0",
        overflow: "hidden",
        alignItems: "stretch",
    },
    progressFill: {
        height: "100%",
        
        backgroundColor: "#6cdbaeff",
        borderRadius: 10,
        
        position: "absolute",
    },
    points: {
        textAlign: "right",
        fontSize: 14,
        marginTop: 5,
    },
});