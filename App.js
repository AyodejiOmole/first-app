// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, StatusBar } from 'react-native';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content"/>
      {/* <Login/> */}
      <SignUp/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: "20px",
    paddingVertical: "10px",
  },
});
