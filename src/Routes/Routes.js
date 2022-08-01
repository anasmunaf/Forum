import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabRoute from './TabRoute';
import NavigationConstants from '../constants/NavigationConstants';
import OLevelPaperCategoryTab from './OLevelPaperCategoryTab';
import YearlyPdf from '../components/YearlyPdf';
import {Subjects as OLevelSubjects} from '../Screens/ByAnnual/O_level';
import {Subjects as ALevelSubjects} from '../Screens/ByAnnual/A_level';
import ALevelPaperCategoryTab from './ALevelPaperCategoryTab';
import {
  Subjects as OLevelSubjective,
  TopicFilter,
} from '../Screens/ByTopic/O_level';
import CustomPapers from '../components/CustomPapers';
import TopicalPaper from '../Screens/ByTopic/O_level/TopicalPaper';
const Stack = createStackNavigator();

const Routes = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
        }}>
        <Stack.Screen
          options={{headerShown: false}}
          name={NavigationConstants.TAB}
          component={TabRoute}
        />
        <Stack.Screen
          name={NavigationConstants.A_LEVEL.SUBJECT}
          component={ALevelSubjects}
          options={{
            title: ``,
          }}
        />
        <Stack.Screen
          name={NavigationConstants.O_LEVEL.SUBJECT}
          component={OLevelSubjects}
          options={{
            title: ``,
          }}
        />
        <Stack.Screen
          name={NavigationConstants.O_LEVEL.YEARLY_TAB}
          component={OLevelPaperCategoryTab}
          options={{
            title: ``,
          }}
        />
        <Stack.Screen
          name={NavigationConstants.A_LEVEL.YEARLY_TAB}
          component={ALevelPaperCategoryTab}
          options={{
            title: ``,
          }}
        />
        <Stack.Screen
          name={NavigationConstants.YEARLY_PDF}
          component={YearlyPdf}
          options={{
            title: ``,
          }}
        />
        <Stack.Screen
          name={NavigationConstants.O_LEVEL.SUBJECT_TOPICAL}
          component={OLevelSubjective}
          options={{
            title: ``,
          }}
        />
        <Stack.Screen
          name={NavigationConstants.O_LEVEL.TOPIC_FILTER}
          children={(props) => <TopicFilter {...props} />}
          options={{
            title: ``,
          }}
        />
        <Stack.Screen
          name={NavigationConstants.CUSTOM_PAPERS}
          children={(props) => <TopicalPaper {...props} />}
          options={{
            title: ``,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
