import SearchAndFilter from "../components/SearchAndFilter";
import ProjectList from "../components/ProjectList";

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SearchAndFilter />
        <ProjectList />
      </main>
    </div>
  );
};

export default Dashboard;
