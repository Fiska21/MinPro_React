import React, { useState } from "react"
import {
    Button,
    Row,
    Col,
    Input,
    FormGroup,
    Label,
    Form
} from "reactstrap"

const initialValue = {
    id: Math.random() + Date.now(),
    name: "",
    price: 0,
    quantity: 0,
}

const CreateForm = ({ data, setOpen }) => {
    const [form, setForm] = useState(initialValue)
    const handleSubmit = (e) => {
        e.preventDefault()
        data.push(form)
        setOpen(false)
    }

    return (
        <>
            <Row>
                <Form onSubmit={handleSubmit}>
                    <>
                        {/* name */}

                        <FormGroup>
                            <Label> Name </Label>
                            <Input
                                value={form.name}
                                onChange={(e) => setForm(prev => (
                                    {
                                        ...prev,
                                        name: e.target.value
                                    }
                                ))}
                                required
                            />
                        </FormGroup>

                        {/* price */}
                        <FormGroup>
                            <Label> Price </Label>
                            <Input
                                value={form.price}
                                onChange={(e) => setForm(prev => (
                                    {
                                        ...prev,
                                        price: e.target.value
                                    }
                                ))}
                                required
                            />
                        </FormGroup>

                        {/* stock */}
                        <FormGroup>
                            <Label> Quantity </Label>
                            <Input
                                value={form.stock}
                                onChange={(e) => setForm(prev => (
                                    {
                                        ...prev,
                                        quantity: e.target.value
                                    }
                                ))}
                                required
                            />
                        </FormGroup>
                    </>
                    <Row>
                        <Col>
                            <Button type="submit" color="primary"> Submit</Button>
                        </Col>
                        <Col>
                            <Button onClick={() => setOpen(false)} color="primary"> Cancel </Button>
                        </Col>
                    </Row>
                </Form>
            </Row>
        </>
    )
}

export default CreateForm