const setUsernameAction = (state="", action) => {
    if(action.type == "setusername"){
        return action.payload;
    }
    else{
        return state;
    }
}
export default setUsernameAction;