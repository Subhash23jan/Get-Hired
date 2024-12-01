import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { FaBookmark } from "react-icons/fa";
import {  PenBox } from "lucide-react";
import user from '../data/user.json'; // Ensure that this path is correct and user.json contains a role property
function Header() {
  return (
    <nav className="py-4 pt-0 flex justify-between items-center">
      <Link to="/"> {/* Ensure this has a valid route */}
        <img src="/assets/logo.jpeg" alt="logo"
          className="h-20 w-25 border-1 border-gray-300" />
      </Link>
      <div className="flex justify-between lg:w-64">
        {user.role === "candidate" ? (
          <Link to="/my-jobs">
            <Button variant="destructive" className="rounded-full mr-4">
              <FaBookmark />
              My Jobs
            </Button>
          </Link>
        ) : (
          <Link to="/post-job">
            <Button variant="destructive" className="rounded-full mr-4">
              <PenBox size={18} />
              Post a Job
            </Button>
          </Link>
        )}
        <Button variant="outline" className="py-4 ">Login</Button>
      </div>
    </nav>
  );
}

export default Header;
