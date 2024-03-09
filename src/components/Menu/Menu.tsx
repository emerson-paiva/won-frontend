import { RxHamburgerMenu as MenuIcon } from 'react-icons/rx'
import {
  MdOutlineShoppingCart as ShoppingCartIcon,
  MdOutlineSearch as SearchIcon
} from 'react-icons/md'
import { Logo } from '../Logo'

import * as S from './Menu.styles'

export const Menu = () => (
  <S.Wrapper>
    <S.IconWrapper>
      <MenuIcon aria-label="Open Menu" />
    </S.IconWrapper>
    <S.LogoWrapper>
      <Logo hideOnMobile />
    </S.LogoWrapper>
    <S.MenuGroup>
      <S.IconWrapper>
        <SearchIcon aria-label="Search" />
      </S.IconWrapper>
      <S.IconWrapper>
        <ShoppingCartIcon aria-label="Open Shopping Cart" />
      </S.IconWrapper>
    </S.MenuGroup>
  </S.Wrapper>
)
