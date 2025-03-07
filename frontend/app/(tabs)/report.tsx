import { Text, View, StyleSheet } from 'react-native';

export default function Report() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Report</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#Cyan',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});

