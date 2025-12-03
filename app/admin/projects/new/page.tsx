"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import * as z from "zod";

import { ProjectForm } from "./project-form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(10),
  status: z.string(),
  technologies: z.string(),
  githubUrl: z.string().url().optional().or(z.literal('')),
  liveUrl: z.string().url().optional().or(z.literal('')),
});

type ProjectFormValues = z.infer<typeof formSchema>;

export default function NewProjectPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values: ProjectFormValues) => {
    try {
      setLoading(true);
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      toast({ title: "Project Created Successfully" });
      router.push('/admin/projects');
      router.refresh();
    } catch (error) {
      toast({
        title: "Error",
        description: "Could not create the project.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <ProjectForm 
        onSubmit={onSubmit} 
        loading={loading} 
        initialData={null} 
      />
    </div>
  );
}