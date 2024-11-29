import { Button } from "@/components/ui/button";
import { Navigate } from "react-router-dom";
import { useState } from "react";

function InvalidPage() {
  const [redirect, setRedirect] = useState(false);

  const onClickHandler = () => {
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-blue-500 font-extralight text-center sm:text-6xl lg:text-8xl">
        Looks like you entered wrong URL..!!
      </h1>
      <Button
        variant="blue"
        onClick={onClickHandler}
        size="lg"
        className="font-bold text-xl mt-10"
      >
        Click Here
      </Button>
    </div>
  );
}

export default InvalidPage;
