import axios from 'axios';

const TOKEN = 'token';

const SET_AUTH = 'SET_AUTH';

const setAuth = (auth) => ({
  type: SET_AUTH,
  auth,
});

export const me = () => async (dispatch) => {
  const token = localStorage.getItem(TOKEN);

  if (token) {
    const res = await axios.get('/auth/me', {
      headers: { authorization: token },
    });
    return dispatch(setAuth(res.data));
  }
};

export const authenticate =
  (username, password, method) => async (dispatch) => {
    try {
      const res = await axios.post(`/auth/${method}`, { username, password });
      localStorage.setItem(TOKEN, res.data.token);
      dispatch(me());
    } catch (error) {
      console.log('Error in authenticate action creator');
      return dispatch(setAuth({ error }));
    }
  };

export const logout = () => {
  localStorage.removeItem(TOKEN);
  history.push('/login');
  return {
    type: SET_AUTH,
    auth: {},
  };
};

const authReducer = (
  state = { token: localStorage.getItem('token') || null },
  action
) => {
  switch (action.type) {
    case SET_AUTH:
      return { token: action.auth.token };
    default:
      return state;
  }
};

export default authReducer;
