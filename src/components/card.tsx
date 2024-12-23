import Button from './button'

type CardProps = {
  textH2: string
  textH3: string
  textP: string
  textBtn: string
}

const Card = ({ textH2, textH3, textP, textBtn }: CardProps) => {
  return (
    <div
      className='flex flex-col justify-items-start text-white pr-2 py-6 mb-5
    '
    >
      <h2 className='text-2xl font-semibold mb-3'>{textH2}</h2>
      <h3 className='text-4xl font-bold'>{textH3}</h3>
      <p className='text-base mb-10 mt-1 opacity-60'>{textP}</p>
      <Button className='w-3/5' size='md'>
        {textBtn}
      </Button>
    </div>
  )
}

export default Card
