import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper';
import InitStartup from './Init';
import OnBoardingStartup from './OnBoarding';

export default buildSlice('startup', [InitStartup, OnBoardingStartup]).reducer;
