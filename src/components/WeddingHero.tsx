import { Heart, Sparkles } from "lucide-react";
import weddingFlowers from "@/assets/wedding-flowers.jpg";

const WeddingHero = () => {
  return (
    <section className="min-h-screen gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Background floral elements */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={weddingFlowers} 
          alt="Wedding flowers" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-gold-primary/30 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-15 w-16 h-16 border border-purple-accent/40 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-gold-primary rounded-full animate-sparkle"></div>
      <div className="absolute bottom-1/3 left-16 w-3 h-3 bg-purple-accent rounded-full animate-sparkle" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold-secondary rounded-full animate-sparkle" style={{ animationDelay: '3s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-purple-accent rounded-full animate-sparkle" style={{ animationDelay: '4s' }}></div>
      
      {/* Sparkle icons */}
      <Sparkles className="absolute top-20 right-1/3 w-6 h-6 text-gold-primary/40 animate-sparkle" style={{ animationDelay: '1.5s' }} />
      <Sparkles className="absolute bottom-32 left-1/4 w-4 h-4 text-purple-accent/40 animate-sparkle" style={{ animationDelay: '2.5s' }} />
      
      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        {/* Top text with animation */}
        <p className="text-sm md:text-base uppercase tracking-[0.3em] text-muted-foreground mb-8 font-serif animate-fade-in">
          Together with our families
        </p>
        
        {/* Geometric frame with enhanced animations */}
        <div className="relative inline-block mb-8 animate-scale-in" style={{ animationDelay: '0.3s' }}>
          {/* Outer diamond with glow effect */}
          <div className="absolute inset-0 border-2 border-gold-primary transform rotate-45 w-80 h-80 mx-auto animate-glow"></div>
          {/* Inner diamond */}
          <div className="absolute inset-4 border border-gold-secondary transform rotate-45 w-72 h-72 mx-auto"></div>
          
          {/* Names container */}
          <div className="relative z-10 py-16 px-8">
            <h1 className="font-script text-4xl md:text-6xl lg:text-7xl text-gold-secondary mb-4 leading-tight animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              Esakkivash
            </h1>
            <div className="flex items-center justify-center my-6 animate-scale-in" style={{ animationDelay: '0.9s' }}>
              <div className="w-12 h-0.5 bg-gold-primary"></div>
              <Heart className="mx-4 w-6 h-6 text-gold-primary fill-current animate-glow" />
              <div className="w-12 h-0.5 bg-gold-primary"></div>
            </div>
            <h2 className="font-script text-2xl md:text-4xl lg:text-5xl text-gold-secondary mb-2 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
              Weds
            </h2>
            <h1 className="font-script text-4xl md:text-6xl lg:text-7xl text-gold-secondary leading-tight animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
              Vishwapriya
            </h1>
          </div>
        </div>
        
        {/* Bottom invitation text */}
        <div className="space-y-2 font-serif text-sm md:text-base animate-fade-in-up" style={{ animationDelay: '1.8s' }}>
          <p className="uppercase tracking-wider text-foreground">
            Invite you to join our
          </p>
          <p className="uppercase tracking-wider text-foreground font-semibold">
            Wedding Celebration
          </p>
        </div>
      </div>
    </section>
  );
};

export default WeddingHero;