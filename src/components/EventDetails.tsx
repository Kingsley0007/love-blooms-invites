import { Calendar, Clock, MapPin, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const EventDetails = () => {
  return (
    <section className="py-20 px-6 bg-cream-primary relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gold-primary/5 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-accent/5 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      <Star className="absolute top-1/4 right-1/4 w-6 h-6 text-gold-primary/20 animate-sparkle" style={{ animationDelay: '2s' }} />
      <Star className="absolute bottom-1/3 left-1/3 w-4 h-4 text-purple-accent/20 animate-sparkle" style={{ animationDelay: '4s' }} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-script text-4xl md:text-5xl text-gold-secondary mb-4">
            Celebration Details
          </h2>
          <div className="w-24 h-0.5 bg-gold-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Wedding Ceremony */}
          <Card className="p-8 shadow-elegant border-gold-primary/20 bg-card transform hover:scale-105 transition-all duration-300 animate-slide-in-left">
            <div className="text-center">
              <div className="relative">
                <Calendar className="w-12 h-12 text-gold-primary mx-auto mb-6 animate-glow" />
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gold-primary rounded-full animate-sparkle"></div>
              </div>
              
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Wedding Celebration
              </h3>
              
              <div className="space-y-4 text-center">
                <div className="border-b border-border pb-4 transform hover:scale-110 transition-transform duration-300">
                  <p className="text-sm uppercase tracking-wider text-muted-foreground mb-1">
                    Thursday
                  </p>
                  <p className="text-6xl font-bold text-foreground animate-scale-in" style={{ animationDelay: '0.5s' }}>28</p>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground">
                    August 2025
                  </p>
                </div>
                
                <div className="flex items-center justify-center text-muted-foreground hover:text-gold-primary transition-colors duration-300">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">07:30 - 09:00 AM</span>
                </div>
              </div>
            </div>
          </Card>
          
          {/* Engagement & Reception */}
          <Card className="p-8 shadow-elegant border-gold-primary/20 bg-card transform hover:scale-105 transition-all duration-300 animate-slide-in-right">
            <div className="text-center">
              <div className="relative">
                <Calendar className="w-12 h-12 text-purple-accent mx-auto mb-6 animate-glow" style={{ animationDelay: '1s' }} />
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-accent rounded-full animate-sparkle" style={{ animationDelay: '1s' }}></div>
              </div>
              
              <h3 className="font-script text-2xl text-purple-accent mb-6">
                Engagement with Reception
              </h3>
              
              <div className="space-y-4 text-center">
                <div className="border-b border-border pb-4 transform hover:scale-110 transition-transform duration-300">
                  <p className="text-sm uppercase tracking-wider text-muted-foreground mb-1">
                    Wednesday
                  </p>
                  <p className="text-6xl font-bold text-foreground animate-scale-in" style={{ animationDelay: '0.8s' }}>27</p>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground">
                    August 2025
                  </p>
                </div>
                
                <div className="flex items-center justify-center text-muted-foreground hover:text-purple-accent transition-colors duration-300">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">06:00 PM</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Venue Information */}
        <Card className="mt-12 p-8 shadow-elegant border-gold-primary/20 bg-card max-w-2xl mx-auto transform hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          <div className="text-center">
            <div className="relative">
              <MapPin className="w-12 h-12 text-green-accent mx-auto mb-6 animate-glow" style={{ animationDelay: '1.5s' }} />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-accent rounded-full animate-sparkle" style={{ animationDelay: '2s' }}></div>
            </div>
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Venue
            </h3>
            <p className="text-lg font-semibold text-foreground mb-2 hover:text-gold-primary transition-colors duration-300">
              SS GRAND MAHAL
            </p>
            <p className="text-muted-foreground">
              Achampatti - Tenkasi
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default EventDetails;