import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';
import {Divider} from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons'
const SettingsScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{backgroundColor: 'white'}}>
               <View style={styles.top}>
                <Text style={{fontWeight: 'bold', fontSize: 30}}>Activity</Text>
                <TouchableOpacity style={{marginLeft:250, marginTop : -30, paddingBottom : 10}}>
                    <Text style={{fontSize : 20, color : 'rgb(50, 119, 17)'}}>History</Text>
                </TouchableOpacity>
                <Divider/>
               </View>
               
               <View style={styles.content}> 
                <Text style={styles.date}>Today, 17th April 2021</Text>
                <Divider style={{marginBottom: 10}}/>
               <TouchableOpacity style={styles.act}>
                <Ionicons name="bus-sharp" color="rgb(94, 177, 11)" size={35} style={styles.icon}/>
                    <View style={styles.isi}>
                        <Text style={styles.title}>Quick Pick-Up - Merdeka Sari (Toxic Waste)</Text>
                        <Text>Finished at 18 : 57</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.act}>
                <Ionicons name="trash-sharp" color="rgb(233, 164, 16)" size={35} style={styles.icon}/>
                    <View style={styles.isi}>
                        <Text style={styles.title}>Dumpster Rental - Container </Text>
                        <Text>Rentaled at : 13 : 02</Text>
                    </View>
                </TouchableOpacity>
               </View> 

               <View style={styles.content}>
               <Text style={styles.date}>Yesterday, 16th April 2021</Text>
                <Divider style={{marginBottom: 10}}/>
               <TouchableOpacity style={styles.act}>
               <Ionicons name="leaf-sharp" color="rgb(68, 111, 26)" size={35} style={styles.icon}/>
                    <View style={styles.isi}>
                        <Text style={styles.title}>Recycle - Plastic Wastes</Text>
                        <Text>Finished at : 10 : 31</Text>
                    </View>
                </TouchableOpacity>
               </View>
            </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
top : {
    flex : 1,
    elevation : 5,
    margin : 20
},
content : {
    marginLeft : 15,
    marginRight : 15,
    marginBottom : 10
},
date : {
    fontWeight : 'bold',
    fontSize : 18,
    margin : 10
},
title : {
    fontWeight : 'bold'   
},
act : {
    backgroundColor : 'white',
    borderRadius : 20,
    flex : 1,
    shadowOffset : {width:0, height:2},
    shadowColor : 'grey',
    shadowOpacity : 0.7,
    shadowRadius : 10,
    elevation : 5,
    height : 70,
    marginBottom : 10,
    flexDirection : 'row'
},
icon : {
    paddingLeft : 5,
    marginTop : 15
},
isi : {
    marginTop : 15,
    marginLeft : 5
}
})
export default SettingsScreen;
