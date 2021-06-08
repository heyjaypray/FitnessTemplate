import { createSelector } from 'reselect';
import _ from 'lodash';

const getCurrentUser = (state) => state?.user;
const getUserInfo = createSelector([getCurrentUser], (user) => {
  return user?.item;
});

const checkAuth = createSelector(
  [getCurrentUser, getUserInfo],
  ({ loading }, user) => {
    return {
      isExisted: !_.isEmpty(user),
      isChecking: false, //_.isNil(loading) || loading,
    };
  },
);

export { getUserInfo, checkAuth };
