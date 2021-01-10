import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import Title from 'components/Title'

const Home = () => (
  <section>
    <Container>
      <Menu />
    </Container>

    <Container>
      <Title lineLeft lineColor="secondary" color="black">
        News
      </Title>
    </Container>

    <Container>
      <Title lineLeft lineColor="secondary">
        Most Popular
      </Title>
    </Container>

    <Container>
      <Title lineLeft lineColor="secondary">
        Upcomming
      </Title>
    </Container>

    <Container>
      <Title lineLeft lineColor="secondary">
        Free Games
      </Title>
    </Container>

    <Container>
      <Footer />
    </Container>
  </section>
)

export default Home
