import { SectionList, Text, SafeAreaView, StyleSheet, View, Image } from 'react-native';
import Footer from './footer';
import Header from './header';
import Menu from './menu';

export default function App() {
  return (
    <SafeAreaView style={{height:'100%'}}>
      <Header/>
      <Menu/>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1
  }
});
