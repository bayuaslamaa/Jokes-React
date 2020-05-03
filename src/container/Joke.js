import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getJokes } from '../store/actions'


export default () => {
    const dispatch = useDispatch()
    const jokes = useSelector(state => state.jokes)

    useEffect(() => {
        dispatch(getJokes())
    }, [dispatch])
    return (
        <><h1>{JSON.stringify(jokes)}</h1></>
    )
}