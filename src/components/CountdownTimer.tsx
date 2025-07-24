import { useState, useEffect } from "react";
import { Sparkles, Timer } from "lucide-react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date("2025-08-28T07:30:00").getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-6 gradient-gold relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-20 w-20 h-20 border border-cream-primary/30 rounded-full animate-float"></div>
      <div className="absolute bottom-10 right-20 w-16 h-16 border-2 border-cream-primary/40 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <Sparkles className="absolute top-1/3 left-1/4 w-8 h-8 text-cream-primary/30 animate-sparkle" style={{ animationDelay: '1s' }} />
      <Sparkles className="absolute bottom-1/3 right-1/3 w-6 h-6 text-cream-primary/40 animate-sparkle" style={{ animationDelay: '3s' }} />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-12 animate-fade-in-up">
          <Timer className="w-16 h-16 text-cream-primary mx-auto mb-6 animate-glow" />
          <h2 className="font-script text-4xl md:text-5xl text-cream-primary mb-4">
            Counting Down to Our Big Day
          </h2>
          <div className="w-32 h-0.5 bg-cream-primary/80 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds }
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-cream-primary/10 backdrop-blur rounded-lg p-6 shadow-soft border border-cream-primary/20 transform hover:scale-110 transition-all duration-300 animate-scale-in" 
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-cream-primary mb-2 animate-glow">
                {item.value.toString().padStart(2, '0')}
              </div>
              <div className="text-sm uppercase tracking-wider text-cream-primary/80">
                {item.label}
              </div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-cream-primary rounded-full animate-sparkle opacity-60"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <p className="text-cream-primary/90 font-serif text-lg">
            Until we become one ❤️
          </p>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;