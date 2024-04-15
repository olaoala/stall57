import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import styled from './Css/LimitedItemModal.module.css';

function LimitedItemsModal() {
  const [showModal, setShowModal] = useState(false);

  // Show the modal after 2 minutes (120,000 milliseconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 12000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      {/* <Button variant="primary" onClick={() => setShowModal(true)}>
        Open Limited Items Modal
      </Button> */}
      <div className={styled.modal} >
      <Modal className='d-flex p-3' show={showModal} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>Hey babes!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        If you see something you really like,<br /> Preorder to secure your order.<br />
          Items listed are very limited. 
        </Modal.Body>
        <Modal.Footer>
          <Button style={{backgroundColor:'#5D0B18'}} onClick={handleClose}>
            Mkay
          </Button>
        </Modal.Footer>
      </Modal>
      </div>

    </>
  );
}

export default LimitedItemsModal;
