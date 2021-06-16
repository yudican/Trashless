import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Divider} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.top}>
          <Ionicons
            name="arrow-back-circle-outline"
            color="rgb(132, 214, 50)"
            size={40}
            style={{marginTop: 4, paddingLeft: 10}}
          />
          <Text style={styles.text}>21.050</Text>
          <TouchableOpacity style={{marginLeft: 100, paddingLeft: 10}}>
            <Text style={styles.text}>Check</Text>
          </TouchableOpacity>
        </View>
        <View></View>
        <View style={styles.menu}>
          <TouchableOpacity
            style={styles.main}
            onPress={() => navigation.navigate('QuickPickupScreen')}>
            <Ionicons name="bus-sharp" color="rgb(94, 177, 11)" size={35} />
            <Text style={styles.textcolor}>Quick</Text>
            <Text style={styles.textcolor}>Pick-Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.main}>
            <Ionicons
              name="calendar-sharp"
              color="rgb(218, 175, 21)"
              size={35}
            />
            <Text style={styles.textcolor}>My</Text>
            <Text style={styles.textcolor}>Schedule</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.main}>
            <Ionicons name="leaf-sharp" color="rgb(68, 111, 26)" size={35} />
            <Text style={{marginTop: 10, color: 'rgba(28, 38, 22,0.6)'}}>
              Recycle
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.main}>
            <Ionicons name="trash-sharp" color="rgb(233, 164, 16)" size={35} />
            <Text style={styles.textcolor}>Dumpster</Text>
            <Text style={styles.textcolor}>Rental</Text>
          </TouchableOpacity>
        </View>
        <Divider />
        <View style={styles.deal}>
          <Text style={styles.title}>Big Deal</Text>
          <TouchableOpacity style={{alignItems: 'center'}}>
            <Image
              source={require('../Images/Forest.jpg')}
              style={{width: 330, height: 200, borderRadius: 30}}
            />
            <Text style={{fontWeight: 'bold', marginTop: 5}}>
              Forest Day 30% off
            </Text>
            <Text style={{color: 'lightgrey'}}>Click for details</Text>
          </TouchableOpacity>
        </View>
        <Divider />
        <View style={styles.deal}>
          <Text style={styles.title}>Discover Today</Text>
        </View>
        <View style={styles.menu}>
          <TouchableOpacity>
            <Image
              source={require('../Images/Recycle.jpg')}
              style={{width: 150, height: 150, borderRadius: 15}}
            />
            <Text style={{fontWeight: 'bold', marginTop: 5}}>
              Recycle Donation
            </Text>
            <Text style={{color: 'grey'}}>Greenie needs your help!</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: 15}}>
            <Image
              source={require('../Images/Water.jpg')}
              style={{width: 150, height: 150, borderRadius: 15}}
            />
            <Text style={{fontWeight: 'bold', marginTop: 5}}>
              Water day is coming!
            </Text>
            <Text style={{color: 'grey'}}>Learn how to save water</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menu}>
          <TouchableOpacity style={{width: 150}}>
            <Image
              source={require('../Images/Book.jpg')}
              style={{width: 150, height: 150, borderRadius: 15}}
            />
            <Text style={{fontWeight: 'bold', marginTop: 5}}>
              Have you read this?
            </Text>
            <Text style={{color: 'grey'}}>
              Interesting take on healthy environment
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: 15, width: 150}}>
            <Image
              source={require('../Images/Emma.jpg')}
              style={{width: 150, height: 150, borderRadius: 15}}
            />
            <Text style={{fontWeight: 'bold', marginTop: 5}}>
              A day with Emma
            </Text>
            <Text style={{color: 'grey'}}>
              Learn how to host go green event
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  top: {
    backgroundColor: 'white',
    borderRadius: 20,
    flex: 1,
    shadowOffset: {width: 0, height: 2},
    shadowColor: 'grey',
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 5,
    height: 50,
    margin: 20,
    flexDirection: 'row',
  },
  menu: {
    marginLeft: 12,
    marginRight: 10,
    padding: 10,
    flexDirection: 'row',
  },
  deal: {
    margin: 10,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 20,
    color: 'rgb(50, 119, 17)',
  },
  main: {
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,
  },
  text: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 10,
    color: 'rgba(28, 38, 22,0.6)',
  },
  textcolor: {
    color: 'rgba(28, 38, 22,0.6)',
  },
  inputSearchContainer: {
    overflow: 'hidden',
    marginHorizontal: 5,
    marginTop: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderRadius: 5,
  },
  inputSearch: {
    backgroundColor: '#fff',
    width: '100%',
    paddingLeft: 5,
    height: 40,
  },
});
export default HomeScreen;
