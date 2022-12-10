import SearchBar from "../SearchBar";
import WhiteCard from "../WhiteCard";
import FilterComponent from "../FilterSort/FilterComponent";
import SortComponent from "../FilterSort/SortComponent";

const SearchFilterBar = () => {
	return (
		<WhiteCard>
			<div className="flex flex-row items-center gap-5">
				<SortComponent />
				<FilterComponent />
				<div className="w-100">
					<SearchBar />
				</div>
			</div>
		</WhiteCard>
	);
};

export default SearchFilterBar;
