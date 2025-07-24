import { Calendar, Clock, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const EventDetails = () => {
  return (
    <section className="py-20 px-6 bg-cream-primary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-script text-4xl md:text-5xl text-gold-secondary mb-4">
            Celebration Details
          </h2>
          <div className="w-24 h-0.5 bg-gold-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Wedding Ceremony */}
          <Card className="p-8 shadow-elegant border-gold-primary/20 bg-card">
            <div className="text-center">
              <Calendar className="w-12 h-12 text-gold-primary mx-auto mb-6" />
              
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Wedding Celebration
              </h3>
              
              <div className="space-y-4 text-center">
                <div className="border-b border-border pb-4">
                  <p className="text-sm uppercase tracking-wider text-muted-foreground mb-1">
                    Thursday
                  </p>
                  <p className="text-6xl font-bold text-foreground">28</p>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground">
                    August 2025
                  </p>
                </div>
                
                <div className="flex items-center justify-center text-muted-foreground">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">07:30 - 09:00 AM</span>
                </div>
              </div>
            </div>
          </Card>
          
          {/* Engagement & Reception */}
          <Card className="p-8 shadow-elegant border-gold-primary/20 bg-card">
            <div className="text-center">
              <Calendar className="w-12 h-12 text-purple-accent mx-auto mb-6" />
              
              <h3 className="font-script text-2xl text-purple-accent mb-6">
                Engagement with Reception
              </h3>
              
              <div className="space-y-4 text-center">
                <div className="border-b border-border pb-4">
                  <p className="text-sm uppercase tracking-wider text-muted-foreground mb-1">
                    Wednesday
                  </p>
                  <p className="text-6xl font-bold text-foreground">27</p>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground">
                    August 2025
                  </p>
                </div>
                
                <div className="flex items-center justify-center text-muted-foreground">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">06:00 PM</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Venue Information */}
        <Card className="mt-12 p-8 shadow-elegant border-gold-primary/20 bg-card max-w-2xl mx-auto">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-green-accent mx-auto mb-6" />
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Venue
            </h3>
            <p className="text-lg font-semibold text-foreground mb-2">
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