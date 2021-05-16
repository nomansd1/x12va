import React from 'react'
import './Login.css'
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import icon2 from '../../../Assets/Icons/iconfinder_1_Facebook2_colored_svg_5296500.png'
import icon1 from '../../../Assets/Icons/iconfinder_Google_1298745.png'
import icon3 from '../../../Assets/Icons/iconfinder_Social-media_Twitter_4362955.png'


function Login( props ) {

    const {register , handleSubmit , errors} = useForm();

    return (
        <Modal
        {...props}
        dialogClassName="modal__size modal modal-open 
            modal-dialog modal.fade modal-dialog-scrollable 
            modal-dialog-centered"
        centered
        >
            <Modal.Body className="modal-body modal-content">
                <div className="modal__wrapper">
                    <p className="closeModal__button" onClick={props.onHide}>x</p>
                    <h2>Sign In to X12VA</h2>
                    <form>
                        <input type="text" placeholder="Email Address" name="email"/><br/>
                        <input type="password" placeholder="Password" name="password"/><br/>
                        <button type="submit">Login</button><br/>
                        <a href="#">Forgot Password?</a><br/>
                        <span>or login with</span>
                    </form>
                    <div className="social__icons">
                        <span><img src={icon1} alt="" /></span>
                        <span><img src={icon2} alt="" /></span>
                        <span><img src={icon3} alt="" /></span>
                    </div>
                    <span>Don’t have an account? <a href="#" >Create Account</a></span>
                    
                </div>
            </Modal.Body>
        </Modal>
        
    )
}

export default Login
