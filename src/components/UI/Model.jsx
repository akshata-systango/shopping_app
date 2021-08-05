import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './Model.css';

const Backdrop = (props) => {
    return <div className='backdrop' onClick={props.onClose}></div>

}

const Modaloverlays = (props) => {
    return <div className="modal">
    <div className="content">{props.children}</div>
    </div>
  
}

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop />, portalElement)}
        {ReactDOM.createPortal( <Modaloverlays>{props.children}</Modaloverlays>,portalElement)}
       
    </Fragment>
}

export default Modal;