import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const Button = props => {
  const {
    onPress,
    color = '#fff',
    backgroundColor = '#192a56',
    label = 'Label',
    disabled = false,
    iconSize = 12,
    iconName,
    Icon,
  } = props;
  if (disabled) {
    return (
      <View
        style={{
          width: '100%',
          height: wp(12),
          backgroundColor: '#95afc0',
          paddingHorizontal: wp(2),
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: wp(2),
          marginTop: hp(3),
          flexDirection: 'row',
        }}>
        {Icon && <Icon name={iconName} size={iconSize} color={color} />}
        <Text style={{fontWeight: 'bold', color, paddingLeft: wp(3)}}>
          {label}
        </Text>
      </View>
    );
  }
  return (
    <TouchableHighlight underlayColor={'#fff'} onPress={onPress}>
      <View
        style={{
          width: '100%',
          height: wp(12),
          backgroundColor,
          paddingHorizontal: wp(2),
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: wp(2),
          marginTop: hp(3),
          flexDirection: 'row',
        }}>
        {Icon && <Icon name={iconName} size={iconSize} color={color} />}
        <Text style={{fontWeight: 'bold', color, paddingLeft: wp(3)}}>
          {label}
        </Text>
      </View>
    </TouchableHighlight>
  );
};
