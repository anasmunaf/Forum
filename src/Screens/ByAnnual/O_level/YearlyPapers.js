import React, {useEffect, useState} from 'react';
import {OYearlyData} from '../../../utils/Api/O-Yearly-Api';
import PaperScrollView from '../../../components/PaperScrollView';

const YearlyPapers = (props) => {
  const [papers, setPapers] = useState();
  useEffect(() => {
    OYearlyData().then((data) => {
      setPapers(
        data?.filter((item) => item.subject === props.route.params.subject),
      );
    });
  }, []);
  return <PaperScrollView papers={papers} {...props} />;
};

export default YearlyPapers;
