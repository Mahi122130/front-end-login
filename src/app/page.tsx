"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import logo from "./ccccc.png"; // Import the image from src/app

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-sm">
        {/* Replaced Logoipsum text with imported image */}
        <div className="flex justify-center mb-4">
          <Image
            src={logo} // Use the imported image
            alt="Company Logo"
            width={180} // Adjust as needed
            height={80} // Adjust as needed
            className="object-contain"
            priority
          />
        </div>

        {/* Welcome Section */}
        <div className="mb-6">
          <div className="mt-4"> {/* Added margin-top and left alignment */}
            <h2 className="font-bold text-gray-800">WELCOME</h2>
            <p className="text-gray-600 text-sm mt-1">Please login here</p>
          </div>
        </div>

        {/* Login Form */}
        <div className="space-y-4">
          {/* Email Field with Label Inside */}
          <div className="relative">
            <div className="absolute top-2 left-3 text-xs text-gray-500">Email Address</div>
            <Input 
              type="email" 
              className="pt-6 px-3 pb-2"
            />
          </div>

          {/* Password Field with Label Inside */}
          <div className="relative">
            <div className="absolute top-2 left-3 text-xs text-gray-500">Password</div>
            <Input 
              type="password" 
              className="pt-6 px-3 pb-2"
            />
          </div>

          {/* Remember Me & Login */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="text-sm">Remember Me</Label>
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}