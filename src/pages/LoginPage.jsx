import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { loginUser } from '../store/actions/clientActions';

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    setIsLoading(true);
    
    const credentials = {
      email: data.email,
      password: data.password
    };

    dispatch(loginUser(credentials, data.rememberMe, history))
      .catch(() => {
        // Error is handled by toaster in thunk, so we just stop loading
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="w-full flex flex-col items-center py-12 px-6 bg-[#FAFAFA] min-h-[60vh] justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-sm border border-[#E8E8E8]">
        <h2 className="text-2xl font-bold text-[#252B42] text-center mb-8">Login</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          
          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold text-[#252B42]">Email</label>
            <input 
              type="email"
              className="border border-[#E8E8E8] rounded p-3 outline-none focus:border-[#23A6F0]"
              placeholder="Your Email"
              {...register("email", { 
                required: "Email is required", 
                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address" } 
              })}
            />
            {errors.email && <span className="text-red-500 text-xs font-semibold">{errors.email.message}</span>}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold text-[#252B42]">Password</label>
            <input 
              type="password"
              className="border border-[#E8E8E8] rounded p-3 outline-none focus:border-[#23A6F0]"
              placeholder="Your Password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <span className="text-red-500 text-xs font-semibold">{errors.password.message}</span>}
          </div>
          
          {/* Remember Me */}
          <div className="flex items-center gap-2 mt-2">
             <input type="checkbox" id="rememberMe" {...register("rememberMe")} className="w-4 h-4 cursor-pointer" />
             <label htmlFor="rememberMe" className="text-sm text-[#737373] cursor-pointer">Remember Me</label>
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="mt-4 bg-[#23A6F0] text-white px-6 py-4 font-bold rounded hover:bg-blue-500 transition disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading && <Loader2 className="w-5 h-5 animate-spin" />}
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
