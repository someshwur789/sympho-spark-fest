import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AudioPlayer = () => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Set a lower volume
      audioRef.current.loop = true;
    }
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play().catch(e => console.log('Audio play failed:', e));
      } else {
        audioRef.current.pause();
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed top-2 right-2 sm:top-4 sm:right-4 z-50">
      <Button
        variant="outline"
        size="icon"
        onClick={toggleMute}
        className="bg-background/90 backdrop-blur-sm border-primary/30 hover:bg-background/95 
                   transition-all duration-300 hover:scale-105 hover:shadow-lg
                   w-10 h-10 sm:w-12 sm:h-12 glow-border"
        aria-label={isMuted ? "Unmute background audio" : "Mute background audio"}
      >
        {isMuted ? (
          <VolumeX className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
        ) : (
          <Volume2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary animate-pulse" />
        )}
      </Button>
      <audio
        ref={audioRef}
        src="https://www.soundjay.com/misc/sounds/wind-chimes-1.wav"
        preload="auto"
      />
    </div>
  );
};

export default AudioPlayer;