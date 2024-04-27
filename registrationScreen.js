import { Text, SafeAreaView, StyleSheet, TextInput,View } from 'react-native';

import { Button } from '@rneui/themed';

export default function RegistrarionScreen() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={{paddingLeft: 10, paddingRight: 10}}>
      <Text style={styles.text}>Реєстрація</Text>
      <Text style={styles.label}>Електронна пошта</Text>
      <TextInput style={styles.input} />
      <Text style={styles.label}>Пароль</Text>
      <TextInput style={styles.input} secureTextEntry={true} />
      <Text style={styles.label}>Пароль (ще раз)</Text>
      <TextInput style={styles.input} secureTextEntry={true} />
      <Text style={{ paddingBottom: 3, paddingTop: 20 }}>Прізвище</Text>
      <TextInput style={styles.input} />
      <Text style={styles.label}>Ім'я</Text>
      <TextInput style={styles.input} />
      <Button
        title="Зареєструватися"
        onPress={() => console.log('Зареєструватися')}
        titleStyle={{ fontSize: 13 }}
        buttonStyle={{
          backgroundColor: '#0076ff',
          borderRadius: 5,
          padding: 10
        }}
      />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10
  },
  text: {
    fontSize: 24,
    fontWeight: 500,
    paddingTop: 30,
    paddingBottom: 30,
    alignSelf: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    fontSize: 16,
    borderColor: '#ededed',
    marginBottom: 15,
  },
  label: {
    paddingBottom: 3,
  },
});
