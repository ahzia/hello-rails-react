//API Request
const endPoint = 'v1/greetings.json'; // Need to work on this
const SHOW_GREETING = 'SHOW_GREETING'; 
const get = async () => {
  let result = "";
  await fetch(endPoint)
    .then((response) => response.json())
    .then((data) => {
      result = data;
    });
  console.log(result);
  return result;
};

//Action Creators
export const showGreeting = (payload) => ({
  type: SHOW_GREETING,
  payload,
});

//Initial state
const initialState = {
    greeting: {
      message: "loading"
    }
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
      return action.payload;
    default:
      return state;
  }
};

export {
  reducer as default,
  getRandomGreeting
};