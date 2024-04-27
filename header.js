import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, StyleSheet, Image, Animated } from 'react-native';

export default function Header() {
  const [colorAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(colorAnimation, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: false,
        }),
        Animated.timing(colorAnimation, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, []);

  const colorInterpolate = colorAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['#FF5733', '#33FF8D'],
  });

  const animatedStyle = {
    color: colorInterpolate,
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('./icons/university-colored.png')} style={styles.stretch} />
      <Animated.Text style={[styles.text, animatedStyle]}>LonskiyReact</Animated.Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingBottom: 10,
    paddingRight: 10,
    paddingTop: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    width: '53%',
  },
  stretch: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
    marginLeft: 15,
  },
});
