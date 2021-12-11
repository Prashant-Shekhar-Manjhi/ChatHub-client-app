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