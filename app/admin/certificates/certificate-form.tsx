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
  issuer: z.string().min(2),
  date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Please enter a valid date.",
  }),
  description: z.string().min(10),
  skills: z.string().min(2, { message: "Enter at least one skill."}),
  credentialId: z.string().optional(),
  verifyUrl: z.string().url().optional().or(z.literal('')),
});

type CertificateFormValues = z.infer<typeof formSchema>;

interface CertificateFormProps {
  initialData: any | null;
  onSubmit: (values: CertificateFormValues) => void;
  loading: boolean;
}

export const CertificateForm: React.FC<CertificateFormProps> = ({
  initialData,
  onSubmit,
  loading,
}) => {
  const form = useForm<CertificateFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData ? {
      ...initialData,
      date: new Date(initialData.date).toISOString().substring(0, 10), // Format for input type="date"
      skills: initialData.skills.join(', '),
    } : {
      title: "",
      issuer: "",
      date: "",
      description: "",
      skills: "",
      credentialId: "",
      verifyUrl: "",
    },
  });

  const title = initialData ? "Edit Certificate" : "Add New Certificate";
  const action = initialData ? "Save changes" : "Create Certificate";

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
                  <Input disabled={loading} placeholder="AWS Certified Solutions Architect" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="issuer"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Issuer</FormLabel>
                <FormControl>
                  <Input disabled={loading} placeholder="Amazon Web Services" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date Issued</FormLabel>
                <FormControl>
                  <Input type="date" disabled={loading} {...field} />
                </FormControl>
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
                    placeholder="Describe the certificate..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="skills"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Skills</FormLabel>
                <FormControl>
                  <Input disabled={loading} placeholder="Cloud, AWS, Security" {...field} />
                </FormControl>
                <FormDescription>
                  Enter skills separated by commas.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="credentialId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Credential ID (Optional)</FormLabel>
                <FormControl>
                  <Input disabled={loading} placeholder="ABC-123-XYZ" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="verifyUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Verification URL (Optional)</FormLabel>
                <FormControl>
                  <Input disabled={loading} placeholder="https://www.credly.com/..." {...field} />
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
