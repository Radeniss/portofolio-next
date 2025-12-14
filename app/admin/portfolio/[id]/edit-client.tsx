"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { PortfolioItem } from "@prisma/client";

import { PortfolioForm } from "../portfolio-form";
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

interface EditPortfolioClientProps {
  item: PortfolioItem;
}

export const EditPortfolioClient: React.FC<EditPortfolioClientProps> = ({ item }) => {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values: PortfolioFormValues) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/portfolio/${item.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      toast({ title: "Portfolio Item Updated" });
      router.push('/admin/portfolio');
      router.refresh();
    } catch (error) {
      toast({
        title: "Error",
        description: "Could not update the item.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <PortfolioForm 
      onSubmit={onSubmit} 
      loading={loading} 
      initialData={item} 
    />
  );
}
