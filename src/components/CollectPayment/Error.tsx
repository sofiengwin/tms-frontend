import * as React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

interface Props {
  errorMessage: string;
  onClose: () => void
  isShown: boolean;
}

const ErrorModal: React.FC<Props> = ({errorMessage, onClose, isShown}) => {
  return (
    <Modal
      size="sm"
      show={isShown}
      onHide={onClose}
      aria-labelledby="example-modal-sizes-title-sm"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-sm" as="h4">
          Error
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {errorMessage}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => null}>
          Home
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ErrorModal;