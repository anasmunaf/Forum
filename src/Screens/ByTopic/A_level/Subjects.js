import React from 'react';
import NavigationConstants from '../../../constants/NavigationConstants';
import {subjects} from '../../../constants/A_level';
import SubjectsScrollView from '../../../components/SubjectsScrollView';

const Subjects = (props) => {
  return (
    <SubjectsScrollView
      label={"A' level"}
      subjects={subjects}
      navigationName={NavigationConstants.A_LEVEL.TOPIC_FILTER}
      {...props}
    />
  );
};

export default Subjects;
