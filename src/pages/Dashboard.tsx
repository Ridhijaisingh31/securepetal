
import { Button } from "@/components/ui/button";
import { useSession } from "@/contexts/SessionContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Dashboard = () => {
  const { user } = useSession();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <Button onClick={handleSignOut} variant="outline">
            Sign out
          </Button>
        </div>
        <div className="bg-card p-6 rounded-lg shadow">
          <h2 className="text-xl font-medium mb-4">Welcome!</h2>
          <p className="text-muted-foreground">
            You are logged in as: {user?.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
