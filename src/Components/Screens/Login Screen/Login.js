import React from 'react'
import './Login.css'
import { Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form'

function Login( props ) {

    const {register , handleSubmit , errors} = useForm();

    return (
        <Modal
        {...props}
        className="modal__size"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <div className="modal__wrapper">
                    <h4>Sign In to X12VA</h4>
                    <form>
                        <input type="text" placeholder="Email Address" name="email"/><br/>
                        <input type="password" placeholder="Password" name="password"/><br/>
                        <button type="submit">Login</button><br/>
                        <a href="#">Forgot Password?</a><br/>
                        <span>or login with</span>
                        <div className="social__icons">

                        </div>
                        <span>Don’t have an account? Create Account</span>
                    </form>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default Login
