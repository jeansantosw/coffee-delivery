import { defaultTheme } from '../styles/themes/default'

type ThemeDefault = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeDefault {}
}
