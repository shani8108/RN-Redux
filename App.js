import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Item } from './Item';
import { Provider } from 'react-redux';
import store from './redux';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <View style={styles.container}>
          <Text>Redux Sample!</Text>
          <StatusBar style="auto" />
          <Item></Item>
        </View>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
