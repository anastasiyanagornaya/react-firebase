const initialState = {
  users: [],
  isFormShow: false
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_USER_SUCCESS":
      return { users: action.payload, isFormShow: true };
    case "UPDATE_USER_SUCCESS":
      return (state = action.payload);
    default:
      return state;
  }
}
