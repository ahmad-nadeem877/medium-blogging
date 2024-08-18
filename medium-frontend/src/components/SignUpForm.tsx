import { Link } from "react-router-dom";

export const SignUpForm = () => {
  return (
    <div className="h-screen bg-white flex flex-col justify-center">
      <div className="flex justify-center">
        <div className="max-width-lg">
          <div className="text-3xl font-bold">Create an account</div>
          <div className="text-slate-400 text-center text-sm">
            Already have an account?{" "}
            <Link to="/signin" className="underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
