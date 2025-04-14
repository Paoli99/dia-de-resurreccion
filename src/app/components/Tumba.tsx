'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Tumba() {
  const [open, setOpen] = useState(false)
  const [showCouple, setShowCouple] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true)
      setTimeout(() => setShowCouple(true), 1000) 
    }, 500)

    return () => clearTimeout(timer)
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

{showCouple && (
        <motion.img
          src="/assets/pareja.png"
          alt="Pareja"
          initial={{ opacity: 0, scale: 0.6, y: 60 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute bottom-[22%] left-1/2 -translate-x-1/2 w-[160px] sm:w-[240px] h-auto object-contain z-30"
        />
      )}
    </div>
  )
}
