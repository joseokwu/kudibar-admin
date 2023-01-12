import Modal from "../../component/Modal";
import React from "react";
import { StatusTag } from "../../component/componentHelpers/Tags/Tags.component";
import Input from "../../component/Input";
import { CheckBox } from "../../component/Input";
import Button from "../../component/Button/button";
import SearchBar from "../../component/SearchBar";
import { CiSquareInfo } from "react-icons/ci";
import SelectComponentBig from "../../component/SelectComponentBig";

const ApprovePaymentModal = ({ closeModal }) => {
	const names = Array(3)
		.fill(0)
		.map((item) => "Anthony Oweke");

	return (
		<Modal closeModal={closeModal}>
			<div className="mx-8" style={{ width: "80vw", maxWidth: "623px" }}>
				<div className="relative top-[-30px] z-0 ">
					<h3 className="font-[600] text-[24px] ">Approve Payment</h3>
				</div>
				<section className="flex flex-col items-stretch gap-4 mb-8">
					<label>
						<div className="mb-2 text-base text-[#121528]">Account Type</div>
						<SelectComponentBig label="Select One" />
					</label>
					<label>
						<div className="mb-2 text-base text-[#121528]">Account Name</div>
						<SelectComponentBig label="Name of company" />
					</label>
					<label>
						<div className="mb-2 text-base text-[#121528]">Account Number</div>
						<SelectComponentBig label="Name of company" />
					</label>
					<label>
						<div className="mb-2 text-base text-[#121528]">Bank Name</div>
						<SelectComponentBig label="Select One" />
					</label>
				</section>
				<Button>Save</Button>
			</div>
		</Modal>
	);
};

export default ApprovePaymentModal;
