import Link from 'next/link'
import Logo from 'components/Logo'
import Title from 'components/Title'
import * as S from './Footer.styles'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Title color="black" size="small" lineBottom lineColor="secondary">
          Contact
        </Title>
        <a href="mailto:sac@womgames.com">sac@wongames.com</a>
      </S.Column>

      <S.Column>
        <Title color="black" size="small" lineBottom lineColor="secondary">
          Follow us
        </Title>

        <nav aria-labelledby="social media">
          <a
            href="https://www.instagram.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.twitter.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.youtube.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Youtube
          </a>
          <a
            href="https://www.facebook.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Facebook
          </a>
        </nav>
      </S.Column>

      <S.Column>
        <Title color="black" lineColor="secondary" lineBottom size="small">
          Links
        </Title>

        <nav aria-labelledby="footer resources">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/games">
            <a>Store</a>
          </Link>
          <Link href="/search">
            <a>Buscar</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column aria-labelledby="footer-contact">
        <Title color="black" lineColor="secondary" lineBottom size="small">
          Location
        </Title>
        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem Ipsum</span>
        <span>Lorem, ipsum dolor.</span>
      </S.Column>
    </S.Content>

    <S.Copyright>Won Games 2020 © All rights reserved.</S.Copyright>
  </S.Wrapper>
)

export default Footer
