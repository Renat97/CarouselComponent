import React from 'react';
import styled from 'styled-components';

const ModalToDisplay = styled.div`
background-color: white;
z-index: 999;
position: fixed;
text-align: center;
color:  #545454;
border: 1px solid #767676;
padding: 1rem;
outline: 0;
margin-top: 40px;
height: 70px;
width: 100px;
box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.2);
`;

const Modal = ({ handleClose, show, children }) => {
  if(show) {
  return (
    <ModalToDisplay className="modal-overlay">
        {children}
    </ModalToDisplay>
  );
  } else {
    return null;
  }
}

export default Modal;