import Modal from "../../component/Modal";
import React from "react";
import { StatusTag } from "../../component/componentHelpers/Tags/Tags.component";
import Input from "../../component/Input";
import { CheckBox } from "../../component/Input";
import Button from "../../component/Button/button";
import SearchBar from "../../component/SearchBar";
import { CiSquareInfo } from "react-icons/ci";

const AssignTicketsModal = ({ closeModal }) => {
	const names = Array(3)
		.fill(0)
		.map((item) => "Anthony Oweke");

	return (
		<Modal closeModal={closeModal}>
			<div className="mx-4" style={{ width: "80vw", maxWidth: "527px" }}>
				<div className="relative top-[-30px] z-0 ">
					<h3 className="font-[600] text-[24px] ">Assign Tickets</h3>
				</div>
				<section>
					<div className="mb-4">
						<SearchBar placeholder="Search for user, email address" />
					</div>
					<div>
						<div className="flex flex-col items-stretch gap-2">
							{names.map((item) => (
								<div className="flex items-center gap-4 mr-2 bg-[#F5F5F5] rounded py-[14px] px-[28px] ">
									<div className="w-[52px] h-[52px] rounded-full bg-[#39BD78] text-white grid place-items-center text-[18px]">
										AO
									</div>
									<p>User Management</p>
									<span className="ml-auto">
										<CheckBox />
									</span>
								</div>
							))}
						</div>
					</div>
					<div className="my-6">
						<Button variant="fullWidth">Create</Button>
					</div>
					<div className="flex flex-row items-center gap-3 mb-4">
						<CiSquareInfo color="#D34646" />
						<p className="text-sm text-[#999999]">
							You can assign ticket to a maximum of 3 administrators
						</p>
					</div>
				</section>
			</div>
		</Modal>
	);
};

export default AssignTicketsModal;
