import React from 'react';
import {Jumbotron, Container, Button} from 'react-bootstrap';
import './Heading.css'

export default function Heading(){
    return(
        <div>
        <Container className="heading">
        <Jumbotron className="jumbo">
                <h1>Sample Heading</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisocong elit.
                    Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt
                    odit vero aliquid similique quaerat nam nobis illo aspematur
                    vitae fugiat numquam repellat.
                </p>
                <Button variant="primary">Call to action!</Button>{' '}
            </Jumbotron>
            <hr />
        </Container>
            
        </div>
    )
}