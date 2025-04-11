"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import logo from "./ccccc.png";
import { useState } from "react";

// Define form data types
type FormData = {
  email: string;
  password: string;
  remember: boolean;
};

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Login data:", data);
      // Add your actual login logic here
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm bg-white p-8 rounded-lg shadow-sm">
        <div className="flex justify-center mb-4">
          <Image
            src={logo}
            alt="Company Logo"
            width={180}
            height={80}
            className="object-contain"
            priority
          />
        </div>
        <div className="mb-6">
          <div className="mt-4">
            <h2 className="font-bold text-gray-800">WELCOME</h2>
            <p className="text-gray-600 text-sm mt-1">Please login here</p>
          </div>
        </div>

        <div className="space-y-4">
          {/* Email Field */}
          <div className="relative">
            <div className="absolute top-2 left-3 text-xs text-gray-500">
              Email Address
            </div>
            <Input
              type="email"
              className="pt-6 px-3 pb-2"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="relative">
            <div className="absolute top-2 left-3 text-xs text-gray-500">
              Password
            </div>
            <Input
              type="password"
              className="pt-6 px-3 pb-2"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-xs text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="space-y-4 pt-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" {...register("remember")} />
              <Label htmlFor="remember" className="text-sm">
                Remember Me
              </Label>
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}