import { CardWithOffers } from '../../components/CardWithOffers'
import { IntroductionOfCoffee } from './components/IntroductionOfCoffee'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <IntroductionOfCoffee />
      <CardWithOffers />
    </HomeContainer>
  )
}
