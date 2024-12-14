import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SearchAndFilter = () => {
  return (
    <div className=" flex flex-col gap-3 md:flex-row items-center space-x-4 ">
      <div className="relative flex-grow w-full">
        <Input
          type="text"
          placeholder="Search projects..."
          className="w-full pl-10 py-2 border border-[#52525B] bg-[#3F3F46] text-[#C6C6C6] outline-none"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
      <div className="flex">
        {["All", "Web Development", "Mobile Apps", "Data Science"].map(
          (category) => (
            <Button
              key={category}
              className="bg-[#32383E] text-white text-[13px] mx-[2px] md:mx-[3px] border hover:bg-gradient-to-r from-orange-500 to-orange-800 hover:opacity-70"
            >
              {category}
            </Button>
          )
        )}
      </div>
    </div>
  );
};

export default SearchAndFilter;
