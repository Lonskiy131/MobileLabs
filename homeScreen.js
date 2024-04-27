import React from 'react';
import { Text, SafeAreaView, StyleSheet, ScrollView, FlatList, TouchableOpacity, Animated } from 'react-native';
import News from './news.js';

export default function HomeScreen() {
  const items = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  const handlePressIn = (scaleValue) => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = (scaleValue) => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const scaleValue = new Animated.Value(1);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Новини</Text>
      <ScrollView showsHorizontalScrollIndicator={false} style={styles.scrollView}>
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => console.log('Item pressed')}
              onPressIn={() => handlePressIn(scaleValue)}
              onPressOut={() => handlePressOut(scaleValue)}
            >
              <Animated.View
                style={[styles.card, { transform: [{ scale: scaleValue }] }]}
              >
                <News />
              </Animated.View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: '500',
    paddingTop: 15,
    paddingBottom: 15,
    alignSelf: 'center',
  },
  scrollView: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
