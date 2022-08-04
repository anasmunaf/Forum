import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import CustomPapers from '../../../components/CustomPapers';
import {OTopicalData} from '../../../utils/Api/O-Topical-Api';

const TopicalPaper = () => {
  return (
    <>
      <ScrollView>
        <CustomPapers />
      </ScrollView>
    </>
  );
};

export default TopicalPaper;
