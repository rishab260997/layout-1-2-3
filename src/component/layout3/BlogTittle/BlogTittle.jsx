import React from 'react';
import { Container, Col, Row, Card, Jumbotron, Form } from 'react-bootstrap';
import './BlogTittle.css'

export default function BlogTittle() {
    return (
        <div>
            <Container className="cont2">
                <Row>
                    <Col sm={true}>
                        <h1>Blog Post Tittle</h1>
                        <p className="bytest">by <span className="test">Test</span></p>
                        <hr />
                        <p>Posted on August 24, 2013 at 9:00 PM</p>
                        <hr />
                        <Card>
                            <Card.Img variant="top" src="data:image/png;base64,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" />
                        </Card>
                        <hr />
                        <p className="lorem">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ducimus, vero,
                            obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam
                            quia corporis eligendi eos magni recusandae laborum minus inventore?
                        </p>
                        <p className="loremSm">
                            Lorem ipsum dolor sit amet, consectetur adipisicing dit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum
                            obcaecati impedit edit illo dolorum ab tempora nigel dicta earum fugiat. Temporibus, voluptatibus.
                        </p>
                        <p className="loremSm">
                            Lorem ipsum dolor sit amet, consectetur adipisicing dit. Eos, doloribus, dolorem iusto blanditiis unde eius illum
                            consequuntur neque dicta incidunt ullam ea hic porto optio ratione repellat perspiciatis. Enim, lure!
                        </p>
                        <p className="loremSm">
                            Lorem ipsum dolor sit amet, consectetur adipisicing dit. Error, nostrum, aliquid, anime, ut quas placeat totam sunt
                            tempora commode nihil ullam alias mode dicta saepe minima ab quo voluptatem obcaecati?
                        </p>
                        <p className="loremSm">
                            Lorem ipsum dolor sit amet, consectetur adipisicing dit. Hamm, dolor quis- Sunt, ut, explicabo, allquam tenetur ratione
                            tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!
                        </p>
                        <hr />
                        <p className="loremSm">Copyright @ Your Website 2014</p>
                    </Col>
                    <Col sm={4}>
                        <Jumbotron className="jumbo2">
                            <h6>Blog Search</h6>
                            <Form>
                                <Form.File
                                    id="custom-file-translate-scss"
                                    label=""
                                    lang="en"
                                    custom
                                />
                            </Form>
                        </Jumbotron>
                        <Jumbotron className="jumbo2">
                            <h6>Blog Categories</h6>
                            <Row>
                                <Col xs={true} sm={true} md={true}>
                                    <span className="category">
                                        Category Name<br />
                                        Category Name<br />
                                        Category Name<br />
                                        Category Name<br />
                                    </span>
                                </Col>
                                <Col xs={true} sm={true} md={true}>
                                    <span className="category">
                                        Category Name<br />
                                        Category Name<br />
                                        Category Name<br />
                                        Category Name<br />
                                    </span>
                                </Col>
                            </Row>
                        </Jumbotron>
                        <Jumbotron className="jumbo2">
                            <h6>Side Widget Wall</h6>
                            <p className="loremSm">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing dit. lnventore, perspiciatis adipisci
                                accusamus laudantium odit aliquam repellat
                                tempore quos aspernatur vero-
                            </p>
                        </Jumbotron>

                    </Col>
                </Row>


            </Container>
        </div>
    )
}