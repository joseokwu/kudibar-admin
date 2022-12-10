import { FilterIcon } from "../svgs";

const FilterComponent = () => {
	return (
		<div
			className="flex flex-row items-center gap-4 p-[6px] pl-3 pr-5 border border-[#121528] w-max cursor-pointer"
			style={{ border: "1px solid rgba(18, 21, 40, 0.1)", borderRadius: "8px" }}
		>
			<FilterIcon />
			<span className="text-sm " style={{ color: "rgba(18, 21, 40, 0.6)" }}>
				Filters
			</span>
		</div>
	);
};

export default FilterComponent;
