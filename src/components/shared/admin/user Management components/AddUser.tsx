import React from "react";
import ImageUpload from "../ImageUpload";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Asterisk, Check } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";

const AddUser = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data:any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 grid grid-cols-1 md:grid-cols-3 gap-2">
      {/* upload images */}
      <div className={cn("grid border-2 border-dashed max-h-52 justify-self-center col-start-1 col-end-4 md:col-start-1 md:col-end-2 border-gray-300 aspect-square rounded-full hover:text-white hover:bg-orange-500 transition-bg duration-500")}>
        <ImageUpload />
      </div>
      {/* form */}
      <div className="grid col-start-1 md:col-start-2 col-end-4 grid-cols-2 gap-2">
        {/* first name */}
        <div className={cn("grid w-full items-center gap-1.5 col-start-1 col-end-3 md:col-start-1 md:col-end-2")}>
          <Label htmlFor="firstName" className={cn("flex items-center px-3 py-2")}>
            First Name <Asterisk className={cn("w-4 h-4 text-red-500")} />
          </Label>
          <Input
            placeholder="firstName"
            type="text"
            id="firstName"
            className={cn("min-w-[160px] sm:min-w-[100px] focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-0")}
            {...register("firstName", { required: true })}
          />
        </div>
        {/* Last name */}
        <div className={cn("grid w-full items-center gap-1.5 col-start-1 col-end-3 md:col-start-2 md:col-end-3")}>
          <Label htmlFor="lastName" className={cn("flex items-center px-3 py-2")}>
            Last Name <Asterisk className={cn("w-4 h-4 text-red-500")} />
          </Label>
          <Input
            placeholder="lastName"
            type="text"
            id="lastName"
            className={cn("min-w-[160px] sm:min-w-[100px] focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-0")}
            {...register("lastName", { required: true })}
          />
        </div>
        {/* Email */}
        <div className={cn("grid w-full items-center gap-1.5 col-start-1 col-end-3 md:col-start-1 md:col-end-2")}>
          <Label htmlFor="email" className={cn("flex items-center px-3 py-2")}>
            Email Id <Asterisk className={cn("w-4 h-4 text-red-500")} />
          </Label>
          <Input
            placeholder="Email"
            type="email"
            id="email"
            className={cn("min-w-[160px] sm:min-w-[100px] focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-0")}
            {...register("email", { required: true })}
          />
        </div>
        {/* phone Number */}
        <div className={cn("grid w-full items-center gap-1.5 col-start-1 col-end-3 md:col-start-2 md:col-end-3")}>
          <Label htmlFor="phoneNumber" className={cn("flex items-center px-3 py-2")}>
            Phone Number <Asterisk className={cn("w-4 h-4 text-red-500")} />
          </Label>
          <Input
            placeholder="phoneNumber"
            type="number"
            id="phoneNumber"
            className={cn("min-w-[160px] sm:min-w-[100px] focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-0")}
            {...register("phoneNumber", { required: true })}
          />
        </div>
        {/* password */}
        <div className={cn("grid w-full items-center gap-1.5 col-start-1 col-end-3 md:col-start-1 md:col-end-2")}>
          <Label htmlFor="password" className={cn("flex items-center px-3 py-2")}>
            Password <Asterisk className={cn("w-4 h-4 text-red-500")} />
          </Label>
          <Input
            placeholder="password"
            type="password"
            id="password"
            className={cn("min-w-[160px] sm:min-w-[100px] focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-0")}
            {...register("password", { required: true })}
          />
        </div>
        {/* re-password */}
        <div className={cn("grid w-full items-center gap-1.5 col-start-1 col-end-3 md:col-start-2 md:col-end-3")}>
          <Label htmlFor="rePassword" className={cn("flex items-center px-3 py-2")}>
            Re-Enter Password <Asterisk className={cn("w-4 h-4 text-red-500")} />
          </Label>
          <Input
            placeholder="Re-Enter Password"
            type="password"
            id="rePassword"
            className={cn("min-w-[160px] sm:min-w-[100px] focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-0")}
            {...register("rePassword", { required: true })}
          />
        </div>

        {/* userType */}
        <div className={cn("grid col-start-1 col-end-3 gap-4")}>
          <Label htmlFor="roleName">User Type</Label>
          {/* Normal User */}
          <RadioGroup defaultValue="default" className={cn("flex gap-4")}>
            <div className={cn("flex items-center space-x-2")}>
              <RadioGroupItem value="default" id="r1" className={cn("text-orange-500")} />
              <Label htmlFor="r1" className={cn("font-normal")}>
                Normal User
              </Label>
            </div>
            {/* Trek User */}
            <div className={cn("flex items-center space-x-2")}>
              <RadioGroupItem value="trekUser" id="r2" className={cn("text-orange-500")} />
              <Label htmlFor="r2" className={cn("font-normal")}>
                Trek User
              </Label>
            </div>
            {/* Agent */}
            <div className={cn("flex items-center space-x-2")}>
              <RadioGroupItem value="agent" id="r3" className={cn("text-orange-500")} />
              <Label htmlFor="r3" className={cn("font-normal")}>
                Agent
              </Label>
            </div>
          </RadioGroup>
        </div>
        {/* status */}
        <div className={cn("grid col-start-1 col-end-3 gap-4")}>
          <Label htmlFor="roleName">Status</Label>
          <RadioGroup defaultValue="default" className={cn("flex gap-4")}>
            <div className={cn("flex items-center space-x-2")}>
              <RadioGroupItem value="default" id="r1" className={cn("text-orange-500")} />
              <Label htmlFor="r1" className={cn("font-normal")}>
                Active
              </Label>
            </div>
            <div className={cn("flex items-center space-x-2")}>
              <RadioGroupItem value="comfortable" id="r2" className={cn("text-orange-500")} />
              <Label htmlFor="r2" className={cn("font-normal")}>
                Inactive
              </Label>
            </div>
          </RadioGroup>
        </div>
        {/* address */}
        <div className={cn("grid w-full items-center gap-1.5 col-start-1 col-end-3 md:col-start-1 md:col-end-4")}>
          <Label htmlFor="Address" className={cn("flex items-center px-3 py-2")}>
            Address
          </Label>
          <Textarea
            placeholder="Address"
            id="Address"
            className={cn("h-20 flex whitespace-normal items-start focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-0")}
            {...register("address")}
          />
        </div>
        {/* discription */}
        <div className={cn("grid w-full items-center gap-1.5 col-start-1 col-end-3 md:col-start-1 md:col-end-4")}>
          <Label htmlFor="discription" className={cn("flex items-center px-3 py-2")}>
            Discription
          </Label>
          <Textarea
            placeholder="discription"
            id="discription"
            className={cn("h-20 flex whitespace-normal items-start focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-0")}
            {...register("description")}
          />
        </div>
        {/* display main dashboard */}
        <div className={cn("flex w-full mt-2 items-center nowr flex-nowrap gap-1.5 col-start-1 col-end-3 md:col-start-1 md:col-end-4")}>
          <Checkbox id="displayMainDashboard" className={cn("data-[state=checked]:bg-blue-600")} {...register("displayMainDashboard")} />
          <label
            htmlFor="displayMainDashboard"
            className={cn("text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70")}
          >
            Display Main Dashboard
          </label>
        </div>
        {/* Display Expense Dashboard */}
        <div className={cn("flex w-full items-center mt-2 gap-1.5 flex-nowrap col-start-1 col-end-3 md:col-start-1 md:col-end-4")}>
          <Checkbox id="displayExpenseDashboard" className={cn("data-[state=checked]:bg-blue-600")} {...register("displayExpenseDashboard")} />
          <label
            htmlFor="displayExpenseDashboard"
            className={cn("text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70")}
          >
            Display Expense Dashboard
          </label>
        </div>
      </div>
      <hr className={cn("bg-zinc-400 h-[2px] my-4 w-full block col-start-1 col-end-4")} />
      {/* Save */}
      <Button
        type="submit"
        className={cn("mb-4 w-24 font-bold col-start-2 col-end-3 bg-orange-500 hover:bg-orange-400 gap-2 hover:text-white justify-self-center")}
      >
        <Check className={cn("w-5 h-5")} /> Save
      </Button>
    </form>
  );
};

export default AddUser;
