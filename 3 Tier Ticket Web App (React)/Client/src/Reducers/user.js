import { AUTH } from "../constants";

const initialState = {
    userData : null
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case AUTH: 
            localStorage.setItem('user', JSON.stringify(action.data))
            return { ...state, userData: action.data.user, error: null };

        default:
            return state;
    }
}

export default userReducer