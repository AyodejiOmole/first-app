import { StatusBar } from 'expo-status-bar';
import { Linking, StyleSheet, Text, View, Button } from 'react-native';
import Login from './pages/Login';

export default function App() {
  return (
    <View style={styles.container}>
      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: "20px",
    paddingVertical: "20px",
  },

  mainText: {
    fontWeight: "800",
    fontSize: "30px"
  },

  detailView: {
    width: "100%",
    marginVertical: "15px"
  },

  subText: {
    fontWeight: "300",
    opacity: "0.7",
    display: "flex",
    justifyContent: "flex-start"
  },

  button: {
    width: "100%",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px",
    borderRadius: "10px",
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#212121",
    cursor: "pointer"
  },

  input: {
    borderWidth: "1px",
    borderRadius: "5px",
    width: "100%",
    height: "50px",
    marginVertical: "10px"
  }
});
