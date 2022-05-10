import { useState } from "react";
import * as ImIcons from "react-icons/im";

const AddContributor = ({successToast, errorToast}) => {

	const [name, setName] = useState("");
	const [amount, setAmount] = useState("");
	const [date, setDate] = useState("");
	const [paymentMethod, setPaymentMethod] = useState(null);
	const [processing, setProcessing] = useState(false);

    const setActivePaymentMethod = (e) => {
    	setPaymentMethod(e.target.dataset.type);
    }

    const addContributor = (e) => {
    	e.preventDefault();
    	setProcessing(true);
    	if (paymentMethod===null){
    		setProcessing(false);
    		errorToast("Please select a payment method");
    	}
    	else{
    		console.log(name, amount, date, paymentMethod);
    		// Code to upload contributor goes here...
    		setProcessing(false);
    	}
    }

	return (
		<div data-aos="fade-in">
			<div className="container-fluid">
				<section className="addcontributor__section">
					<form onSubmit={addContributor}>
						<div className="row d-flex justify-content-center">
							<div className="col-sm-6 form-group">
								<label
									id="auth__label"
									htmlFor="stc__name"
									className="auth__label"
								>name</label>
								<input
									type="text"
									placeholder="Name"
									required={true}
									className="form-control custom__input"
									id="stc__name"
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
							<div className="col-sm-6 form-group">
								<label
									id="auth__label"
									htmlFor="stc__amount"
									className="auth__label"
								>amount</label>
								<input
									type="text"
									placeholder="Amount"
									required={true}
									className="form-control custom__input"
									id="stc__amount"
									value={amount}
									onChange={(e) => setAmount(e.target.value)}
								/>
							</div>

							<div className="col-sm-6 form-group">
								<label
									id="auth__label"
									htmlFor="stc__date"
									className="auth__label"
								>date</label>
								<input
									type="date"
									placeholder="Date"
									required={true}
									className="form-control custom__input"
									id="stc__date"
									value={date}
									onChange={(e) => setDate(e.target.value)}
								/>
							</div>

							<div className="col-sm-6 form-group">
								<label
									id="field-1-label"
									htmlFor="field-1"
									className="auth__label"
								>payment method</label>
								<div className="flex" id="gender_container">
									<button
										type="button"
										className={
											`authselect__btn 
											${paymentMethod==="crypto"?'active':''}`
										}
										data-type="crypto"
										onClick={setActivePaymentMethod}>
										Crypto Currency
									</button>
									<button
										type="button"
										className={
											`authselect__btn 
											${paymentMethod==="paypal"?'active':''}`
										}
										data-type="paypal"
										onClick={setActivePaymentMethod}>
										Paypal
									</button>
								</div>
							</div>
						</div>
						<button
							className="auth__button"
							type="submit"
							disabled={processing}>
							{processing?<ImIcons.ImSpinner8 />:'Add Contributor'}
						</button>
					</form>
				</section>
			</div>
		</div>
	)
}

export default AddContributor;