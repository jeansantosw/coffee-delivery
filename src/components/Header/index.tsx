import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'

import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={logoCoffeeDelivery} alt="" />
        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} />
            Manaus - AM
          </HeaderButton>
          <NavLink to="#">
            <HeaderButton variant="yellow">
              <span>0</span>
              <ShoppingCart size={20} />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}
