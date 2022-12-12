import { ModalContainer, ModalWrapper, Spacer } from "./style";
const Modal = ({ children, closeModal, ...props }) => {
  return (
    <>
      <ModalContainer {...props}>
        <ModalWrapper {...props}>
          <header>
            <Spacer />
            <img onClick={closeModal} src={"/asset/close.svg"} alt={""} />
          </header>
          <section>{children}</section>
        </ModalWrapper>
      </ModalContainer>
    </>
  );
};
export default Modal;
