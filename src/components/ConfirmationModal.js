import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement(document.getElementById('app'))
const ConfirmationModal = (props) => (
    <Modal 
        isOpen={ props.selectedOption} 
        contentLabel="Selected Option"
        onRequestClose={props.handleClearSelectedOption}           // to close when we click escape key or background
        closeTimeoutMS={200}        // by using this modal will closes after 200ms creating an transition effect. 
        className="modal"    
    >
        <h3 className="modal__title">Are you sure?</h3>
        <p className="modal__body">Do you want to remove this record?</p>
        <div>
          <button className="button button--model" onClick={props.handleClearSelectedOption}>Cancel</button>
          <button className="button button--secondary" onClick={props.onRemove}>Remove</button>
        </div>
    </Modal>
);

export default ConfirmationModal;