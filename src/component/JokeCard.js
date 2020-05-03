import React from 'react'
import { Card } from 'react-bootstrap'


export default (props) => {
    const { joke } = props
    return (
        <>
            <Card border="warning" style={{ width: '18rem' }}>
                <Card.Header>{joke.type}</Card.Header>
                <Card.Body>
                    <Card.Title>{joke.setup}</Card.Title>
                    <Card.Text>
                        {joke.punchline}
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
        </>
    )
}