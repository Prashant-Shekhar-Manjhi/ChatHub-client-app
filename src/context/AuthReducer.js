const AuthReducer = (state,action)=>{
    switch(action.type){
        case "LOGIN_START":
            return {
                user: null,
                isFetching: true,
                error: false,
            };

        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                isFetching: false,
                error: false,
            };

        case "LOGIN_FAILURE":
            return {
                user: null,
                isFetching: false,
                error: action.payload,
            };

        case "FOLLOW":
            const updatedUser = {...state.user, followings:[...state.user.followings, action.payload]};
            localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
            return {
                ...state,
                user: updatedUser
            };
        case "UNFOLLOW":
            const _updatedUser =  {
                ...state.user,
                followings: state.user.followings.filter((following)=>{
                    return (following !== action.payload);
                })
            };
            localStorage.setItem("loggedInUser", JSON.stringify(_updatedUser));
            return {
                ...state,
                user: _updatedUser
            };
        default:
            return state
    }
}

export default AuthReducer;