import { useMemo, useRef, useState } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from 'motion/react'
import { useWindowSize } from 'react-use'
import { movies, randomMoviesSet1, randomMoviesSet2, Movie } from '../../movies'
import Button from '../button'

const VideoCarousel = () => {
  const { width, height } = useWindowSize()

  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  })
  const maximumScale = useMemo(() => {
    const windowYratio = height / width

    const xScale = 1.66667
    const yScale = xScale * (16 / 9) * windowYratio

    return Math.max(xScale, yScale)
  }, [width, height])

  const scale = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.66],
    [maximumScale * 1.1, maximumScale, 1]
  )

  const postersOpacity = useTransform(scrollYProgress, [0.64, 0.66], [0, 1])
  const postersTranslateXLeft = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [-20, 0]
  )
  const postersTranslateXRight = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [20, 0]
  )

  const [carouselVariant, setCarouselVariant] = useState<'inactive' | 'active'>(
    'inactive'
  )
  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    if (progress >= 0.67) {
      setCarouselVariant('active')
    } else {
      setCarouselVariant('inactive')
    }
  })

  return (
    <motion.div animate={carouselVariant} className='bg-background pb-16'>
      <div ref={targetRef} className='mt-[-100vh] h-[300vh] overflow-clip'>
        <div className='sticky h-screen top-0 flex items-center'>
          <div
            className='relative left-1/2 flex -translate-x-1/2 gap-5
         '
          >
            <motion.div
              style={{ opacity: postersOpacity, x: postersTranslateXLeft }}
              className=' aspect-[9/16]  md:aspect-video shrink-0 w-[300px] md:w-[60vw]'
            >
              <img
                className='w-full h-full object-cover rounded-2xl'
                src={movies[0].poster}
                alt={movies[0].name}
              />
            </motion.div>
            <motion.div
              style={{ scale }}
              className='relative aspect-[9/16]  md:aspect-video shrink-0 w-[300px] md:w-[60vw] rounded-2xl overflow-clip'
            >
              <img
                className='w-full  h-full object-cover rounded-2xl'
                src={movies[1].poster}
                alt={movies[1].name}
              />
              <motion.div
                variants={{
                  active: { opacity: 1, y: 0 },
                  inactive: { opacity: 0, y: 20 },
                }}
                transition={{ duration: 0.4 }}
                className='absolute left-O bottom-0 w-full flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between items-center p-5 text-white text-lg'
              >
                <p>Best video ever</p>
                <Button>Watch now</Button>
              </motion.div>
            </motion.div>
            <motion.div
              className='aspect-[9/16] md:aspect-video shrink-0 w-[300px] md:w-[60vw] rounded-2xl overflow-clip'
              style={{ opacity: postersOpacity, x: postersTranslateXRight }}
            >
              <img
                className='w-full h-full object-cover rounded-2xl'
                src={movies[2].poster}
                alt={movies[2].name}
              />
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        variants={{
          active: { opacity: 1, y: 0 },
          inactive: { opacity: 0, y: 20 },
        }}
        transition={{ duration: 0.4 }}
        className='-mt-[calc((100vh-(300px*(16/9)))/2)] space-y-3 pt-4'
      >
        <SmallVideoCarousel movies={randomMoviesSet1} />
        <div className='[--duration:68s] [--carousel-offset:-32px] '>
          <SmallVideoCarousel movies={randomMoviesSet2} />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default VideoCarousel

const SmallVideoCarousel = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className='overflow-clip'>
      <div className='flex gap-3 animate-carousel-move relative left-[var(--carousel-offset, 0px)]'>
        {movies.map((movie, index) => (
          <div
            className='aspect-video w-[40vw] md:w-[23vw] shrink-0'
            key={`${movie.name}-${index}`}
          >
            <img
              className='w-full h-full object-cover rounded-xl'
              src={movie.poster}
              alt={movie.name}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
