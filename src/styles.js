import styled from "styled-components";

export const AppWrapper = styled.div`

  display: flex;
  flex-direction: row;
  height: 100vh;
  font-family: 'Roboto', sans-serif;
  background-color: #e8e8e8;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const DiamondContainer = styled.div`

  display: ${({ show }) => show ? 'flex' : 'none'};
  margin: 25px;
  padding: 1.1em;
  font-size: .85em;
  flex-direction: column;
  justify-content:center;
  align-content: center;
  min-height: 300px;
  min-width: 300px;
  border-radius: 0.5vh;

  box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
              0 2px 2px rgba(0,0,0,0.11), 
              0 4px 4px rgba(0,0,0,0.11), 
              0 6px 8px rgba(0,0,0,0.11),
              0 8px 16px rgba(0,0,0,0.11);
`

export const Diamond = styled.div`

  align-self: center;
`

export const DiamondLine = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: ${({ spacing }) => `${spacing}rem`};
`

export const DiamondLetter = styled.p`

  color: #323234;
  font-family: 'Roboto', sans-serif;
`



export const InputContainer = styled.div`
  
  height: 80px;
  max-width: 150px;
  border-radius: 0.5vh;
  box-sizing: border-box;
  background-color: #f8f8f8;

  box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
              0 2px 2px rgba(0,0,0,0.11), 
              0 4px 4px rgba(0,0,0,0.11), 
              0 6px 8px rgba(0,0,0,0.11),
              0 8px 16px rgba(0,0,0,0.11);
`


export const InputError = styled.p`
 
  position: absolute;
  margin-top: 1.2rem;
  padding-left: 10px;
  color: red;
  font-size: .7rem;
  font-weight: 450;
`

export const InputField = styled.input`

  margin-top: 16px;
  padding: 1rem;
  font-size: 1em;
  border: transparent;
  border-radius: 3px;
  background-color: transparent;

  &:focus {
    outline: transparent;
  }
`
export const LetterDisplay = styled.div`

  display: ${({ show }) => show ? 'flex' : 'none'};
  margin-left: 60px;
  font-weight: bold;
  color: ${({ isValid }) => isValid? '#323234' : 'red'};
  text-decoration: ${({ isValid }) => isValid? '' : 'underline'};
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  border-radius: 15px;
  background-color: #f8f8f8;

  box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
              0 2px 2px rgba(0,0,0,0.11), 
              0 4px 4px rgba(0,0,0,0.11), 
              0 6px 8px rgba(0,0,0,0.11),
              0 8px 16px rgba(0,0,0,0.11);
`

