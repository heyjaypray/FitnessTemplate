import DefaultTheme from '../Theme/DefaultTheme';
import {
  buildAsyncActions,
  buildAsyncReducers,
  buildAsyncState,
} from '@thecodingmachine/redux-toolkit-wrapper';

export default {
  initialState: buildAsyncState(),
  action: buildAsyncActions('startup/init', async (args, { dispatch }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await dispatch(DefaultTheme.action({ theme: 'default', darkMode: null }));
  }),
  reducers: buildAsyncReducers({ itemKey: null }),
};
