import * as React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

interface Props {
  errorMessages: string[];
  onClose: () => void
  show: boolean;
}

const ErrorModal: React.FC<Props> = ({errorMessages, onClose, show}) => {
  return (
    <Modal
      size="sm"
      show={show}
      onHide={onClose}
      aria-labelledby="example-modal-sizes-title-sm"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-sm" as="h4">
          Error
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {errorMessages.map((error, index) => (
          <div key={index}>{error}</div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onClose}>
          Home
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ErrorModal;