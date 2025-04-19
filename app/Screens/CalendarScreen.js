import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import mainStyles from '../MainStyle';
import BottomNavBar from '../components/NavigationBar';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Calendar } from 'react-native-calendars';
import { StyleSheet } from 'react-native';

import leafGreen from '../assets/images/leafIcons/leafGreen.png';
import leafOrange from '../assets/images/leafIcons/leafOrange.png';
import leafRed from '../assets/images/leafIcons/leafRed.png';

export default function CalendarScreen() {
    const [markedDates, setMarkedDates] = useState({});

    useFocusEffect(
        React.useCallback(() => {
            const fetchMonthData = async () => {
                const today = new Date();
                const monthKey = `@EcoHabit_${today.toISOString().substring(0, 7)}`;

                try {
                    const data = await AsyncStorage.getItem(monthKey);
                    if (data) {
                        const parsed = JSON.parse(data);
                        setMarkedDates(formatMarkedDates(parsed.monthData));
                    }
                } catch(err) {
                    console.error('Error fetching calendar data:', err);
                }
            };

            fetchMonthData();
        }, [])
    );

    const formatMarkedDates = (monthData) => {
        const result = {};
        const todayString = new Date().toISOString().split('T')[0];

        monthData.forEach(day => {
            if (day.formCompleted) {
                const sum = day.points.reduce((a,b) => a + b, 0);
                let leafType = '';

                if (sum <= 5) leafType = 'red';
                else if (sum <= 10) leafType = 'orange';
                else leafType = 'green';

                result[day.dayId] = { leafType };


        
            }
        });

        if (!result[todayString]) {
            result[todayString] = {};
        }
        result[todayString].selected = true;
        result[todayString].selectedColor = '#6c5ce7';

        return result; 
    };

    return (
        <View style={mainStyles.container}>
            {/* HEADER */}
            <View style={styles.header}>
                <Text style={styles.headerText}>CALENDAR</Text>
            </View>

            {/* KALENDERN */}
            <Calendar 
              markingType={'custom'}
              markedDates={markedDates}
              dayComponent={({ date, state, marking }) => {
                let leafImage = null;
                if (marking?.leafType === 'green') {
                    leafImage = leafGreen;
                } else if (marking?.leafType === 'orange') {
                    leafImage = leafOrange;
                } else if (marking?.leafType === 'red') {
                    leafImage = leafRed;
                }
                const isToday = marking?.selected;

                return (
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: 40, height: 40 }}>
                      {/* Cirkeln för idag */}
                      {isToday && (
                        <View style={styles.todayCircle}>
                          <Text style={styles.todayText}>{date.day}</Text>
                        </View>
                      )}
        
                      {/* Lövet */}
                      {leafImage && (
                        <Image
                          source={leafImage}
                          style={styles.leafImage}
                          resizeMode="contain"
                        />
                      )}
        
                      {/* Vanlig dag */}
                      {!isToday && !leafImage && (
                        <Text style={[styles.dayText, { color: state === 'disabled' ? '#d9e1e8' : '#000000' }]}>
                          {date.day}
                        </Text>
                      )}
                    </View>
                  );
                }}
                style={styles.calendar}
                theme={{
                  arrowColor: '#6cdbaeff',
                  monthTextColor: '#6cdbaeff',
                  textMonthFontFamily: 'mainFont',
                }}
              />
        
              {/* Navigation */}
              <BottomNavBar active="Calendar" />
            </View>
          );
        }
        
        const styles = StyleSheet.create({
          header: {
            backgroundColor: '#6cdbaeff',
            paddingVertical: 15,
            paddingHorizontal: 20,
            borderRadius: 15,
            marginTop: 40,
            marginBottom: 20,
          },
          headerText: {
            color: 'white',
            fontSize: 25,
            fontFamily: 'mainFont',
            textAlign: 'center',
          },
          calendar: {
            width: '90%',
            alignSelf: 'center',
            borderRadius: 10,
            backgroundColor: 'white',
            padding: 10,
          },
          todayCircle: {
            position: 'absolute',
            width: 30,
            height: 30,
            backgroundColor: '#6c5ce7',
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
          },
          todayText: {
            color: 'white',
            fontSize: 8,
            fontFamily: 'mainFont',
          },
          leafImage: {
            width: 20,
            height: 20,
            position: 'absolute',
            bottom: 2,
            right: 5,
          },
          dayText: {
            fontFamily: 'mainFont',
            fontSize: 8,
          },
        });