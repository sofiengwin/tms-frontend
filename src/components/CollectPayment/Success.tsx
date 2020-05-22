import * as React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Success = () => {
  return (
    <Modal
      size="sm"
      show={true}
      onHide={() => null}
      aria-labelledby="example-modal-sizes-title-sm"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-sm" as="h4">
          Success
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Payment successfully recorded for MOT 3910
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => null}>
          Scan Another
        </Button>
        <Button variant="primary" onClick={() => null}>
          Home
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Success;