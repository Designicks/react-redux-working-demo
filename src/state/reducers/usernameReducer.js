const setUsernameAction = (state="", action) => {
    if(action.type == "setusername"){
        return action.payload;
    }
    // else{
    //     return action.payload;
    //     // return state;
    // }
}
export default setUsernameAction;