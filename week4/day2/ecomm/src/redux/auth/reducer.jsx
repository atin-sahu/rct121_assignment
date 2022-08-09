import { SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNOUT_REQUEST, SIGNOUT_SUCCESS, SIGNOUT_FAILURE } from "./action";

const initialState = {
  auth: false,
  token: "",
};

export const reducer = (state = initialState, action) => {
  const {type,payload} = action;
  switch (type) {
    case SIGNIN_REQUEST:
      return { ...state,auth:false,token:"" };

    case SIGNIN_SUCCESS:
      return { ...state, auth:true, token:payload };

    case SIGNIN_FAILURE:
      return { ...state, auth:false,token:"" };

    case SIGNIN_REQUEST : return {...state, auth:true};
    case SIGNIN_SUCCESS : return {...state, auth:payload, token:""};
    case SIGNOUT_FAILURE : return {...state, auth:true};

    default:
      return state;
  }
};
