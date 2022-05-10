import Modal from "react-modal";
import * as ImIcons from "react-icons/im";

const contributors = [
	{
		name: "David Nelson",
		amount: "5,200",
		date: "25th June 2022",
		paymentMethod: {
			type: "paypal"
		}
	},
	{
		name: "Francis Igbikiri",
		amount: "15,200",
		date: "25th June 2022",
		paymentMethod: {
			type: "crypto",
			network: "BTC"
		}
	},
	{
		name: "Kenneth Chinedu",
		amount: "1,500",
		date: "25th June 2022",
		paymentMethod: {
			type: "paypal"
		}
	},
	{
		name: "David Nelson",
		amount: "5,200",
		date: "25th June 2022",
		paymentMethod: {
			type: "paypal"
		}
	},
	{
		name: "Francis Igbikiri",
		amount: "15,200",
		date: "25th June 2022",
		paymentMethod: {
			type: "crypto",
			network: "BTC"
		}
	},
	{
		name: "Kenneth Chinedu",
		amount: "1,500",
		date: "25th June 2022",
		paymentMethod: {
			type: "paypal"
		}
	},
	{
		name: "David Nelson",
		amount: "5,200",
		date: "25th June 2022",
		paymentMethod: {
			type: "paypal"
		}
	},
	{
		name: "Francis Igbikiri",
		amount: "15,200",
		date: "25th June 2022",
		paymentMethod: {
			type: "crypto",
			network: "BTC"
		}
	},
	{
		name: "Kenneth Chinedu",
		amount: "1,500",
		date: "25th June 2022",
		paymentMethod: {
			type: "paypal"
		}
	},
]

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
				<div className="modal__nav">
					List Of All Contributors
					<ImIcons.ImCancelCircle
						onClick={closeModal}
					/>
				</div>
				{
					contributors.map((contributor, index) => {
						return (
							<SingleContributor
								contributor={contributor}
								key={index}
							/>
						)
					})
				}
			</div>
		</Modal>
	)
}

const SingleContributor = ({contributor}) => {
	return (
		<div className="singlecontributor__card">
			<p><b>Contributor</b>: {contributor.name}</p>
			<p><b>Amount Contributed</b>: 
				{
					contributor.paymentMethod.type==="paypal"?
					"$":contributor.paymentMethod.network
				}
				{contributor.amount}
			</p>
			<p><b>Date Contributed</b>: {contributor.date}</p>
		</div>
	)
}

export default ContributorModal;