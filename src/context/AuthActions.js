export const LoginStart = (userCredential)=>({
    typy:"LOGIN_START"
});

export const LoginSuccess = (user)=>({
    typy:"LOGIN_SUCCESS",
    payload:user
});

export const LoginFailure = (error)=>({
    typy:"LOGIN_FAILURE",
    payload:error
});

export const follow = (userId)=>({
    type:"FOLLOW",
    payload:userId
})

export const unFollow = (userId)=>({
    type:"UNFOLLOW",
    payload:userId
})

export const updateUser = (user)=>({
    type:"UPDATE_USER",
    payload: user
})