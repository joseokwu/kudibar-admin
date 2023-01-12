import { RiSearchLine } from "react-icons/ri";

const SearchBar = ({ placeholder = "Search..." }) => {
	return (
		<div className="bg-[#f5f5f5] flex flex-row items-center gap-4 py-3  px-4 rounded-lg">
			<RiSearchLine color="#121528" />
			<input
				type="search"
				name=""
				id=""
				className="bg-transparent outline-none text-base w-full"
				placeholder={placeholder}
			/>
		</div>
	);
};

export default SearchBar;
