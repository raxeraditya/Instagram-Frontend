import { FaSquareGithub } from "react-icons/fa6";

export default function SocialLogin() {
  return (
    <>
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or continue with</span>
        </div>
      </div>

      <button
        type="button"
        className="w-full flex items-center justify-center space-x-2 bg-gray-50 text-gray-700 py-3 px-4 rounded-lg
          hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-200
          border border-gray-300"
      >
        <FaSquareGithub className="h-5 w-5" />
        <span>GitHub</span>
      </button>
    </>
  );
}
