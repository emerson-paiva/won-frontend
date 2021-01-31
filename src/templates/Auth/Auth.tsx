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
      <S.BannerContent>
        <Logo id="banner" />

        <div>
          <Title size="huge">All your favorite games in one place</Title>
          <S.Subtitle>
            <strong>WON</strong> is the best and most complete gaming plataform.
          </S.Subtitle>
        </div>

        <S.Footer>Won Games 2020 @ Todos os Direitos Reservados</S.Footer>
      </S.BannerContent>
    </S.BannerBlock>

    <S.Content>
      <S.ContentWrapper>
        <Logo color="black" size="large" id="content" />
        <Title color="black" lineColor="secondary" lineLeft>
          {title}
        </Title>

        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
)

export default Auth
