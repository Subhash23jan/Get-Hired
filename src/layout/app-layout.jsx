import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="flex p-6 bg-gray-800 text-white mt-10 justify-center items-center space-x-6">
        <p className="text-lg font-semibold">Made with ❤️ by</p>
        <p className="text-xl font-bold">Subhash D</p>
        <p className="text-sm">Author | Owner</p>
        <p className="text-xs">© 2024 Subhash D. All Rights Reserved.</p>
      </div>


    </div>
  );
};

export default AppLayout;