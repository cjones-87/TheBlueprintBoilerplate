import axios from 'axios';

const TOKEN = 'token';

const SET_AUTH = 'SET_AUTH';
const LOGOUT = {};

const setAuth = (auth) => ({
  type: SET_AUTH,
  auth,
});

export const me = () => async (dispatch) => {
  const token = localStorage.getItem(TOKEN);

  if (token) {
    const res = await axios.get('/api/users/me', {
      headers: { authorization: token },
    });
    return dispatch(setAuth(res.data));
  }
};

export const authenticate =
  (identifier, password, method) => async (dispatch) => {
    try {
      const res = await axios.post(`/auth/${method}`, {
        identifier,
        password,
      });
      localStorage.setItem(TOKEN, res.data.token);
      dispatch(me());
    } catch (error) {
      return dispatch(setAuth({ error }));
    }
  };

export const logout = () => {
  localStorage.removeItem(TOKEN);
  return {
    type: SET_AUTH,
    auth: LOGOUT,
  };
};

const authReducer = (
  state = {
    token: localStorage.getItem('token') || null,
    isAuthenticated: !!localStorage.getItem('token'),
  },
  action
) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        token: action.auth.token,
        isAuthenticated: true,
      };
    case LOGOUT:
      return {
        token: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default authReducer;
