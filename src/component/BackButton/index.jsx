import { BsChevronLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
	const navigate = useNavigate();

	return (
		<div
			className="flex flex-row items-center gap-4 text-base cursor-pointer"
			onClick={() => navigate(-1)}
		>
			<BsChevronLeft />
			Back
		</div>
	);
};

export default BackButton;
