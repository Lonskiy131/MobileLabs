import {
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  FlatList,
} from 'react-native';

export default function GalleryScreen() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <SafeAreaView style={{ backgroundColor: '#fff', height: '100%' }}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}>
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <View style={styles.image}></View>
              <View style={styles.image}></View>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  image: {
    width: '48%',
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    elevation: 5,
  },
  scrollView: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
