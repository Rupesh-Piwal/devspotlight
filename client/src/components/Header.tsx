import { User, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/dashboard"
            className="text-[20px] md:text-[26px] font-bold bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text"
          >
            DevSpotLight
          </Link>
          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="bg-transparent border border-[#FFA05C] text-transparent bg-clip-text bg-gradient-to-tr from-[#FFA05C] to-[#F06500] hover:text-[#FFA05C] flex flex-row items-center px-4 py-1.5 rounded"
            >
              <User className="w-5 h-5 mr-2 text-[#FFA05C]" />
              Login
            </Link>
            <Button className=" bg-gradient-to-r from-orange-500 to-orange-800 hover:from-orange-800 hover:to-orange-500 hover:opacity-70 text-center">
              <PlusCircle />
              <Link to="/upload-project">Post Project</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
