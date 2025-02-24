
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const signInWithEmail = async (email: string, password: string) => {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    toast.error(error.message);
    return false;
  }

  return true;
};

export const signUpWithEmail = async (email: string, password: string) => {
  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    toast.error(error.message);
    return false;
  }

  toast.success("Check your email to confirm your account!");
  return true;
};
