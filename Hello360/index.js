import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-360';

export default class Hello360 extends React.Component {
  render() {
    let pic = {
      uri: './static_assets/zorro.png'
    };
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to Zorro's Beach!
          </Text>
        </View>
        <View style={styles.imageBox}>
          <Image source={pic} style={{ width: 250, height: 300 }} />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 10,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  imageBox: {
    padding: 10,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('Hello360', () => Hello360);
