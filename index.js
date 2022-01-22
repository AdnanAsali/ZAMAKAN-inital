import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Environment,
  asset,

} from 'react-360';
import VideoModule from 'VideoModule';

export default class hello_vr extends React.Component {
  introVideo = VideoModule.createPlayer('introVideo')

  componentDidMount() {
    // this.introVideo = VideoModule.createPlayer('introVideo')
    this.introVideo.play({
      source: { url: asset(`dubai.mp4`).uri },
    });
    this.introVideo.setMuted({ muted: true });

    Environment.setBackgroundVideo('introVideo');
  }


  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to ZAMAKAN
          </Text>
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
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
    color: "white",
  },
});

AppRegistry.registerComponent('hello_vr', () => hello_vr);