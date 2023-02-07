import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'

export function Router() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
