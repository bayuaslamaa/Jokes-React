import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getJokes } from '../store/actions'
import JokeCard from '../component/JokeCard'


export default () => {
    const dispatch = useDispatch()
    const jokes = useSelector(state => state.jokes)
    console.log(jokes)
    useEffect(() => {
        dispatch(getJokes())
    }, [dispatch])
    return (
        <>
            <div className="container row offset-2">

                {
                    jokes.map(joke => <JokeCard key={joke.id} joke={joke} />)
                }

            </div>
        </>
    )
}