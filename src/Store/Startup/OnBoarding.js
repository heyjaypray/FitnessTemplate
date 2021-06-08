import {
  buildAsyncActions,
  buildAsyncReducers,
} from '@thecodingmachine/redux-toolkit-wrapper';

export default {
  initialState: { displayOnBoarding: false },
  action: buildAsyncActions(
    'startup/onboarding',
    async (isShow, { dispatch }) => isShow,
  ),
  reducers: buildAsyncReducers({
    itemKey: 'displayOnBoarding',
  }),
};
