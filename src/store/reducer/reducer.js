const initialState = {
  user: { first_name: "name", last_name: "name" },
  isFormShow: true
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_USER_SUCCESS":
      return { user: action.payload, isFormShow: true };
    case "UPDATE_USER_SUCCESS":
      return (state = action.payload);
    default:
      return state;
  }
}
