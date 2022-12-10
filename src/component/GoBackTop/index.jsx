import BackButton from "../BackButton";

const GoBackTop = ({ children }) => {
	return (
		<div className="flex flex-row items-center gap-4 justify-between mb-10">
			<BackButton />
			{children && children}
		</div>
	);
};

export default GoBackTop;
