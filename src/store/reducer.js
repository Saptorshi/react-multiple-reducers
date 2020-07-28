const initialState = {
    a : 1,
    b : 1
}

const reducer = (state = initialState, action) => {
    const newState = {...state};

    switch(action.type) {
        case "UPDATE_A":
            return {
                ...state,
                a :   state.a + state.b,
            }
            break;
            // newState.age ++;
            // break;
        case "UPDATE_B":
            return {
                ...state,
                b :   state.a + state.b,
            }
            break;
            // newState.age --;
            // break;

        case "DEL_ITEM":
            return {
                ...state,
                history : state.history.filter(el => el.id != action.key)
            }
            break;
    }
    // if(action.type == 'AGE_UP') {
    //     newState.age ++;
    // }

    // if(action.type == 'AGE_DOWN') {
    //     newState.age --;
    // }
    return newState;
}

export default reducer;