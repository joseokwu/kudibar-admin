import styles from "./support.module.css";
import WhiteCard from "../../component/WhiteCard";
import MUITable from "../../component/Table";
import SelectComponent from "../../component/SelectComponent";
import GoBackTop from "../../component/GoBackTop";
import Button from "../../component/Button";
import { AiOutlineCalendar } from "react-icons/ai";
import SearchBar from "../../component/SearchBar";
import { allTicketsData } from "../../utils/users";

const ViewTicket = () => {
	return (
		<div>
			<GoBackTop>
				<div
					className={`flex flex-row items-center gap-8 ${styles.btnContainer}`}
				>
					<Button>Open Ticket</Button>
					<Button variant="outline">Close Ticket</Button>
				</div>
			</GoBackTop>
			<WhiteCard>
				<div>
					<p className="text-xl mb-[14px]">
						Status of airtime top-up still pending. Have already been debited.
					</p>
					<div className="flex items-center gap-[10px] text-[#121528] text-opacity-60 mb-[42px]">
						<span className="text-[#121528]">Jessica Wong </span>
						<span>·</span>
						<span>Mar 20, 2019 23:14</span>
					</div>
				</div>
				<div className=" flex flex-col items-stretch gap-4">
					{Array(3)
						.fill()
						.map((item) => (
							<MessageItem />
						))}
				</div>
			</WhiteCard>
		</div>
	);
};

export default ViewTicket;

const MessageItem = () => {
	return (
		<div className="bg-[#f5f5f5] rounded-2xl pl-8 pr-6 py-[26px]">
			<div className="grid grid-cols-[52px_1fr] items-center gap-9 mb-6">
				<div className="w-[52px] h-[52px] grid place-items-center bg-[#39BD78] text-white text-lg rounded-full">
					EL
				</div>
				<div
					className="flex flex-row items-start justify-between"
					style={{ color: "rgba(18, 21, 40, 0.6)" }}
				>
					<div>
						<p className="text-base">Elisha Lawa</p>
						<p className="text-xs">elisha@gmail.com</p>
					</div>
					<p
						className="text-base text-[rgb(18, 21, 40)]"
						style={{ lineHeight: "22px" }}
					>
						Mar 9, 2021
					</p>
				</div>
			</div>
			<p
				className="mb-2 text-[#121528] text-base"
				style={{ lineHeight: "22px", color: "color: rgba(18, 21, 40, 0.8);" }}
			>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus viverra
				habitasse nibh habitasse facilisis nunc amet, urna. Vel lectus ipsum
				leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
				viverra habitasse nibh habitasse facilisis nunc amet, urna. Vel lectus
				ipsum leo.
			</p>
		</div>
	);
};
