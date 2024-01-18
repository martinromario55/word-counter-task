import { useEffect, useState } from 'react'

export const Joke = () => {
  const [jokes, setJokes] = useState([])
  useEffect(() => {
    async function chuck() {
      const response = await fetch('https://api.chucknorris.io/jokes/random')
      const json = await response.json()
      setJokes(json.value)
      //console.log(data.value);
    }
    chuck()
  }, [])
  return (
    <>
      <h3>Chuck Norris API</h3>
      <p>
        {jokes || 'Chuck Noris still loading'} -{' '}
        <a href="https://api.chucknorris.io/">chucknorris.io</a>
      </p>
    </>
  )
}
