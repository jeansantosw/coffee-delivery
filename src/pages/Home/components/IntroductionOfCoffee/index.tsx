import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { InfoWithIcon } from '../../../../components/InfoWithIcon'
import { RegularText } from '../../../../components/Typography'
import capaCoffeeDelivery from '../../../../assets/capa-coffee-delivery.svg'
import { BenefitsContainer, IntroContainer, IntroTitle } from './styles'

export function IntroductionOfCoffee() {
  const { colors } = useTheme()
  return (
    <IntroContainer>
      <IntroContainer className="container">
        <div>
          <section>
            <IntroTitle>
              Encontre o café perfeito para qualquer hora do dia
            </IntroTitle>
            <RegularText as="h3" size="l" color="subtitle">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </RegularText>
          </section>
          <BenefitsContainer>
            <InfoWithIcon
              iconBg={colors['brand-yellow-dark']}
              icon={<ShoppingCart weight="fill" />}
              text="Compra simples e segura"
            />
            <InfoWithIcon
              iconBg={colors['base-text']}
              icon={<Package weight="fill" />}
              text="Embalagem mantém o café intacto"
            />
            <InfoWithIcon
              iconBg={colors['brand-yellow']}
              icon={<Timer weight="fill" />}
              text="Entrega rápida e rastreada"
            />
            <InfoWithIcon
              iconBg={colors['brand-purple']}
              icon={<Coffee weight="fill" />}
              text="O café chega fresquinho até você"
            />
          </BenefitsContainer>
        </div>
        <img src={capaCoffeeDelivery} alt="" />
      </IntroContainer>
    </IntroContainer>
  )
}
