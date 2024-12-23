import Header from './components/header'
import Hero from './components/section/hero'
import Usps from './components/section/usps'
import Offers from './components/section/offers'
import VideoCarousel from './components/section/video-carousel'
import './styles.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <div className='bg-background relative z-10 '>
          <Hero />
          <Usps />
          <Offers />
        </div>
        <VideoCarousel />
        <div className='h-[100vh]'></div>
      </main>
    </>
  )
}

export default App
