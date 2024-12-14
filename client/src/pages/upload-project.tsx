import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const UploadProject = () => {
  return (
    <div className="min-h-screen">
      <header className="shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#FFA05C] to-[#F06500]">
            Upload Your Project
          </h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form className="text-white border border-[#52525B] shadow-md rounded-lg p-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Project Title</Label>
            <Input
              className="bg-[#3F3F46] border border-[#52525B] text-[#C6C6C6]"
              id="title"
              placeholder="Enter your project title"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Project Description</Label>
            <Textarea
              className="bg-[#3F3F46] border border-[#52525B] text-[#C6C6C6]"
              id="description"
              placeholder="Describe your project"
              required
            />
          </div>

          <div className="space-y-2 ">
            <Label htmlFor="category">Category</Label>
            <Select required>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web-development">Web Development</SelectItem>
                <SelectItem value="mobile-apps">Mobile Apps</SelectItem>
                <SelectItem value="data-science">Data Science</SelectItem>
                <SelectItem value="machine-learning">
                  Machine Learning
                </SelectItem>
                <SelectItem value="devops">DevOps</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="tech-stack">Tech Stack</Label>
            <Input
              className="bg-[#3F3F46] border border-[#52525B] text-[#C6C6C6]"
              id="tech-stack"
              placeholder="e.g. React, Node.js, MongoDB"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="demo-url">Demo URL</Label>
            <Input
              className="bg-[#3F3F46] border border-[#52525B] text-[#C6C6C6]"
              id="demo-url"
              type="url"
              placeholder="https://your-demo-url.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="github-url">GitHub URL</Label>
            <Input
              className="bg-[#3F3F46] border border-[#52525B] text-[#C6C6C6]"
              id="github-url"
              type="url"
              placeholder="https://github.com/your-username/your-repo"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="thumbnail">Project Thumbnail</Label>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="thumbnail"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-[#3F3F46] text-[#C6C6C6]"
              >
                <div className="relative w-full h-full">
                  {/* Thumbnail preview image */}
                  <img
                    src=""
                    alt="Thumbnail preview"
                    className="w-full h-full object-cover rounded-lg hidden"
                  />
                  <button
                    type="button"
                    className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hidden"
                    aria-label="Remove thumbnail"
                  >
                    <X className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-8 h-8 mb-4 text-gray-400" />
                  <p className="mb-2 text-sm text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-400">
                    PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <Input
                  id="thumbnail"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  required
                />
              </label>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-orange-800 hover:opacity-70"
          >
            Upload Project
          </Button>
        </form>
      </main>
    </div>
  );
};

export default UploadProject;
