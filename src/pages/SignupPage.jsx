import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { axiosInstance } from '../api/axiosInstance';
import { Loader2 } from 'lucide-react';

const SignupPage = () => {
  const [roles, setRoles] = useState([]);
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm({
    defaultValues: {
      role_id: "" // We will set this dynamically once roles load
    }
  });

  const selectedRoleId = watch('role_id');
  const password = watch('password');

  useEffect(() => {
    axiosInstance.get('/roles')
      .then(res => {
        setRoles(res.data);
        const customerRole = res.data.find(r => r.code === 'customer');
        if (customerRole) {
          setValue('role_id', customerRole.id);
        }
      })
      .catch(err => {
        console.error('Failed to fetch roles', err);
        // Fallback for demonstration if API fails or blocks
        setRoles([
          { id: '1', code: 'admin', name: 'Admin' },
          { id: '2', code: 'store', name: 'Store' },
          { id: '3', code: 'customer', name: 'Customer' },
        ]);
      });
  }, []);

  const onSubmit = (data) => {
    setIsLoading(true);

    const payload = {
      name: data.name,
      email: data.email,
      password: data.password,
      role_id: data.role_id,
    };

    const selectedRole = roles.find(r => r.id == data.role_id);
    if (selectedRole && selectedRole.code === 'store') {
      payload.store = {
        name: data.store_name,
        phone: data.store_phone,
        tax_no: data.store_tax_no,
        bank_account: data.store_bank_account,
      };
    }

    axiosInstance.post('/signup', payload)
      .then(res => {
        toast.success("You need to click link in email to activate your account!");
        history.goBack();
      })
      .catch(err => {
        toast.error(err.response?.data?.message || "Signup failed!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const selectedRoleCode = roles.find(r => r.id == selectedRoleId)?.code;
  const isStore = selectedRoleCode === 'store';
  
  // Default selection
  const customerRole = roles.find(r => r.code === 'customer');

  return (
    <div className="w-full flex flex-col items-center py-12 px-6 bg-[#FAFAFA] min-h-screen">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-sm border border-[#E8E8E8]">
        <h2 className="text-2xl font-bold text-[#252B42] text-center mb-8">Sign Up</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          
          {/* Name */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold text-[#252B42]">Name</label>
            <input 
              type="text"
              className="border border-[#E8E8E8] rounded p-3 outline-none focus:border-[#23A6F0]"
              placeholder="Your Name"
              {...register("name", { required: "Name is required", minLength: { value: 3, message: "Minimum 3 characters" } })}
            />
            {errors.name && <span className="text-red-500 text-xs font-semibold">{errors.name.message}</span>}
          </div>

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
              {...register("password", { 
                required: "Password is required", 
                minLength: { value: 8, message: "Minimum 8 characters" },
                pattern: { 
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 
                  message: "Must include numbers, lower case, upper case and special chars" 
                }
              })}
            />
            {errors.password && <span className="text-red-500 text-xs font-semibold">{errors.password.message}</span>}
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold text-[#252B42]">Confirm Password</label>
            <input 
              type="password"
              className="border border-[#E8E8E8] rounded p-3 outline-none focus:border-[#23A6F0]"
              placeholder="Confirm Password"
              {...register("confirmPassword", { 
                required: "Please confirm your password",
                validate: value => value === password || "Passwords do not match"
              })}
            />
            {errors.confirmPassword && <span className="text-red-500 text-xs font-semibold">{errors.confirmPassword.message}</span>}
          </div>

          {/* Role Selection */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold text-[#252B42]">Role</label>
            <select 
              className="border border-[#E8E8E8] rounded p-3 outline-none focus:border-[#23A6F0] bg-white"
              defaultValue={customerRole?.id || ""}
              {...register("role_id", { required: "Role is required" })}
            >
              {roles.map(role => (
                <option key={role.id} value={role.id}>{role.name}</option>
              ))}
            </select>
            {errors.role_id && <span className="text-red-500 text-xs font-semibold">{errors.role_id.message}</span>}
          </div>

          {/* Store specific fields */}
          {isStore && (
            <div className="flex flex-col gap-4 mt-4 p-4 border border-[#E8E8E8] rounded bg-[#F9F9F9]">
              <h3 className="font-bold text-[#252B42] mb-2">Store Information</h3>
              
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-[#252B42]">Store Name</label>
                <input 
                  type="text"
                  className="border border-[#E8E8E8] rounded p-3 outline-none focus:border-[#23A6F0]"
                  placeholder="Store Name"
                  {...register("store_name", { required: "Store Name is required", minLength: { value: 3, message: "Minimum 3 characters" } })}
                />
                {errors.store_name && <span className="text-red-500 text-xs font-semibold">{errors.store_name.message}</span>}
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-[#252B42]">Store Phone</label>
                <input 
                  type="tel"
                  className="border border-[#E8E8E8] rounded p-3 outline-none focus:border-[#23A6F0]"
                  placeholder="05XXXXXXXXX"
                  {...register("store_phone", { 
                    required: "Store Phone is required", 
                    pattern: { value: /^(\+90|0)?5[0-9]{9}$/, message: "Valid Türkiye phone number required" } 
                  })}
                />
                {errors.store_phone && <span className="text-red-500 text-xs font-semibold">{errors.store_phone.message}</span>}
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-[#252B42]">Store Tax ID</label>
                <input 
                  type="text"
                  className="border border-[#E8E8E8] rounded p-3 outline-none focus:border-[#23A6F0]"
                  placeholder="TXXXXVXXXXXX"
                  {...register("store_tax_no", { 
                    required: "Store Tax ID is required", 
                    pattern: { value: /^T[0-9]{4}V[0-9]{6}$/, message: "Pattern must be TXXXXVXXXXXX" } 
                  })}
                />
                {errors.store_tax_no && <span className="text-red-500 text-xs font-semibold">{errors.store_tax_no.message}</span>}
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-[#252B42]">Bank Account (IBAN)</label>
                <input 
                  type="text"
                  className="border border-[#E8E8E8] rounded p-3 outline-none focus:border-[#23A6F0]"
                  placeholder="TRXXXXXXXXXXXXXXXXXXXXXXXX"
                  {...register("store_bank_account", { 
                    required: "IBAN is required", 
                    pattern: { value: /^TR[0-9]{24}$/, message: "Valid IBAN required" } 
                  })}
                />
                {errors.store_bank_account && <span className="text-red-500 text-xs font-semibold">{errors.store_bank_account.message}</span>}
              </div>
            </div>
          )}

          <button 
            type="submit" 
            disabled={isLoading}
            className="mt-4 bg-[#23A6F0] text-white px-6 py-4 font-bold rounded hover:bg-blue-500 transition disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading && <Loader2 className="w-5 h-5 animate-spin" />}
            {isLoading ? "Submitting..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
