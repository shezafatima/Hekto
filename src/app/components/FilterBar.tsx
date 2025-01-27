import {  GridIcon, List } from "lucide-react";


type FilterBarProps = {
  filters: { label: string; value: string }[];
  perPageOptions: number[];
  onFilterChange: (value: string) => void;
  onPerPageChange: (value: number) => void;
  viewType: "grid" | "list";
  onViewChange: (value: "grid" | "list") => void;
};

const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  perPageOptions,
  onFilterChange,
  onPerPageChange,
  viewType,
  onViewChange,
}) => {
  return (
    <div className="flex mt-8 gap-5 flex-wrap">
      <div className="flex gap-2">
        <h1 className="text-[16px] text-[#3F509E]">Per Page:</h1>
        <select
          className="w-[55px] h-[25px] border text-[#3F509E] border-[#E7E6EF]"
          onChange={(e) => onPerPageChange(parseInt(e.target.value))}
        >
          {perPageOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-2 items-center">
        <h1 className="text-[16px] text-[#3F509E]">Sort By:</h1>
        <select
          className="w-[96px] h-[25px] border border-[#E7E6EF] text-[#3F509E] py-1 text-[12px] font-light text-center"
          onChange={(e) => onFilterChange(e.target.value)}
        >
          {filters.map((filter) => (
            <option key={filter.value} value={filter.value}>
              {filter.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-2 items-center">
        <h1 className="text-[16px] text-[#3F509E]">View:</h1>
        <div  className={`cursor-pointer text-[#3F509E] text-[16px] ${
            viewType === "grid" ? "opacity-100" : "opacity-50"
          }`}
          onClick={() => onViewChange("grid")} >
          
        <GridIcon/>
        </div>
        <div className={`cursor-pointer text-[#3F509E] ${
            viewType === "list" ? "opacity-100" : "opacity-50"
          }`}
          onClick={() => onViewChange("list")}>
<List/>
        </div>
       
      </div>
    </div>
  );
};

export default FilterBar;
