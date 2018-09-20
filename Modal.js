import React from 'react';
import './Modal.css';

const Modal = (props) =>(
<div className={"modal"}  style={props.styl?{transform:'translateX(0%)'}:null}>
<h1>This is a modal</h1>
<button onClick={props.onClick}>Close</button>
</div>

);

export default Modal;