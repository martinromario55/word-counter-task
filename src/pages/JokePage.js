import { Link } from 'react-router-dom'
import { Joke } from '../components/Joke'

export const JokePage = () => {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
      </header>
      <main>
        <Joke />
      </main>
    </div>
  )
}
