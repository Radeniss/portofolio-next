"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import * as z from "zod";

import { PortfolioForm } from "./portfolio-form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  title: z.string().min(2),
  author: z.string().min(2),
  date: z.string(),
  icon: z.string(),
  images: z.string(),
  desc: z.string(),
});

type PortfolioFormValues = z.infer<typeof formSchema>;

export default function NewPortfolioPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values: PortfolioFormValues) => {
    try {
      setLoading(true);
      const response = await fetch('/api/portfolio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      toast({ title: "Portfolio Item Created" });
      router.push('/admin/portfolio');
      router.refresh();
    } catch (error) {
      toast({
        title: "Error",
        description: "Could not create the item.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <PortfolioForm 
        onSubmit={onSubmit} 
        loading={loading} 
        initialData={null} 
      />
    </div>
  );
}
