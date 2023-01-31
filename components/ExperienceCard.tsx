import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article>
        <motion.img 
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src="https://avatars.githubusercontent.com/u/51086021?v=4" alt="company logo" />
    </article>
  )
}

export default ExperienceCard