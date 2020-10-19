import Button from 'components/Button'
import * as S from './Highlight.styles'

export type HighlightProps = {
  title: string
  subTitle: string
  backgroundImage: string
  buttonLabel: string
  buttonLink: string
  floatImage?: string
}

const Highlight = ({
  title,
  subTitle,
  backgroundImage,
  buttonLabel,
  buttonLink,
  floatImage
}: HighlightProps) => (
  <S.Wrapper backgroundImage={backgroundImage}>
    {!!floatImage && <S.FloatImage src={floatImage} alt={title} />}
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
