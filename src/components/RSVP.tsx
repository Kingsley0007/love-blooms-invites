import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Heart, Send } from "lucide-react";

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guests: "1",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your RSVP!",
      description: "We're excited to celebrate with you.",
    });
    setFormData({ name: "", email: "", guests: "1", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <Heart className="w-12 h-12 text-gold-primary mx-auto mb-6" />
          <h2 className="font-script text-4xl md:text-5xl text-gold-secondary mb-4">
            RSVP
          </h2>
          <p className="text-muted-foreground font-serif">
            Please let us know if you'll be joining our celebration
          </p>
          <div className="w-24 h-0.5 bg-gold-primary mx-auto mt-4"></div>
        </div>

        <Card className="p-8 shadow-elegant border-gold-primary/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-serif">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-gold-primary/30 focus:border-gold-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="font-serif">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-gold-primary/30 focus:border-gold-primary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="guests" className="font-serif">Number of Guests</Label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gold-primary/30 rounded-md focus:outline-none focus:border-gold-primary bg-background"
              >
                {[1, 2, 3, 4, 5].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="font-serif">Special Message (Optional)</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Share your wishes for the happy couple..."
                className="border-gold-primary/30 focus:border-gold-primary min-h-[100px]"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full gradient-gold text-cream-primary hover:opacity-90 font-serif text-lg py-3"
            >
              <Send className="w-5 h-5 mr-2" />
              Send RSVP
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default RSVP;