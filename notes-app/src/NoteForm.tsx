import React from 'react'
import { Button, Col, Form, Row, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CreatableReactSelect from "react-select/creatable"

const NoteForm = () => {
    return (
        <Form>
            <Stack gap={5}>
                <Row>
                    <Col>
                        <Form.Group controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control required />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="title">
                            <Form.Label>Tags</Form.Label>
                            <CreatableReactSelect />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group controlId="markdown">
                    <Form.Label>Body</Form.Label>
                    <Form.Control required as="textarea" rows={20} />
                </Form.Group>
                <Stack direction="horizontal" gap={3} className="justifu-content-end" >
                    <Button type="submit" variant="primary">Save</Button>
                    <Link to="..">
                        <Button type="button" variant="outline-secondary">Cancel</Button>
                    </Link>
                </Stack>
            </Stack>
        </Form>
    )
}

export default NoteForm