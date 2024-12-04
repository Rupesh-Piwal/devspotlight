import { ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectCard = () => {
  return (
    <div className="bg-[#3F3F46] rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        src="/placeholder.svg?height=200&width=300"
        alt="Project Title"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Project Title
        </h2>
        <p className="text-[#C6C6C6] mb-4">Project description goes here.</p>
        <div className="flex items-center justify-between">
          <Button variant="outline" className="flex items-center">
            <ThumbsUp className="w-4 h-4 mr-2" />
            42
          </Button>
          <Button className="hover:underline bg-gradient-to-tr from-[#FFA05C] to-[#F06500]">
            View Project
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
