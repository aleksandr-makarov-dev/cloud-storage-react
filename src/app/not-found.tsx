import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 h-96">
      <div className="max-w-md w-full space-y-6 text-center">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Oops! Page not found.</h1>
          <p className="text-gray-400">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <Button asChild>
          <NavLink to="/filesystem">Go back home</NavLink>
        </Button>
      </div>
    </div>
  );
};
