import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FOOD_ITEMS = ["🍩", "🍕", "🍔", "🍟", "🧁", "🍪"];
const BITE_SOUNDS = ["Crunch!", "Mmm!", "Yum!", "Nom!", "Delicious!"];

export const SnackersDemo = () => {
  const [scale, setScale] = useState(1);
  const [bites, setBites] = useState(0);
  const [currentFood, setCurrentFood] = useState(0);
  const [showSound, setShowSound] = useState<string | null>(null);
  const [isComplete, setIsComplete] = useState(false);

  const handleBite = () => {
    if (isComplete) return;
    
    const newScale = scale - 0.15;
    const newBites = bites + 1;
    
    // Show random sound effect
    const randomSound = BITE_SOUNDS[Math.floor(Math.random() * BITE_SOUNDS.length)];
    setShowSound(randomSound);
    setTimeout(() => setShowSound(null), 500);
    
    if (newScale <= 0.1) {
      setIsComplete(true);
      setScale(0);
    } else {
      setScale(newScale);
      setBites(newBites);
    }
  };

  const resetDemo = () => {
    setScale(1);
    setBites(0);
    setIsComplete(false);
    setCurrentFood((prev) => (prev + 1) % FOOD_ITEMS.length);
  };

  useEffect(() => {
    if (isComplete) {
      const timer = setTimeout(resetDemo, 2000);
      return () => clearTimeout(timer);
    }
  }, [isComplete]);

  return (
    <div className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-2xl p-8 overflow-hidden">
      <div className="text-center mb-4">
        <p className="text-sm font-medium text-muted-foreground">
          Tap the food to take a virtual bite!
        </p>
      </div>
      
      <div className="relative h-48 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {!isComplete ? (
            <motion.button
              key="food"
              onClick={handleBite}
              className="relative cursor-pointer select-none focus:outline-none"
              animate={{ scale }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              whileTap={{ scale: scale * 0.9 }}
            >
              <span className="text-[120px] block drop-shadow-lg">
                {FOOD_ITEMS[currentFood]}
              </span>
              
              {/* Bite particles */}
              <AnimatePresence>
                {showSound && (
                  <>
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute text-2xl"
                        initial={{ 
                          opacity: 1, 
                          x: 0, 
                          y: 0,
                          scale: 1
                        }}
                        animate={{ 
                          opacity: 0, 
                          x: (Math.random() - 0.5) * 100,
                          y: (Math.random() - 0.5) * 100,
                          scale: 0.5
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{
                          top: "50%",
                          left: "50%",
                        }}
                      >
                        ✨
                      </motion.div>
                    ))}
                  </>
                )}
              </AnimatePresence>
            </motion.button>
          ) : (
            <motion.div
              key="complete"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center"
            >
              <span className="text-6xl block mb-2">🎉</span>
              <p className="text-lg font-semibold text-primary">All done!</p>
              <p className="text-sm text-muted-foreground">Zero calories consumed</p>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Sound effect popup */}
        <AnimatePresence>
          {showSound && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
              className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold shadow-lg"
            >
              {showSound}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Progress indicator */}
      <div className="mt-4">
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>Bites: {bites}</span>
          <span>{Math.round((1 - scale) * 100)}% eaten</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-primary/70"
            initial={{ width: "0%" }}
            animate={{ width: `${(1 - scale) * 100}%` }}
            transition={{ type: "spring", stiffness: 100 }}
          />
        </div>
      </div>
      
      {/* Stats preview */}
      {bites > 0 && !isComplete && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 grid grid-cols-3 gap-2 text-center"
        >
          <div className="bg-background/50 rounded-lg p-2">
            <p className="text-xs text-muted-foreground">Calories</p>
            <p className="font-bold text-primary">-{bites * 45}</p>
          </div>
          <div className="bg-background/50 rounded-lg p-2">
            <p className="text-xs text-muted-foreground">Saved</p>
            <p className="font-bold text-primary">${(bites * 0.5).toFixed(2)}</p>
          </div>
          <div className="bg-background/50 rounded-lg p-2">
            <p className="text-xs text-muted-foreground">Exercise</p>
            <p className="font-bold text-primary">-{bites * 5}min</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};
