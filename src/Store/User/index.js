import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper';
import Auth from './Auth';
import * as UserSelector from './Selector';
const sliceInitialState = {
  item: {},
};

export default buildSlice('user', [Auth], sliceInitialState).reducer;
export { UserSelector };
