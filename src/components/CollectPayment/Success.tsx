import * as React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

interface Props {
  show: boolean;
  onHide: () => void;
  motNumber: string;
  scanAnother: () => void;
  backHome: () => void;
}

const Success: React.FC<Props> = ({show, onHide, motNumber, scanAnother, backHome}) => {
  return (
    <Modal
      size="sm"
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-sm"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-sm" as="h4">
          Success
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Payment successfully recorded for MOT {motNumber}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={scanAnother}>
          Scan Another
        </Button>
        <Button variant="primary" onClick={backHome}>
          Home
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Success;