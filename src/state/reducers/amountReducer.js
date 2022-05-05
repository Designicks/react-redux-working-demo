export default function Main(){}
export const incDecAction = (state=0, action) => {
    if(action.type == "deposit"){
        return state + action.payload;
    }
    else if(action.type == "withdraw"){
        if(state <= 0 ){
            return state;
        }
        else{
            return state - action.payload;
        }
    }
    else{
        return state;
    }
}
export const setUsernameAction = (state="", action) => {
    if(action.type == "setusername"){
        return action.payload;
    }
    else{
        return state;
    }
}
