import { useState } from "react";
import { Link } from "react-router-dom";
import { ActionContainer, Status, StatusSignal } from "./tag.style";
import eyeIcon from "../../../assets/svg/eyeicon.svg";
import redflagicon from "../../../assets/svg/redflag.svg";
import actionIcon from "../../../assets/svg/actionicon.svg";
import addUserIcon from "../../../assets/img/adduser.png";
import tickIcon from "../../../assets/img/tick.png";
import closeIcon from "../../../assets/img/cancelicon.png";
import deleteIcon from "../../../assets/img/deleteIcon.png";
export const StatusTag = ({ bg, text }) => {
	return (
		<Status>
			<StatusSignal bg={bg} />
			<span>{text}</span>
		</Status>
	);
};

export const StatusCreatedCampaignTags = ({ bg, text }) => {
	return (
		<Status>
			<StatusSignal bg={bg} />
			<span>{text}</span>
		</Status>
	);
};

export const ActionModal = ({ id, link, onClick }) => {
	const [showOption, setShowOption] = useState(false);

	const handleShowOptions = () => {
		setShowOption(!showOption);
	};
	return (
		<>
			<img
				onClick={handleShowOptions}
				className="cursor-pointer"
				src={actionIcon}
				alt="actionbtn"
			/>
			{showOption && (
				<ActionContainer className="p-3 bg-white ">
					<Link to={link}>
						<div
							className="view_display btn"
							role={"button"}
							onClick={() => console.log(id)}
						>
							<span>View</span>
							<img src={eyeIcon} alt="" />
						</div>
					</Link>
					<div className="flag_display btn" role={"button"} onClick={onClick}>
						<span>Flag</span>
						<img src={redflagicon} alt="" />
					</div>
				</ActionContainer>
			)}
		</>
	);
};

export const ActionModalSupport = ({ id, link, onClick, assignFunc }) => {
	const [showOption, setShowOption] = useState(false);

	const handleShowOptions = () => {
		setShowOption(!showOption);
	};
	return (
		<>
			<img
				onClick={handleShowOptions}
				className="cursor-pointer"
				src={actionIcon}
				alt="actionbtn"
			/>
			{showOption && (
				<ActionContainer className="p-3 bg-white ">
					<Link to={link}>
						<div
							className="view_display btn"
							role={"button"}
							onClick={() => console.log(id)}
						>
							<span>View Ticket</span>
							<img src={eyeIcon} alt="" />
						</div>
					</Link>
					<div
						className="flag_display btn"
						role={"button"}
						onClick={assignFunc}
					>
						<span>Assign Ticket</span>
						<img src={addUserIcon} alt="" />
					</div>
					<div className="flag_display btn" role={"button"} onClick={onClick}>
						<span>Open Ticket</span>
						<img src={tickIcon} alt="" />
					</div>
					<div className="flag_display btn" role={"button"} onClick={onClick}>
						<span>Close Ticket</span>
						<img src={closeIcon} alt="" />
					</div>
					<div className="flag_display btn" role={"button"} onClick={onClick}>
						<span>Delete</span>
						<img src={deleteIcon} alt="" />
					</div>
				</ActionContainer>
			)}
		</>
	);
};
