import Geolocation from '@react-native-community/geolocation';
import MapboxGL from '@react-native-mapbox-gl/maps';
import React, {Component} from 'react';
import {ScrollView, Text} from 'react-native';
import {StyleSheet, TouchableHighlight, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Button} from './Components/Atoms/Button';
MapboxGL.setAccessToken(
  'pk.eyJ1IjoieXVkaWNhbmRyYTEiLCJhIjoiY2tuemd6dXhoMDR1ZDJ2cGMzbGk0dHpoaSJ9.Y5TZzkmHQd4Q2hWpDllpsQ',
);
class QuickPickupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: -6.2143226894621,
      longitude: 106.84309370766,
    };
  }

  componentDidMount() {
    this.getCurrentPosition();
  }

  getCurrentPosition = () => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
    };
    Geolocation.getCurrentPosition(this.onSuccess, this.onError, options);
  };

  onSuccess = position => {
    console.log(position);
    let data = {
      geometry: {
        coordinates: [position.coords.longitude, position.coords.latitude],
      },
    };
    this.onPointDrag(data);
  };

  onError = error => {
    console.log(error);
  };

  onPointDrag = data => {
    console.log(data);
    this.setState({
      latitude: data.geometry.coordinates[1],
      longitude: data.geometry.coordinates[0],
    });
  };

  render() {
    // console.log(this.props.curentLocation);
    const {latitude, longitude} = this.state;
    console.log(latitude, longitude);
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View
          style={{
            flex: 1,
            width: '100%',
            height: hp(45),
            zIndex: -1,
          }}>
          <View
            style={{
              flex: 1,
              height: hp(45),
            }}>
            <MapboxGL.MapView
              style={{borderRadius: wp(5), height: hp(45)}}
              zoomEnabled
              compassEnabled
              styleURL={MapboxGL.StyleURL.Street}
              localizeLabels>
              <MapboxGL.Camera
                zoomLevel={15}
                animationMode={'moveTo'}
                // animationDuration={1100}
                centerCoordinate={[longitude, latitude]}
                // followUserLocation={true}
                followUserMode={MapboxGL.UserTrackingModes.Follow}
                focusable
                // centerCoordinate={coordinates}
              />

              <MapboxGL.PointAnnotation
                key="key1"
                id="id1"
                title="Test"
                coordinate={[longitude, latitude]}></MapboxGL.PointAnnotation>
            </MapboxGL.MapView>
          </View>
        </View>
        <View style={{flex: 1}}>
          <View style={style.orderCard}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <FontAwesome5 name="truck" size={hp(4)} color={'#000'} />
              <View style={{paddingLeft: wp(2)}}>
                <Text style={{color: '#000', fontSize: hp(1.9)}}>
                  Your trash collector is on their wey to your place
                </Text>
                <Text style={{color: '#000', fontSize: hp(1.8)}}>
                  Arrival Estimation: 09:24
                </Text>
              </View>
            </View>
          </View>

          <ScrollView>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: wp(3),
                  marginTop: hp(2),
                  borderBottomColor: '#7f8c8d',
                  borderBottomWidth: 0.5,
                  paddingBottom: hp(2),
                }}>
                <FontAwesome5 name="user" size={hp(4)} color={'#27ae60'} />
                <View
                  style={{
                    flex: 1,
                    paddingLeft: wp(2),
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text style={{color: '#27ae60', fontSize: hp(1.9)}}>
                      ANDRE SALIM
                    </Text>
                    <Text style={{color: '#27ae60', fontSize: hp(1.8)}}>
                      BK 808 PO
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Fontisto name="phone" size={hp(2.5)} color={'#27ae60'} />
                    <MaterialIcons
                      name="message"
                      size={hp(3)}
                      color={'#27ae60'}
                      style={{paddingLeft: wp(4)}}
                    />
                  </View>
                </View>
              </View>

              <View
                style={{
                  paddingHorizontal: wp(3),
                }}>
                <Button
                  label="DETAILS"
                  disabled={false}
                  backgroundColor="#27ae60"
                />
              </View>

              <View
                style={{
                  paddingHorizontal: wp(3),
                  marginTop: hp(2),
                  borderBottomColor: '#7f8c8d',
                  borderBottomWidth: 0.5,
                  paddingBottom: hp(2),
                }}>
                <ItemList label={'MY TRASH'} />
                <ItemList label={'MY ADDRESS'} />
                <ItemList label={'VEHICLE TYPE'} />
              </View>

              <View
                style={{
                  paddingHorizontal: wp(3),
                  marginTop: hp(2),
                }}>
                <PriceItem label={'Trash'} price={356100} />
                <PriceItem label={'Vehicle'} price={30000} />
                <PriceItem label={'Service'} price={16000} />
                <PriceItem label={'Total'} price={402100} />
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={style.footer}>
          <Button
            label="BOOK"
            disabled={false}
            backgroundColor="#27ae60"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      </View>
    );
  }
}

const ItemList = ({label}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: hp(2),
      }}>
      <AntDesign name="pluscircleo" size={hp(2.2)} color={'#27ae60'} />
      <Text
        style={{
          color: '#27ae60',
          fontSize: hp(2.2),
          paddingLeft: wp(3),
        }}>
        {label}
      </Text>
    </View>
  );
};

const PriceItem = ({label, price}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: hp(2),
      }}>
      <Text style={{fontSize: hp(2)}}>{label}</Text>
      <Text style={{fontSize: hp(2)}}>Rp. {price}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  mapFocus: {
    position: 'absolute',
    top: hp(2),
    right: wp(3),
    zIndex: 9999,
    backgroundColor: '#fff',
    borderRadius: hp(1),
  },
  footer: {
    width: wp(100),
    paddingHorizontal: wp(2.6),
    backgroundColor: '#fff',
    paddingBottom: hp(2),
  },
  orderCard: {
    backgroundColor: '#2ecc71',
    paddingHorizontal: wp(3),
    paddingVertical: hp(1),
  },
});

export default QuickPickupScreen;
