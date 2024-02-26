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
  text-align: center;
  align-items: center;
  width: 256px;
  height: 310px;
  /* overflow: auto; */

  .textTitle {
    padding: auto;
    width: 216px;
    overflow: hidden;
  }

  img {
    margin-top: -1.5rem;
    width: 120px;
    height: 120px;
  }
`

export const CardWithOffersProdutsTextP = styled.div`
  /* color: ${({ theme }) => theme.colors['base-label']}; */
  width: 216px;
  height: 36px;
  margin-top: 1rem;
`

export const CardWithOffersTradicional = styled(RegularText)`
  color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  background-color: ${({ theme }) => theme.colors['brand-yellow-light']};
  font-size: 0.6rem;
  margin: 0.5rem 0 1rem 0;
  border-radius: 7px;
  padding: 0.2rem;
`
