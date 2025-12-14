"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { Certificate } from "@prisma/client";

import { CertificateForm } from "../certificate-form";
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

interface EditCertificateClientProps {
  certificate: Certificate;
}

export const EditCertificateClient: React.FC<EditCertificateClientProps> = ({ certificate }) => {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values: CertificateFormValues) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/certificates/${certificate.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      toast({ title: "Certificate Updated Successfully" });
      router.push('/admin/certificates');
      router.refresh();
    } catch (error) {
      toast({
        title: "Error",
        description: "Could not update the certificate.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <CertificateForm 
      onSubmit={onSubmit} 
      loading={loading} 
      initialData={certificate} 
    />
  );
}
