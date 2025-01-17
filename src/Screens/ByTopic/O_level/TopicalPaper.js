import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import CustomPapers from '../../../components/CustomPapers';
import {OTopicalData} from '../../../utils/Api/O-Topical-Api';

const TopicalPaper = () => {
  const [topicalData, setTopicalData] = useState([]);
  useEffect(() => {
    OTopicalData().then((data) => {
      setTopicalData(data);
    });
  }, []);
  console.log(topicalData);
  return (
    <>
      <ScrollView>
        {topicalData.map((item) => (
          <CustomPapers key={item._id} uri={item.question} />
        ))}
      </ScrollView>
    </>
  );
};

export default TopicalPaper;
