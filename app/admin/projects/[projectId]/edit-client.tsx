"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { Project } from "@prisma/client";

import { ProjectForm } from "../project-form";
import { toast } from "@/components/ui/use-toast";

const formSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(10),
  status: z.string(),
  technologies: z.string(),
  githubUrl: z.string().url().optional().or(z.literal('')),
  liveUrl: z.string().url().optional().or(z.literal('')),
});

type ProjectFormValues = z.infer<typeof formSchema>;

interface EditProjectClientProps {
  project: Project;
}

export const EditProjectClient: React.FC<EditProjectClientProps> = ({ project }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values: ProjectFormValues) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/projects/${project.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      toast({ title: "Project Updated Successfully" });
      router.push('/admin/projects');
      router.refresh();
    } catch (error) {
      toast({
        title: "Error",
        description: "Could not update the project.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProjectForm 
      onSubmit={onSubmit} 
      loading={loading} 
      initialData={project} 
    />
  );
}
