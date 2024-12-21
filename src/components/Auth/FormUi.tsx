import { useState } from "react";
import AuthForm from "./AuthForm";

function FormUi() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4 h-screen">
      <div className="bg-white rounded-2xl shadow-xl w-full sm:w-1/2 lg:w-1/3">
        <div className="sm:py-5 sm:px-5 p-4">
          <AuthForm isLogin={isLogin} onToggle={() => setIsLogin(!isLogin)} />
        </div>
      </div>
    </div>
  );
}

export default FormUi;
