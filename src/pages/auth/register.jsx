import React from "react"
import {
    Button,
    Container,
    FormFeedback,
    Input
} from "reactstrap";

import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
    email: yup.string().email().required(),
    username: yup.string().min(8).required(),
    password: yup.string().min(8).required(),
    reTypePassword: yup.string().required()
})

const Register = () => {

    const formik = useFormik({
        initialValues: {
            email: "",
            username: "",
            password: "",
            reTypePassword: ""
        },
        validationSchema: validationSchema,
        onSubmit: () => handleRegister()
    })

    const handleRegister = () => {
        alert("regist")
    }

    console.log(
        formik.initialValues
    );

    return (
        < Container className="container-register">
            Register Pages
            <form onSubmit={formik.handleSubmit}>
                {
                    Object.keys(formik.initialValues).map((key, idx) => (
                        <div>
                            <Input
                                type={key === "password" || key === "retypePassword" ? "password" : "text"}
                                id={key}
                                placeholder={key}
                                value={formik.values[key]}
                                onChange={formik.handleChange}
                                invalid={formik.touched[key] && Boolean(formik.errors[key])}
                            />
                            <br />
                            {formik.touched[key] && Boolean(formik.errors[key]) &&
                                <FormFeedback
                                    className="error-feedback"> {formik.errors[key]}
                                </FormFeedback>
                            }

                        </div>
                    ))}
                <Button className="btn-submit" type="submit">
                    Register
                </Button>
            </form>
        </Container>
    )
}


export default Register