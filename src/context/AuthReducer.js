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
            const followedUser = {...state.user, followings:[...state.user.followings, action.payload]};
            localStorage.setItem("loggedInUser", JSON.stringify(followedUser));
            return {
                ...state,
                user: followedUser
            };
        case "UNFOLLOW":
            const unfollowedUser =  {
                ...state.user,
                followings: state.user.followings.filter((following)=>{
                    return (following !== action.payload);
                })
            };
            localStorage.setItem("loggedInUser", JSON.stringify(unfollowedUser));
            return {
                ...state,
                user: unfollowedUser
            };

        case "UPDATE_USER":
            const  updatedUser = {
                ...state.user,
                ...action.payload
            }
            localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
            return {
                ...state,
                user: updatedUser
            }
        default:
            return state;
    }
}

export default AuthReducer;