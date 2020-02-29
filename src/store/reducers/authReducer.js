const initState = { authError: null };
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("Login Error");
      return { ...state, authError: "login failed" };

    case "LOGIN_SUCCESS":
      console.log("Login Success");
      return { ...state, authError: null };

    case "LOGOUT_SUCCESS":
      console.log("signout success ");
      return state;

    case "SIGNUP_SUCCESS":
      console.log("signup success ");
      return { ...state, authError: null };

    case "SIGNUP_ERROR":
      console.log("signup error ");
      console.log(action.error);
      return { ...state, authError: action.error.message };

    default:
      return state;
  }
};
export default authReducer;
