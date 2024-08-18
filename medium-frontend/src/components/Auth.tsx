import { SignUpInput } from "@ahmad-nadeem/medium-commons";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type: "signin" | "signup" }) => {
  const navigate = useNavigate();
  const [postInputs, setInputs] = useState<SignUpInput>({
    name: "",
    email: "",
    password: "",
  });

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        postInputs
      );
      const jwt = response.data.token;
      localStorage.setItem("JWT_TOKEN", jwt);
      navigate("/blogs");
    } catch (e) {}
  }
  return (
    <div className="h-screen bg-white flex flex-col justify-center">
      <div className="flex justify-center">
        <div className="max-width-lg">
          <div className="px-10">
            <div className="text-3xl font-bold">Create an Account</div>
            <div className="text-slate-400 text-center text-sm">
              {type == "signup"
                ? "Already have an account? "
                : "Dont have an account? "}
              <Link
                to={type == "signup" ? "/signin" : "/signup"}
                className="underline"
              >
                {type == "signup" ? "Login" : "SignUp"}
              </Link>
            </div>
          </div>
          <div>
            <LabeledInput
              label="Username"
              placeholder="Enter Email"
              type={"text"}
              onChange={(e) => {
                setInputs((c) => ({
                  ...c,
                  email: e.target.value,
                }));
              }}
            />

            {type === "signup" && (
              <LabeledInput
                label="Name"
                placeholder="Enter Name"
                type={"text"}
                onChange={(e) => {
                  setInputs((c) => ({
                    ...c,
                    name: e.target.value,
                  }));
                }}
              />
            )}
            <LabeledInput
              label="Password"
              placeholder="Enter Password"
              type={"password"}
              onChange={(e) => {
                setInputs((c) => ({
                  ...c,
                  password: e.target.value,
                }));
              }}
            />
          </div>
          <button
            type="button"
            onClick={sendRequest}
            className="mt-5 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            {type == "signup" ? "Sign Up" : "Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
};

interface LabeledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type: string;
}

function LabeledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabeledInputType) {
  return (
    <div className="mt-4">
      <label className="block mb-2 text-sm text-gray-900 font-bold">
        {label}
      </label>
      <input
        type={type || "text"}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
        onChange={onChange}
      />
    </div>
  );
}
