"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { roleItem, RoleType } from "@/constants/roles";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

export default function CheckboxForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: ["SEO", "Destination"],
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <code className={cn("text-black")}>
          {data.items.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </code>
      ),
    });
  }

  return (
    <Form {...form}>
      <div className={cn("p-4 grid gap-4")}>
        {/*Role name and status */}
        <div className={cn("flex my-4 gap-4 flex-col lg:flex-row")}>
          <div className={cn("grid w-full max-w-sm items-center gap-4")}>
            <Label htmlFor="roleName">Role Name</Label>
            <Input
              type="text"
              id="roleName"
              placeholder="Role Name"
              className={cn("focus-visible:ring-0 focus-visible:ring-offset-0")}
            />
          </div>
          {/* status */}
          <div className={cn("grid gap-4")}>
            <Label htmlFor="roleName">Status</Label>
            <RadioGroup defaultValue="comfortable" className={cn("flex gap-4")}>
              <div className={cn("flex items-center space-x-2")}>
                <RadioGroupItem value="default" id="r1" className={cn("text-orange-500")} />
                <Label htmlFor="r1">Active</Label>
              </div>
              <div className={cn("flex items-center space-x-2")}>
                <RadioGroupItem value="comfortable" id="r2" className={cn("text-orange-500")} />
                <Label htmlFor="r2">Inactive</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        {/* check boxs */}
        <div className={cn("space-y-8 grid gap-4")}>
          <FormField
            control={form.control}
            name="items"
            render={() => (
              <FormItem>
                <div className={cn("mb-4")}>
                  <FormLabel className={cn("text-base")}>Access</FormLabel>
                  <FormDescription>Select the role of your user.</FormDescription>
                </div>
                <div className={cn("grid xs:grid-cols-1 grid-cols-2 lg:grid-cols-3 gap-y-2")}>
                  {roleItem.map((item: RoleType) => (
                    <FormField
                      key={item.name}
                      control={form.control}
                      name="items"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.name}
                            className={cn("flex flex-row items-start space-x-3 space-y-0")}
                          >
                            <FormControl>
                              <Checkbox
                                className={cn("data-[state=checked]:bg-orange-500 data-[state=checked]:text-white")}
                                checked={field.value?.includes(item.name)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.name])
                                    : field.onChange(
                                        field.value?.filter((value:string) => value !== item.name)
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className={cn("text-sm font-normal")}>
                              {item.name}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* discription */}
        <div>
          <div className={cn("grid w-full gap-2")}>
            <Label htmlFor="message">Despriction</Label>
            <Textarea
              placeholder="Despriction"
              id="message"
              className={cn("max-w-96")}
            />
          </div>
        </div>
        <hr className={cn("bg-zinc-400 h-[2px] my-4")} />

        {/* Save */}
        <Button
          onClick={form.handleSubmit(onSubmit)}
          type="submit"
          className={cn("mb-4 w-24 font-bold bg-orange-500 hover:bg-orange-400 gap-2 hover:text-white justify-self-center")}
        >
          <Check className={cn("w-5 h-5")} /> Save
        </Button>
      </div>

      <Toaster />
    </Form>
  );
}