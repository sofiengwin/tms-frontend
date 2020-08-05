import React from "react";
import { Toast } from "react-bootstrap";

interface Props {
  show: boolean;
  onClose?: () => void;
  variant: "success" | "error";
  title: string;
  message: string;
}

const ToastMessage: React.FC<Props> = ({
  show,
  onClose,
  variant,
  message,
  title,
}) => {
  return (
    <Toast
      show={show}
      onClose={onClose}
      delay={3000000}
      autohide
      style={{
        position: "absolute",
        top: "16px",
        left: "50%",
        right: "10px",
        width: "100%",
        zIndex: 999,
        transform: "translateX(-50%)",
        background: variant === "success" ? "white" : "red",
      }}
    >
      <Toast.Header>
        <img src='holder.js/20x20?text=%20' className='rounded mr-2' alt='' />
        <strong className='mr-auto'>{title}</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
};

export default ToastMessage;
