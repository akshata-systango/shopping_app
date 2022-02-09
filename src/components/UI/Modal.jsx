import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import pt from 'prop-types';
import './style/Modal.css';

const Backdrop = (props) => {
    const {onClose} = props
    return <div className='backdrop' onClick={onClose}></div>

}

const ModalOverlay = (props) => {
    return <div className="content">
        <div className="model">{props.children}</div>
    </div>

}

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    const {onClose, children} = props
    return <Fragment>
        <div className="cartStyle">
            {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
        </div>
    </Fragment>
}

Modal.propTypes = {
    onClose : pt.func,
    children :pt.array

}
export default Modal;