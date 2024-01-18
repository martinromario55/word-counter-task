import { useState } from 'react'

export const Counter = () => {
  const [character, setCharacter] = useState('')

  // Input value
  function getCharacter(e) {
    let textInput = e.target.value
    setCharacter(textInput)
    //console.log(character);
  }
  // Clear Text
  function clearText() {
    setCharacter('')
  }
  return (
    <>
      <h1>Word Counter</h1>
      <textarea
        value={character}
        onChange={getCharacter}
        placeholder="Type here..."
      ></textarea>
      <button>Character Count: {character.length}</button>
      <button onClick={clearText} id="clearbtn">
        Clear Count
      </button>
      <button>
        Word Count: {character ? character.match(/\S+/g).length : 0}
      </button>
    </>
  )
}
