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

const formSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(10),
  status: z.string(),
  technologies: z.string(),
  githubUrl: z.string().url().optional().or(z.literal('')),
  liveUrl: z.string().url().optional().or(z.literal('')),
});

type ProjectFormValues = z.infer<typeof formSchema>;

interface ProjectFormProps {
  initialData: any | null; // Prisma's Project type
  onSubmit: (values: ProjectFormValues) => void;
  loading: boolean;
}

export const ProjectForm: React.FC<ProjectFormProps> = ({
  initialData,
  onSubmit,
  loading,
}) => {
  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData ? {
      ...initialData,
      technologies: initialData.technologies.join(', '),
    } : {
      title: "",
      description: "",
      status: "In Progress",
      technologies: "",
      githubUrl: "",
      liveUrl: "",
    },
  });

  const title = initialData ? "Edit Project" : "Add New Project";
  const action = initialData ? "Save changes" : "Create Project";

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold mb-6">{title}</h1>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input disabled={loading} placeholder="My Awesome Project" {...field} />
                </FormControl>
                <FormDescription>
                  This is the public display name of your project.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    disabled={loading}
                    placeholder="Describe your project..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="technologies"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Technologies</FormLabel>
                <FormControl>
                  <Input disabled={loading} placeholder="React, Next.js, etc." {...field} />
                </FormControl>
                <FormDescription>
                  Enter technologies separated by commas.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="githubUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>GitHub URL</FormLabel>
                <FormControl>
                  <Input disabled={loading} placeholder="https://github.com/..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="liveUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Live URL</FormLabel>
                <FormControl>
                  <Input disabled={loading} placeholder="https://my-project.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={loading} type="submit">{action}</Button>
        </form>
      </Form>
    </>
  );
};
