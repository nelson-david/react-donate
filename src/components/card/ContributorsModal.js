import Modal from "react-modal";

const ContributorModal = ({closeModal}) => {

	Modal.setAppElement('#root');
	return (
		<Modal
			isOpen={true}
			className="custom__modal incoming__modal"
			data-aos="fade-in"
			overlayClassName="overlay custom__modaloverlay"
			onRequestClose={closeModal}
		>
			<div className="modal__content" data-aos="flip-left">
				<p>Contains a list of contributors</p>
			</div>
		</Modal>
	)
}

export default ContributorModal;