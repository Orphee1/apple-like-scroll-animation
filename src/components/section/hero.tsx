import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import Container from '../container'
import Button from '../button'

const Hero = () => {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0])

  return (
    <div className='relative bg-background text-white'>
      <div
        ref={targetRef}
        className='absolute left-0 -top-[--header-height] w-full  h-[200vh]'
      >
        <motion.img
          style={{ opacity }}
          className='sticky top-0 h-screen object-cover w-full'
          src='/posters/napoleon.webp'
          alt='Napoleon'
        />
      </div>
      <Container
        className='relative z-10 h-[--hero-height] 
      pb-7'
      >
        <motion.div
          className='flex flex-col justify-end items-start h-full'
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          whileInView='visible'
          exit='hidden'
          animate='hidden'
          viewport={{ amount: 0.9 }}
        >
          <h1 className='text-4xl  md:text-5xl font-bold mb-10'>
            All Apple Originals.
            <br />
            Only on Apple TV+.
          </h1>
          <Button size='lg' className='mb-16'>
            Stream now
          </Button>
          <div className='flex items-center align-baseline'>
            <p className='font-semibold'>Watch on the</p>
            <img src='/appleTV.png' alt='apple tv icon' className='h-[35px]' />
            <p className='font-semibold'>app.</p>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}

export default Hero
