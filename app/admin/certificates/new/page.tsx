"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import * as z from "zod";

import { CertificateForm } from "./certificate-form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  title: z.string().min(2),
  issuer: z.string().min(2),
  date: z.string(),
  description: z.string().min(10),
  skills: z.string(),
  credentialId: z.string().optional(),
  verifyUrl: z.string().url().optional().or(z.literal('')),
});

type CertificateFormValues = z.infer<typeof formSchema>;

export default function NewCertificatePage() {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values: CertificateFormValues) => {
    try {
      setLoading(true);
      const response = await fetch('/api/certificates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      toast({ title: "Certificate Created Successfully" });
      router.push('/admin/certificates');
      router.refresh();
    } catch (error) {
      toast({
        title: "Error",
        description: "Could not create the certificate.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <CertificateForm 
        onSubmit={onSubmit} 
        loading={loading} 
        initialData={null} 
      />
    </div>
  );
}
