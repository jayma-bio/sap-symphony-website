/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "@/lib/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

interface NewsletterSubscription {
  email: string;
}

export const useNewsletterMutation = () => {
  return useMutation({
    mutationFn: async (credentials: NewsletterSubscription) => {
      const response = await api.post("/newsletters", {
        data: credentials,
      });
      return response.data;
    },
    onSuccess: () => {
      toast.success("Subscribed successfully! 🎉");
    },
    onError: (error: any) => {
      toast.error("Already Subscribed", {
        style: {
          background: "#ffffff",
          color: "var(--primary)",
          border: "1px solid var(--border)",
        },
      });
    },
  });
};
