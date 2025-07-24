import { Heart, Sparkles } from "lucide-react";

const WeddingFooter = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-5 left-10 w-16 h-16 border border-background/10 rounded-full animate-float"></div>
      <div className="absolute bottom-5 right-10 w-12 h-12 border border-background/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <Sparkles className="absolute top-1/3 right-1/4 w-4 h-4 text-gold-primary/30 animate-sparkle" style={{ animationDelay: '1s' }} />
      <Sparkles className="absolute bottom-1/3 left-1/4 w-3 h-3 text-purple-accent/30 animate-sparkle" style={{ animationDelay: '3s' }} />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 animate-fade-in-up">
          <div className="relative inline-block">
            <Heart className="w-8 h-8 mx-auto mb-4 text-gold-primary fill-current animate-glow" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gold-primary rounded-full animate-sparkle"></div>
          </div>
          <h3 className="font-script text-2xl md:text-3xl text-gold-primary mb-2 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Esakkivash & Vishwapriya
          </h3>
          <p className="text-sm text-background/80 font-serif animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            August 28, 2025
          </p>
        </div>
        
        <div className="border-t border-background/20 pt-8 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          <p className="text-sm text-background/60 font-serif hover:text-background/80 transition-colors duration-300">
            Thank you for being part of our special day
          </p>
          <p className="text-xs text-background/40 mt-2 hover:text-background/60 transition-colors duration-300">
            With love and gratitude ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default WeddingFooter;