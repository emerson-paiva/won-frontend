import Logo from 'components/Logo'
import Title from 'components/Title'
import * as S from './Auth.styles'

type AuthProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <Logo />

      <Title>All your favorite games in one place</Title>
      <S.Subtitle>
        <strong>WON</strong> is the best and most complete gaming plataform.
      </S.Subtitle>

      <S.Footer>Won Games 2020 @ Todos os Direitos Reservados</S.Footer>
    </S.BannerBlock>

    <S.Content>
      <Logo color="black" size="large" />
      <Title color="black" lineColor="secondary" lineLeft>
        {title}
      </Title>

      {children}
    </S.Content>
  </S.Wrapper>
)

export default Auth
