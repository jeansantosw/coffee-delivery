import styled from 'styled-components'
import { RegularText } from '../Typography'

export const CardWithOffersContainer = styled.main`
  /* border: 1px solid red; */
`

export const CardWithOffersProduts = styled.div`
  background-color: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px 36px 6px 36px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 256px;
  height: 310px;

  img {
    margin-top: -1.5rem;
    width: 120px;
    height: 120px;
  }
`

export const CardWithOffersTradicional = styled(RegularText)`
  color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  background-color: ${({ theme }) => theme.colors['brand-yellow-light']};
  font-size: ${({ theme }) => theme.textSizes['text-bold-s']};
  border-radius: 5px;
  padding: 0.2rem;
`
