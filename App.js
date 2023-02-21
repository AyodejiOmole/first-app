import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on the app.</Text>
      <View style={styles.button}>
        Click on me
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: "20px",
    paddingVertical: "20px"
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
  }
});
