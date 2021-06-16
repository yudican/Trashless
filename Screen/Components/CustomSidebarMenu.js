import React from 'react';
import {View, Text, Alert, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';


const CustomSidebarMenu = (props) => {
  return (
    <View style={stylesSidebar.sideMenuContainer}>
      <View style={stylesSidebar.profileHeader}>
        <View style={stylesSidebar.profileHeaderPicCircle}>
        <Image source={require('../Images/Margarett.jpg')} style={{width:70, height:70, borderRadius: 90}}/>
        </View>
        <View style={{flexDirection:'column', marginTop:10, marginLeft:5}}>
        <Text style={stylesSidebar.profileHeaderText}>Margarett Halim</Text>
        <TouchableOpacity style={stylesSidebar.profileHeaderEdit}>
          <Text style={{color:'white'}}>Edit Profile</Text>
        </TouchableOpacity>
        </View>
      </View>
      <View style={stylesSidebar.profileHeaderLine} />

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label={({color}) => <Text style={{color: 'white'}}>Log Out</Text>}
          onPress={() => {
            props.navigation.toggleDrawer();
            Alert.alert(
              'Log Out',
              'Are you sure? If you want to exit the application?',
              [
                {
                  text: 'Cancel',
                  onPress: () => {
                    return null;
                  },
                },
                {
                  text: 'Confirm',
                  onPress: () => {
                    return null;
                  },
                },
              ],
              {cancelable: false},
            );
          }}
        />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomSidebarMenu;

const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#rgb(25,184,25)',
    paddingTop: 40,
    color: 'darkgreen',
  },
  profileHeader: {
    flexDirection: 'row',
    backgroundColor: '#rgb(25,184,25)',
    padding: 15,
    textAlign: 'center',
    marginLeft : 5
  },
  profileHeaderPicCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: 'darkgreen',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeaderText: {
    color: 'white',
    paddingHorizontal: 10,
    fontWeight: 'bold',
    alignSelf : 'center',
    fontSize : 16
  },
  profileHeaderEdit : {
    color: 'white',
    paddingHorizontal: 10
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: '#e2e2e2',
    marginTop: 15,
  },
});
