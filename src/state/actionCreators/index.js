export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "deposit",
            payload: amount
        })
    }
}

export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "withdraw",
            payload: amount
        })
    }
}

//set Username
export const setUsername = (username) => {
    return (dispatch) => {
        dispatch({
            type: "setusername",
            payload: username
        })
    }
}
