import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Heart, Send, Sparkles, Mail } from "lucide-react";

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
    <section className="py-20 px-6 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gold-primary/5 rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-accent/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <Sparkles className="absolute top-1/4 left-1/4 w-6 h-6 text-gold-primary/20 animate-sparkle" style={{ animationDelay: '1s' }} />
      <Sparkles className="absolute bottom-1/3 right-1/4 w-4 h-4 text-purple-accent/20 animate-sparkle" style={{ animationDelay: '3s' }} />
      
      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="relative inline-block mb-6">
            <Heart className="w-12 h-12 text-gold-primary mx-auto animate-glow" />
            <Mail className="absolute -top-2 -right-2 w-6 h-6 text-purple-accent animate-sparkle" />
          </div>
          <h2 className="font-script text-4xl md:text-5xl text-gold-secondary mb-4">
            RSVP
          </h2>
          <p className="text-muted-foreground font-serif text-lg">
            Please let us know if you'll be joining our celebration
          </p>
          <div className="w-24 h-0.5 bg-gold-primary mx-auto mt-4"></div>
        </div>

        <Card className="p-8 shadow-elegant border-gold-primary/20 backdrop-blur bg-card/90 animate-scale-in" style={{ animationDelay: '0.3s' }}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2 animate-slide-in-left" style={{ animationDelay: '0.5s' }}>
                <Label htmlFor="name" className="font-serif text-foreground">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-gold-primary/30 focus:border-gold-primary transition-all duration-300 hover:shadow-soft"
                />
              </div>
              
              <div className="space-y-2 animate-slide-in-right" style={{ animationDelay: '0.7s' }}>
                <Label htmlFor="email" className="font-serif text-foreground">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-gold-primary/30 focus:border-gold-primary transition-all duration-300 hover:shadow-soft"
                />
              </div>
            </div>

            <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
              <Label htmlFor="guests" className="font-serif text-foreground">Number of Guests</Label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gold-primary/30 rounded-md focus:outline-none focus:border-gold-primary bg-background transition-all duration-300 hover:shadow-soft"
              >
                {[1, 2, 3, 4, 5].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: '1.1s' }}>
              <Label htmlFor="message" className="font-serif text-foreground">Special Message (Optional)</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Share your wishes for the happy couple..."
                className="border-gold-primary/30 focus:border-gold-primary min-h-[100px] transition-all duration-300 hover:shadow-soft"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full gradient-gold text-cream-primary hover:opacity-90 font-serif text-lg py-3 transition-all duration-300 transform hover:scale-105 animate-fade-in-up relative overflow-hidden group" 
              style={{ animationDelay: '1.3s' }}
            >
              <div className="flex items-center justify-center relative z-10">
                <Send className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Send RSVP
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cream-primary/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default RSVP;