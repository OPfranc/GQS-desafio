import React, { useState, useEffect } from 'react';
import {
  AppWrapper,
  DiamondContainer,
  Diamond,
  DiamondLine,
  DiamondLetter,
  InputContainer,
  InputError,
  InputField,
  LetterDisplay
} from './styles'

const INITIALCHARCODE = 64

function App() {

  const [letters, setLetters] = useState([])
  const [targetLetter, setTargetLetter] = useState('')
  const [displayLetter, setDisplayLetter] = useState('')
  const [isCharacterValid, setIsCharacterValid] = useState(true)
  const [showDiamond, setShowDiamond] = useState(false)
  const [showLetterDisplay, setShowLetterDisplay] = useState(false)

  useEffect(() => {

    const targetCharCode = targetLetter.charCodeAt(0)

    if (targetLetter) {
      const charArray = Array.from(new Array(targetCharCode - INITIALCHARCODE), (x, i) => String.fromCharCode(i + INITIALCHARCODE + 1))
      const reversedCharArray = charArray.slice(0).reverse().slice(1);
      const concatedCharArray = charArray.concat(reversedCharArray)

      const LetterArray = concatedCharArray.map((character, id) => ({
        id,
        character,
        spacing: character.charCodeAt(0) - INITIALCHARCODE,
        isInitial: character.charCodeAt(0) === INITIALCHARCODE + 1 ? true : false,
      }))

      setLetters(LetterArray)
      setTargetLetter('')
    }

  }, [targetLetter])


  function inputHandler({ target: { value: character } }) {

    const validCharacters = /[a-z]|[A-Z]/

    setShowLetterDisplay(true)
    setDisplayLetter(character.toUpperCase());

    if (validCharacters.test(character) === true) {
      setTargetLetter(character.toUpperCase())
      setIsCharacterValid(true)
      setShowDiamond(true)
    }
    else {
      setIsCharacterValid(false)
      setShowDiamond(false)
    }
  }

  return (
    <AppWrapper>
      <DiamondContainer show={showDiamond}>
        {letters.map(({ character, id, spacing, isInitial }) => {
          return (
            <Diamond key={id}>
              {
                isInitial ?
                  (<DiamondLetter>{character}</DiamondLetter>)
                  :
                  (
                    <DiamondLine spacing={spacing}>
                      <DiamondLetter>{character}</DiamondLetter>
                      <DiamondLetter>{character}</DiamondLetter>
                    </DiamondLine>
                  )
              }
            </Diamond>
          )
        })}
      </DiamondContainer>
      <InputContainer>
        <InputError >{isCharacterValid ? ('') : (`Caracter inválido!`)}</InputError>
        <InputField
          placeholder='Digite uma letra'
          value={targetLetter}
          onChange={(e) => {
            
            inputHandler(e)
          }}
          // onChange={inputHandler}
        />
        <LetterDisplay
          show={showLetterDisplay}
          isValid={isCharacterValid}
        >
          {displayLetter}
        </LetterDisplay>
      </InputContainer>
    </AppWrapper>
  );
}
export default App;
