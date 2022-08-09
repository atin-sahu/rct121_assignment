import axios from "axios";

export const SIGNIN_REQUEST = "SIGNIN_REQUEST";
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
export const SIGNIN_FAILURE = "SIGNIN_FAILURE";

const signInRequest = () => {
    return{
        type:SIGNIN_REQUEST,
    }
}

const signInSuccess = () => {
    return{
        type:SIGNIN_SUCCESS,
    }
}

const signInFailure = () => {
    return{
        type:SIGNIN_FAILURE,
    }
}

export const signIn = (payload) => (dispatch) => {
    dispatch(signInRequest());
    axios.post("/api/login", payload, {baseURL:"https://reqres.in"})
    .then((res)=>dispatch(signInSuccess(res.data)))
    .catch((err)=>dispatch(signInFailure(err.data)));
}

// for signout

export const SIGNOUT_REQUEST = "SIGNOUT_REQUEST";
export const SIGNOUT_SUCCESS = "SIGNOUT_SUCCESS";
export const SIGNOUT_FAILURE = "SIGNOUT_FAILURE";

const signOutRequest = () => {
    return{
        type:SIGNOUT_REQUEST,
    }
}

const signOutSuccess = () => {
    return{
        type:SIGNOUT_SUCCESS,
    }
}

const signOutFailure = () => {
    return{
        type:SIGNOUT_FAILURE,
    }
}

export const signOut = (payload) => (dispatch) => {
    // dispatch(signOutRequest());
    // axios.get("/api/login",payload, {baseURL:"https://reqres.in"})
    // .then((res)=>dispatch(signOutSuccess(res.data)))
    // .catch((res)=>dispatch(signOutFailure(res.data)));
    dispatch(signOutSuccess(payload))
}