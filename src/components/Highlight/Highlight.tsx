import Button from 'components/Button'
import * as S from './Highlight.styles'

export type HighlightProps = {
  title: string
  subTitle: string
  backgroundImage: string
  buttonLabel: string
  buttonLink: string
  backgroundImage: string
}

const Highlight = ({
  title,
  subTitle,
  backgroundImage,
  buttonLabel,
  buttonLink
}: HighlightProps) => (
  <S.Wrapper backgroundImage={backgroundImage}>
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subTitle}</S.SubTitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Content>
  </S.Wrapper>
)

export default Highlight
