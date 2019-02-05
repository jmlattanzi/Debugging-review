// error: object prop assigned with = instead of :
const initialState = {
    name: '',
}

const UPDATE_INPUT = 'UPDATE_INPUT'

export const updateInput = (input) => {
    return {
        action: UPDATE_INPUT,
        payload: input,
    }
}

// error: initialState passed in instead of state when state is used in the function body
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_INPUT:
            return {
                ...state,
                [action.payload.target.name]: action.payload.target.value,
            }
        default:
            return state
    }
}
