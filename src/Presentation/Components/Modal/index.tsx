import React, { ReactNode } from "react";
import { Container } from "./styles";

interface ModalProps {
  open: boolean;
  handleClose: () => void;
  children: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  open,
  handleClose,
  children,
}) => {
  // Renderiza o modal apenas se a prop "open" for verdadeira
  if (!open) {
    return null;
  }

  return (
    <Container>
      {open && <div onClick={handleClose} className="backdrop"></div>}
      <div className="modal">
        <div className="modal-content">
          <span className="close cursor-pointer" onClick={handleClose}>
            <img src="close.png" alt="" style={{ width: "30px" }} />
          </span>
          {children}
        </div>
      </div>
    </Container>
  );
};
