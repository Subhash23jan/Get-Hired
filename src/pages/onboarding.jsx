// Correct loader icon import
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {  useLocation, useNavigate } from "react-router-dom";
import {BarLoader} from 'react-spinners'

function OnBoarding() {
  const [isLoaded, setLoaded] = useState(false);
  const { pathname } = useLocation();
  console.log(pathname);
  const navigate = useNavigate();
  const handleRoleSelection = (role) => {
  if (role === 'recruiter') {
    navigate("/post-job", { replace: true, });
  } else {
    navigate("/jobs", { replace: true });
  }
  };


    useEffect(() => {
      setTimeout(() => {
        setLoaded(true);
      }, 2000);
    }, []);

      if (!isLoaded) {
        return <BarLoader color="white" className="mb-4" width={"100%"} />}
  return (
    <div>
      <h2 className="text-9xl justify-center text-center font-bold  ">
        I am a...
      </h2>
      <div className="mt-16 grid grid-cols-2 gap-5 w-full md:px-40">
      <Button onClick={()=>handleRoleSelection("candidate")}  variant="blue"  className="h-36 text-2xl ">Candidate</Button>
      <Button onClick={()=>handleRoleSelection("recruiter")} variant="destructive" className="h-36 text-2xl">Recruiter</Button>
      </div>
    </div>
  )

  }

export default OnBoarding;
