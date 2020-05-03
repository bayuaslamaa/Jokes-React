import axios from 'axios'

export const SET_JOKES = 'SET_JOKES'

export const setJokes = (data) => {
    return { type: SET_JOKES, payload: data }
}

function fetchJokes() {
    return axios.get('https://official-joke-api.appspot.com/random_ten')
}

export const getJokes = () => {
    return dispatch => {
        fetchJokes()
            .then(({ data }) => dispatch(setJokes(data)))
            .catch(console.log)
    }
}