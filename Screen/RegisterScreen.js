import React  from 'react';
import {View, Text, Button, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity} from 'react-native';

const RegisterScreen =(props)=> {
    return (
    <View style={styles.mainBody}>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('./Images/aboutreact.png')}
                style={{
                  width: '50%',
                  height: 100,
                  resizeMode: 'contain',
                  margin: 5,
                }}
              />
              <Text style={{fontFamily:'arial', fontSize:16, textAlign:'center', color:'darkgreen',fontWeight:'bold', marginBottom:20}}>TrashLess</Text>
            </View>
            <Text>
            </Text>
            <Text style={{fontFamily:'arial', fontSize:16, textAlign:'center', color:'darkgreen',fontWeight:'bold', marginBottom:20}}>Mendaftar akun</Text>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                returnKeyType="go"
                placeholder="Masukkan Nama Anda" 
                onSubmitEditing={()=> this.inputEmail.focus()}
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                returnKeyType="next"
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                returnKeyType="go"
                placeholder="Masukkan Email Anda" 
                onSubmitEditing={()=> this.inputPassword.focus()}
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                returnKeyType="next"
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                returnKeyType="go"
                placeholder="Masukkan Password Anda"
                onSubmitEditing={()=> this.inputAlamat.focus()}
                placeholderTextColor="#8b9cb5"
                secureTextEntry
                returnKeyType="next"
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                returnKeyType="go"
                placeholder="Masukkan Alamat Anda"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                returnKeyType="next"
              />
            </View>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => props.navigation.navigate('LoginScreen')}>
              <Text style={styles.buttonTextStyle}>REGISTER</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  registerTextStyle: {
    color: 'darkgreen',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});

export default RegisterScreen