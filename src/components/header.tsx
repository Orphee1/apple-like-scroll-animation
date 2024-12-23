import Button from './button'
import Container from './container'

const Header = () => {
  return (
    <>
      <header className='bg-backgroundContrast text-white z-30 relative'>
        <Container className='flex items-center min-h-[--header-row-height] '>
          <a
            href='/'
            className='min-h-[--header-row-height] flex items-center px-6 -ml-6 text-xl '
          >
            <span className='sr-only'>Back to home page</span>
          </a>
        </Container>
      </header>
      <div className=' sticky top-0 bg-backgroundContrast text-white z-30'>
        <Container className='flex items-center min-h-[--header-row-height] justify-between'>
          <p className='text-xl font-semibold'>Apple TV +</p>
          <Button size='sm'>Stream now</Button>
        </Container>
      </div>
    </>
  )
}

export default Header
