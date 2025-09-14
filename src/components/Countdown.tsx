import { useState, useEffect } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2024-09-26T00:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const CountdownCard = ({ value, label }: { value: number; label: string }) => (
    <div className="glow-card bg-card rounded-xl p-6 text-center min-w-[120px]">
      <div className="text-4xl md:text-5xl font-bold text-[hsl(var(--countdown-bg))] mb-2">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">
        {label}
      </div>
    </div>
  );

  return (
    <section className="py-20 px-4 bg-background/50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[hsl(var(--countdown-bg))] tracking-wider">
          COUNTDOWN TO EVENTS DAY
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <CountdownCard value={timeLeft.days} label="Days" />
          <CountdownCard value={timeLeft.hours} label="Hours" />
          <CountdownCard value={timeLeft.minutes} label="Minutes" />
          <CountdownCard value={timeLeft.seconds} label="Seconds" />
        </div>

        <div className="mt-12">
          <p className="text-lg text-muted-foreground">
            Don't miss out on the biggest AI & Data Science event of the year!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Countdown;