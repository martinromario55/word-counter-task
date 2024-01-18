import { Counter } from '../components/Counter'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <>
      <header>
        <Link to="/joke">Joke</Link>
      </header>
      <main>
        <Counter />
      </main>
    </>
  )
}
