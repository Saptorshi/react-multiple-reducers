const initialState = {
    b : 1
}

const reducer = (state = initialState, action) => {
    const newState = {...state};

    switch(action.type) {
        case "UPDATE_B":
            return {
                ...state,
                b :   action.a + state.b,
            }
            break;
    }

    return newState;
}

export default reducer;