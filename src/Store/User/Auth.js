import {
  buildAsyncState,
  buildAsyncReducers,
  buildAsyncActions,
} from '@thecodingmachine/redux-toolkit-wrapper';
import { login } from '../../Services/User';

export default {
  initialState: buildAsyncState(),
  action: buildAsyncActions('user/login', login),
  reducers: buildAsyncReducers({
    errorKey: 'error',
    loadingKey: 'loading',
  }),
};
