
import axios from "axios";

export const FETCH_SMURF_PASS = "FETCH_SMURF_PASS";
export const POST_SMURF_DATA = "POST_SMURF_DATA";
export const POST_SMURF_PASS = "POST_SMURF_PASS";


export const getSmurfs = () => (dispatch) => {
//   dispatch({ type: FETCH_SMURF_PASS});
  axios
    .get("http://localhost:3333/smurfs")
    .then((response) => {
      dispatch({ type: FETCH_SMURF_PASS, payload: response.data });
    })
};

export const postSmurf = (smurf) => (dispatch) => {
  dispatch({ type: POST_SMURF_PASS });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then((response) => {
      dispatch({ type: POST_SMURF_PASS, payload: response.data });
    })
   
};


const initialState = {
  smurfs: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
 
    case FETCH_SMURF_PASS:
      return {
        ...state,
        smurfs: action.payload
      };
    
    case POST_SMURF_DATA:
      return {
        ...state,
        smurfs: [...state.smurfs]
      };
    case POST_SMURF_PASS:
      return {
        ...state,
        smurfs: action.payload
      };
  
    default:
      return state;
  }
};

export default reducer;