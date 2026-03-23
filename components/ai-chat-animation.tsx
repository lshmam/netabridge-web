"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, Loader2, User, Sparkles } from "lucide-react"

export function AIChatAnimation() {
  const [stage, setStage] = useState(0)

  useEffect(() => {
    let timeoutIds: NodeJS.Timeout[] = []
    
    const runSequence = () => {
      setStage(0)
      timeoutIds.push(setTimeout(() => setStage(1), 800))   // typing indicator appears
      timeoutIds.push(setTimeout(() => setStage(2), 2500))  // first loading item
      timeoutIds.push(setTimeout(() => setStage(3), 4000))  // first done, second loading
      timeoutIds.push(setTimeout(() => setStage(4), 5500))  // second done, third loading
      timeoutIds.push(setTimeout(() => setStage(5), 7000))  // third done, result appears
      timeoutIds.push(setTimeout(() => runSequence(), 12000)) // restart sequence
    }
    
    runSequence()
    return () => timeoutIds.forEach(clearTimeout)
  }, [])

  return (
    <div className="bg-card border border-border flex flex-col shadow-sm rounded-2xl md:rounded-3xl p-6 md:p-8 w-full min-h-[480px]">
      
      {/* Animation Area */}
      <div className="w-full max-w-2xl mx-auto flex flex-col gap-6 font-sans mb-16 flex-1 pt-4 md:pt-8 min-h-[300px]">
        
        {/* User Message */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-start gap-4 self-end justify-end w-full"
        >
          <div className="bg-muted px-5 py-3 md:px-6 md:py-4 rounded-2xl rounded-tr-sm text-foreground max-w-[85%] border border-border shadow-sm text-sm md:text-base leading-relaxed text-pretty">
            Find certified organic cotton suppliers in Europe with a Trust Score over 90.
          </div>
          <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex-shrink-0 flex items-center justify-center overflow-hidden">
            <User className="w-5 h-5 text-primary" />
          </div>
        </motion.div>

        {/* AI Response Area */}
        <div className="flex items-start gap-4 self-start w-full">
          <div className="w-10 h-10 rounded-full bg-card border border-border flex-shrink-0 flex items-center justify-center shadow-sm text-emerald-500">
            {/* Using Sparkles as the AI icon */}
            <Sparkles className="w-5 h-5" />
          </div>
          
          <div className="flex flex-col gap-2 max-w-[85%] w-full">
            <AnimatePresence mode="wait">
              {stage === 1 && (
                <motion.div 
                  key="typing"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-card px-5 py-3 rounded-2xl rounded-tl-sm border border-border shadow-sm flex items-center justify-center gap-1.5 w-20 h-[52px]"
                >
                  <motion.div className="w-2 h-2 rounded-full bg-muted-foreground" animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0 }} />
                  <motion.div className="w-2 h-2 rounded-full bg-muted-foreground" animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }} />
                  <motion.div className="w-2 h-2 rounded-full bg-muted-foreground" animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.4 }} />
                </motion.div>
              )}
              
              {stage >= 2 && (
                <motion.div 
                  key="card"
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className="bg-card p-5 md:p-6 rounded-2xl rounded-tl-sm border border-border shadow-sm w-full"
                >
                  <p className="text-foreground text-sm md:text-base mb-5 leading-relaxed">
                    Sure! Searching 12,000 verified textile suppliers across 45 countries.
                  </p>
                  
                  <div className="h-px w-full bg-border mb-5" />
                  
                  <div className="flex flex-col gap-4">
                    {/* Item 1 */}
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-3"
                    >
                      {stage === 2 ? (
                        <Loader2 className="w-5 h-5 text-muted-foreground animate-spin flex-shrink-0" />
                      ) : (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      )}
                      <span className={stage === 2 ? "text-muted-foreground text-sm md:text-base" : "text-foreground text-sm md:text-base"}>
                        Cross-referencing supplier capabilities
                      </span>
                    </motion.div>
                    
                    {/* Item 2 */}
                    {stage >= 3 && (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3"
                      >
                        {stage === 3 ? (
                          <Loader2 className="w-5 h-5 text-muted-foreground animate-spin flex-shrink-0" />
                        ) : (
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        )}
                        <span className={stage === 3 ? "text-muted-foreground text-sm md:text-base" : "text-foreground text-sm md:text-base"}>
                          Verifying government registries & certifications
                        </span>
                      </motion.div>
                    )}

                    {/* Item 3 */}
                    {stage >= 4 && (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3"
                      >
                        {stage === 4 ? (
                          <Loader2 className="w-5 h-5 text-muted-foreground animate-spin flex-shrink-0" />
                        ) : (
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        )}
                        <span className={stage === 4 ? "text-muted-foreground text-sm md:text-base" : "text-foreground text-sm md:text-base"}>
                          Calculating real-time Trust Scores
                        </span>
                      </motion.div>
                    )}
                  </div>

                  {/* Final Result */}
                  <AnimatePresence>
                    {stage >= 5 && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0, marginTop: 0, paddingTop: 0 }}
                        animate={{ opacity: 1, height: "auto", marginTop: 20, paddingTop: 16 }}
                        className="font-medium text-foreground text-base md:text-lg border-t border-border overflow-hidden"
                      >
                        I found 14 verified suppliers matching your criteria.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="mt-auto text-left flex flex-col pt-6 border-t border-border/40">
        <h4 className="font-bold tracking-tight text-foreground text-xl md:text-2xl mb-2">Natural language sourcing</h4>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed text-pretty">
          Skip complex filters. Just describe what you need - like "copper cathode suppliers in Brazil" - and our AI will instantly match you with verified partners.
        </p>
      </div>

    </div>
  )
}
