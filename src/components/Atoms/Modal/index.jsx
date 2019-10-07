import React from 'react'
import { createPortal } from "react-dom";
import styled from 'styled-components'

const ModalS = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,.5);
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ModalContainer = styled.div`
    position: relative;
    top: 10rem;
    background-color: #fff;
    padding: 1rem;
    width: 400px;
    border-radius: 20px;
`

const Button = styled.button`
    position: absolute;
    top: 4px;
    right: 8px;
    border: 0;
    background-color: #f5f5f5;
    padding: .5rem 1rem;
    font-size: 30px;
    color: darkgrey;
    border-radius: 100px;
    cursor: pointer;
`

const Modal = props => {
    if (!props.isOpen) {
      return null;
    }
  
    return createPortal(
        <ModalS>
            <ModalContainer>
                <Button onClick={props.onClose}>
                    x
                </Button>
                {props.children}
            </ModalContainer>
        </ModalS>,
      document.querySelector("#modal")
    );
  };
  
  export default Modal;