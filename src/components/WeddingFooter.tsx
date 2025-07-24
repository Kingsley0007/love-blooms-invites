import { Heart } from "lucide-react";

const WeddingFooter = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Heart className="w-8 h-8 mx-auto mb-4 text-gold-primary fill-current" />
          <h3 className="font-script text-2xl md:text-3xl text-gold-primary mb-2">
            Esakki Lash & Vishwapriya
          </h3>
          <p className="text-sm text-background/80 font-serif">
            August 28, 2025
          </p>
        </div>
        
        <div className="border-t border-background/20 pt-8">
          <p className="text-sm text-background/60 font-serif">
            Thank you for being part of our special day
          </p>
          <p className="text-xs text-background/40 mt-2">
            With love and gratitude ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default WeddingFooter;