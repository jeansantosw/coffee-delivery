import {
  CardWithOffersContainer,
  CardWithOffersProduts,
  CardWithOffersProdutsTextP,
  CardWithOffersTradicional,
} from './styles'
import coffeeCard from '../../assets/Coffee.svg'
import { RegularText, TitleText } from '../Typography'

export function CardWithOffers() {
  return (
    <CardWithOffersContainer className="container">
      <CardWithOffersProduts>
        <img src={coffeeCard} alt="" />
        <CardWithOffersTradicional>TRADICIONAL</CardWithOffersTradicional>
        <TitleText size="xs" weight={700} className="textTitle">
          Expresso Tradicional
        </TitleText>
        <CardWithOffersProdutsTextP>
          <RegularText size="s" color="label">
            O tradicional café feito com água quente e grãos moídos
          </RegularText>
        </CardWithOffersProdutsTextP>
      </CardWithOffersProduts>
    </CardWithOffersContainer>
  )
}
