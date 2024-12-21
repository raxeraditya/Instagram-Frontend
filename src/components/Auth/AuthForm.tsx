import React from "react";
import InputField from "./InputField";
import SocialLogin from "./SocialLogin";
import { client } from "../../utils/constant";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { z } from "zod";
import { loginSchema, signupSchema } from "../../Types/Auth";
import { useUserStore } from "../../Store/UserStore";
import { FaLock, FaUser } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

interface AuthFormProps {
  isLogin: boolean;
  onToggle: () => void;
}

export default function AuthForm({ isLogin, onToggle }: AuthFormProps) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const setUser = useUserStore((state) => state.saveUser);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      // Validate form data based on the current mode (login or signup)
      if (isLogin) {
        loginSchema.parse({
          username: formData.name,
          password: formData.password,
        });
      } else {
        signupSchema.parse({
          username: formData.name,
          email: formData.email,
          password: formData.password,
        });
      }

      if (isLogin) {
        const LoginData = {
          username: formData.name,
          password: formData.password,
        };
        const LoginUser = await client.post("/v1/login", LoginData);
        console.log(LoginUser);
        setUser({
          username: LoginUser.data.data.username,
          userid: LoginUser.data.data.userid,
          email: LoginUser.data.data.email,
          avatar: LoginUser.data.data.avatar,
        });
        console.log(setUser);
        toast.success(LoginUser.data.message || "Login successful!");
      } else {
        const SignupData = {
          username: formData.name,
          email: formData.email,
          password: formData.password,
        };
        const SignupUser = await client.post("/v1/register", SignupData);
        console.log(SignupUser);
        setUser({
          username: SignupUser.data.data.username,
          userid: SignupUser.data.data.userid,
          email: SignupUser.data.data.email,
          avatar: SignupUser.data.data.avatar,
        });
        toast.success(SignupUser.data.message || "Signup successful!");
      }
      navigate("/");
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        error.errors.forEach((err) => toast.error(err.message));
      } else if (axios.isAxiosError(error) && error.response) {
        // Handle server errors
        toast.error(error.response.data.message || "Something went wrong!");
      } else {
        // Handle unexpected errors
        toast.error("An unexpected error occurred.");
      }
    } finally {
      setIsLoading(false); // Reset loading state regardless of success or failure
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="w-full transform transition-all duration-500">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {isLogin ? "Welcome back" : "Create account"}
        </h1>
        <p className="text-gray-600">
          {isLogin
            ? "Sign in to continue your journey"
            : "Start your journey with us"}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {!isLogin && (
          <InputField
            id="email"
            type="email"
            label="Email address"
            value={formData.email}
            onChange={handleChange}
            icon={<CiMail className="h-5 w-5 text-black" />}
            name="email"
            required
          />
        )}
        <InputField
          id="name"
          type="text"
          label="Full Name"
          value={formData.name}
          onChange={handleChange}
          icon={<FaUser className="h-5 w-5 text-black" />}
          name="name"
          required
        />
        <InputField
          id="password"
          type="password"
          label="Password"
          value={formData.password}
          onChange={handleChange}
          icon={<FaLock className="h-5 w-5 text-black" />}
          name="password"
          required
        />

        {isLogin && (
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-gray-600">Remember me</span>
            </label>
            <a
              href="#"
              className="text-indigo-600 hover:text-indigo-500 font-medium transition-colors"
            >
              Forgot password?
            </a>
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium
            hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
            transform transition-all duration-200 ease-in-out hover:scale-[1.02]
            disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            </div>
          ) : isLogin ? (
            "Sign in"
          ) : (
            "Create account"
          )}
        </button>

        <SocialLogin />
      </form>

      <p className="text-center mt-8 text-sm text-gray-600">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          onClick={onToggle}
          className="text-indigo-600 hover:text-indigo-500 font-medium transition-colors"
        >
          {isLogin ? "Sign up" : "Sign in"}
        </button>
      </p>
    </div>
  );
}
