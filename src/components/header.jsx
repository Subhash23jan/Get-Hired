
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
function Header() {
  return (
    <nav className="py-4 flex justify-between items-center">
      <Link >
        <img src="/src/assets/logo.jpeg" alt="logo"
     className="h-20 w-25 rounded-full border-1 border-gray-300" />
      </Link>
      <Button variant="outline" >Login</Button>
    </nav>
  )
}

export default Header