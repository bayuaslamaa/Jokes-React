import * as types from './actions'

const initialState = {
    jokes: []
}

export default (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case types.SET_JOKES:
            return { ...state, jokes: payload }
        default:
            return state
    }
}