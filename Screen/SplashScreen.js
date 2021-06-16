import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, StyleSheet, Image} from 'react-native';


const SplashScreen = ({navigation}) => {
  useEffect(() => {
        setTimeout( () => {
            navigation.replace('LoginScreen');
        }, 3000)
    }, [navigation]);
    

  return (
    <View style={styles.container}>
      <Image
        source={require('./Images/aboutreact.png')}
        style={{width: '90%', resizeMode: 'contain', margin: 30}}
      />
      <ActivityIndicator
        color="	darkgreen"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
    }
});
