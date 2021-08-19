import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './style/Modal.css';

const Backdrop = (props) => {
    return <div className='backdrop' onClick={props.onClose}></div>

}

const ModalOverlay = (props) => {
    return <div className="content">
        <div className="model">{props.children}</div>
    </div>

}

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    // console.log("child" , props.children)
    return <Fragment>
        <div className="cartStyle">
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </div>
    </Fragment>
}

export default Modal;