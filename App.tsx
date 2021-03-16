import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  BackHandler,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.flex1}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>r04, L3G. npm, android upd, TS.</Text>
        <Text style={styles.sectionDescription}>
          Edit <Text style={styles.highlight}>App.tsx</Text> to change this
          screen and then come back to see your edits.
        </Text>
        <Button title="Exit" onPress={BackHandler.exitApp} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
    backgroundColor: 'cyan',
  },
  sectionContainer: {
    marginTop: 26,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'blue',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
    paddingBottom: 20,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
