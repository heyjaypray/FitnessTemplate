import api, { handleError } from '..';

const login = async (userId) => {
  if (!userId) {
    return handleError({ message: 'User ID is required' });
  }
  const response = await api.post(`users/${userId}`);
  return response.data;
};

export { login };
