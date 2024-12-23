import Container from '../container'
import Card from '../card'
import FadeIn from '../FadeIn'

const Offers = () => {
  return (
    <Container className=' md:flex h-full'>
      <FadeIn>
        <Card
          textH2='Buy an Apple device'
          textH3='3 months free.'
          textP='Apple TV+ is included for 3 months when you purchase an Apple device and redeem the offer within 90 days.'
          textBtn='Check eligibility'
        />
      </FadeIn>
      <FadeIn>
        <Card
          textH2='Free 7-day trial'
          textH3='$9.99/mo.'
          textP='A monthly subscription is just $9.99 per month after a free 7-day trial.3 Share Apple TV+ with your family.'
          textBtn='Try it free'
        />
      </FadeIn>
      <FadeIn>
        <Card
          textH2='Free 1‑month trial'
          textH3='Apple One'
          textP='Bundle Apple TV+ with up to five other great services for one low monthly price. And enjoy more for less.'
          textBtn='Try Apple One free'
        />
      </FadeIn>
    </Container>
  )
}

export default Offers
