import { ModalContainer, ModalWrapper, Spacer } from "./style";
const Modal = ({ children, closeModal, ...props }) => {
	return (
		<>
			<ModalContainer {...props} onClick={closeModal}>
				<ModalWrapper {...props} onClick={(e) => e.stopPropagation()}>
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
