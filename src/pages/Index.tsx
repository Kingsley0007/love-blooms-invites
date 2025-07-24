import WeddingHero from "@/components/WeddingHero";
import EventDetails from "@/components/EventDetails";
import CountdownTimer from "@/components/CountdownTimer";
import RSVP from "@/components/RSVP";
import WeddingFooter from "@/components/WeddingFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <WeddingHero />
      <EventDetails />
      <CountdownTimer />
      <RSVP />
      <WeddingFooter />
    </div>
  );
};

export default Index;
