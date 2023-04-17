

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const loginUser = (username, password) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const sql = `SELECT id, username FROM users WHERE username = ? AND password = ?`;
    const values = [username, password];
    connection.query(sql, values, (error, results) => {
      if (error) {
        dispatch(loginFailure(error.message));
      } else if (results.length === 0) {
        dispatch(loginFailure('Invalid username or password'));
      } else {
        const user = results[0];
        dispatch(loginSuccess(user));
      }
    });
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};
