//API Request
const endPoint = `${baseURL}/apps/${appId}/books`;
const get = async () => {
  let result = "";
  await fetch(endPoint)
    .then((response) => response.json())
    .then((data) => {
      result = data;
    });
  return result;
};

//Action Creators
export const showGreeting = (payload) => ({
  type: SHOW_GREETING,
  payload,
});

//Initial state
const initialState = {
    greeting: ""
};

//middleware
const getRandomGreeting = () => (dispatch) => {
  get()
    .then((data) => dispatch(showGreeting(data)));
};

//reduser
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_GREETING:
      return state;
    default:
      return state;
  }
};

export {
  reducer as default,
  getRandomGreeting
};