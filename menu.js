import React from 'react';
import { StyleSheet, Image, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import HomeScreen from './homeScreen';
import GalleryScreen from './galleryScreen';
import RegistrarionScreen from './registrationScreen';

const homeName = 'Головна';
const galleryName = 'Фотогалерея';
const regName = 'Профіль';

const TopTab = createMaterialTopTabNavigator();

export default function Menu() {
  return (
    <NavigationContainer>
      <TopTab.Navigator
        initialRouteName={homeName}
        screenOptions={{
          animationEnabled: false,
          tabBarActiveTintColor: '#0076ff',
          tabBarInactiveTintColor: '#cdcdcdc',
          tabBarLabelStyle: { fontSize: 10 },
          tabBarStyle: { backgroundColor: '#f1f1f1' },
          tabBarScrollEnabled: false,
          swipeEnabled: false,
          tabBarShowIcon: true,
          tabBarIndicatorStyle: {
            height: 0,
          },
        }}>
        <TopTab.Screen
          name={homeName}
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon
                focused={focused}
                sourceActive={require('./icons/home-active.png')}
                sourceInactive={require('./icons/home.png')}
              />
            ),
          }}
        />

        <TopTab.Screen
          name={galleryName}
          component={GalleryScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon
                focused={focused}
                sourceActive={require('./icons/image-active.png')}
                sourceInactive={require('./icons/image.png')}
              />
            ),
          }}
        />

        <TopTab.Screen
          name={regName}
          component={RegistrarionScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon
                focused={focused}
                sourceActive={require('./icons/user-active.png')}
                sourceInactive={require('./icons/user.png')}
              />
            ),
          }}
        />
      </TopTab.Navigator>
    </NavigationContainer>
  );
}

const TabIcon = ({ focused, sourceActive, sourceInactive }) => {
  const scaleValue = new Animated.Value(focused ? 1.1 : 1);

  Animated.spring(scaleValue, {
    toValue: focused ? 1.1 : 1,
    friction: 3,
    tension: 40,
    useNativeDriver: true,
  }).start();

  return (
    <Animated.Image
      source={focused ? sourceActive : sourceInactive}
      style={[
        styles.tabIcon,
        {
          transform: [{ scale: scaleValue }],
          opacity: focused ? 1 : 0.7,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  tabIcon: {
    width: 25,
    height: 25,
  },
});
