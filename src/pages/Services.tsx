import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-display font-bold mb-8">Wedding Services</h1>
      <p className="text-muted-foreground mb-4">Browse our verified wedding services.</p>
      <Button asChild><Link to="/">Back to Home</Link></Button>
    </div>
  );
}
