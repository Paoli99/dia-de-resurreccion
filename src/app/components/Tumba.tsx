'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Tumba() {
  const [open, setOpen] = useState(false)
  const [showCouple, setShowCouple] = useState(false)
  const [showVictory, setShowVictory] = useState(false)

  /* useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true)
      setTimeout(() => setShowCouple(true), 1000) 
    }, 500)

    return () => clearTimeout(timer)
  }, [])
 */

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 500)
    const victoryTimer = setTimeout(() => setShowVictory(true), 1000) // Después de la animación de piedra
    return () => {
      clearTimeout(timer)
      clearTimeout(victoryTimer)
    }
  }, [])

  return (
    <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 w-[500px] sm:w-[1200px] h-[500px] sm:h-[550px] z-20">
      {/* Imagen de la tumba */}
      <img
        src="/assets/tumba.png"
        alt="Tumba"
        className="w-full h-full object-contain z-10"
      />

      {/* Piedra que se mueve */}
      <motion.img
        src="/assets/piedra.png"
        alt="Piedra"
        initial={{ x: 0 }}
        animate={{ x: open ? 140 : 0, rotate: open ? 360 : 0  }}
        transition={{ duration: 1 }}
        className="absolute bottom-[32%] sm:bottom-[25%] left-[25%] w-[200px] sm:w-[300px] sm:left-[50%] h-auto object-contain z-20"
      />

{/* {showCouple && (
        <motion.img
          src="/assets/pareja.png"
          alt="Pareja"
          initial={{ opacity: 0, scale: 0.6, y: 60 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute bottom-[22%] left-1/2 -translate-x-1/2 w-[160px] sm:w-[240px] h-auto object-contain z-30"
        />
      )} */}

{showVictory && (
       <div
       className="absolute left-1/2 -translate-x-1/2 top-1/3 w-[420px] sm:w-[800px] h-[90px] sm:h-[120px] text-white text-center text-[34px] sm:text-[64px] font-bold z-30 leading-[90px] sm:leading-[120px]"
       style={{
         fontFamily: 'BurbankBigCondensed-Black',
         backgroundColor: '#457DB6',
         clipPath:
           'polygon(0% 0%, 75.5% 5.8%, 76.2% 11.6%, 88.96% 10%, 91% 16.66%, 91.95% 7.5%, 100% 5%, 97.45% 100%, 72.41% 96.67%, 71.49% 91.67%, 70.46% 95.83%, 39.66% 93.33%, 38.16% 100%, 1.61% 95.83%)',
         opacity: 0.9,
       }}
     >
       <span className="relative inline-block">
         Victory Royale!
         <span
           className="absolute text-yellow-300 -top-[10px] left-[-80px] sm:-top-[5px] sm:-left-[90px]"
           style={{
             fontSize: '80px',
             transform: 'rotate(-10deg)',
             textShadow: '2px 3px rgba(0, 0, 0, 0.4)',
           }}
         >
           #1
         </span>
       </span>
     </div>
     
      )}
    </div>
  )
}
