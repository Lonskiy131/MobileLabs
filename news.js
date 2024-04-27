import React, { useEffect, useRef } from 'react';
import { Text, SafeAreaView, StyleSheet, Image, View, Animated } from 'react-native';

export default function News() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }
    ).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <View style={styles.imageContainer}>
        <Image source={require('./icons/news.png')} style={styles.stretch}/>
      </View>
      <View style={{paddingLeft: 15}}>
        <Text style={styles.titleNews}>Заголовок новини</Text>
        <Text style={styles.dateNews}>Дата новини</Text>
        <Text style={styles.textNews}>Короткий текст новини</Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
  },
  titleNews:{
    fontSize: 16,
    fontWeight: '500',
  },
  dateNews:{
    fontSize: 11,
    color: '#cecece'
  },
  textNews:{
    fontSize: 12,
  },
  stretch: {
    width: 50,
    height: 50,
    resizeMode: 'center',
  },
  imageContainer:{
    backgroundColor: '#f9f9f9',
    paddingLeft: 10,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
  }
});
