import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';

const CustomPapers = ({uri}) => {
  return (
    <>
      <FastImage
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
        source={{
          uri: uri,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </>
  );
};

export default CustomPapers;
