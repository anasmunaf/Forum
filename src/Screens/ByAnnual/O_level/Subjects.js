import React from 'react';
import SubjectsScrollView from '../../../components/SubjectsScrollView';
import NavigationConstants from '../../../constants/NavigationConstants';
import {subjects} from '../../../constants/O_level';

const Subjects = props => {
  return (
    <SubjectsScrollView
      label={"O' Level"}
      subjects={subjects}
      navigationName={NavigationConstants.O_LEVEL.YEARLY_TAB}
      {...props}
    />
  );
};

export default Subjects;
