import axios from 'axios';

const GET_ALL_USERS = 'GET_ALL_USERS';

const fetchAllUsers = (userList) => ({
  type: GET_ALL_USERS,
  userList,
});

export const fetchAllUsersThunk = () => {
  async (dispatch) => {
    try {
      const { data } = await axios.get('/api/users/');
      dispatch(fetchAllUsers(data));
    } catch (error) {
      console.log('There was an error retrieving all users in your thunk');
      console.error(error);
    }
  };
};

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return action.userList;
    default:
      return state;
  }
};

export default usersReducer;
