"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Schema matches the API route validation
const formSchema = z.object({
  title: z.string().min(2),
  author: z.string().min(2),
  date: z.string().refine((val) => !isNaN(Date.parse(val)), { message: "Please enter a valid date." }),
  icon: z.string().min(1, { message: "Icon is required." }),
  images: z.string().min(1, { message: "Enter at least one image URL." }),
  desc: z.string().min(10, { message: "Description is required." }),
});

type PortfolioFormValues = z.infer<typeof formSchema>;

interface PortfolioFormProps {
  initialData: any | null;
  onSubmit: (values: PortfolioFormValues) => void;
  loading: boolean;
}

export const PortfolioForm: React.FC<PortfolioFormProps> = ({
  initialData,
  onSubmit,
  loading,
}) => {
  const form = useForm<PortfolioFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData ? {
      ...initialData,
      date: new Date(initialData.date).toISOString().substring(0, 10),
      images: initialData.images.join(', '),
      desc: initialData.desc.join('; '),
    } : {
      title: "",
      author: "",
      date: "",
      icon: "",
      images: "",
      desc: "",
    },
  });

  const title = initialData ? "Edit Portfolio Item" : "Add New Portfolio Item";
  const action = initialData ? "Save changes" : "Create Item";

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold mb-6">{title}</h1>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Form Fields will go here */}
          <FormField name="title" control={form.control} render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl><Input disabled={loading} placeholder="Item Title" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField name="author" control={form.control} render={({ field }) => (
            <FormItem>
              <FormLabel>Author</FormLabel>
              <FormControl><Input disabled={loading} placeholder="Author Name" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField name="date" control={form.control} render={({ field }) => (
            <FormItem>
              <FormLabel>Date</FormLabel>
              <FormControl><Input type="date" disabled={loading} {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField name="icon" control={form.control} render={({ field }) => (
            <FormItem>
              <FormLabel>Icon</FormLabel>
              <FormControl><Input disabled={loading} placeholder="e.g., Briefcase" {...field} /></FormControl>
              <FormDescription>Name of the lucide-react icon.</FormDescription>
              <FormMessage />
            </FormItem>
          )} />
          <FormField name="images" control={form.control} render={({ field }) => (
            <FormItem>
              <FormLabel>Image URLs</FormLabel>
              <FormControl><Textarea disabled={loading} placeholder="URL1, URL2, URL3" {...field} /></FormControl>
              <FormDescription>Enter image URLs separated by commas.</FormDescription>
              <FormMessage />
            </FormItem>
          )} />
          <FormField name="desc" control={form.control} render={({ field }) => (
            <FormItem>
              <FormLabel>Description Paragraphs</FormLabel>
              <FormControl><Textarea disabled={loading} placeholder="Paragraph 1; Paragraph 2" {...field} /></FormControl>
              <FormDescription>Enter paragraphs separated by a semicolon (;).</FormDescription>
              <FormMessage />
            </FormItem>
          )} />
          <Button disabled={loading} type="submit">{action}</Button>
        </form>
      </Form>
    </>
  );
};
