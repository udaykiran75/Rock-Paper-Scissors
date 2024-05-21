import styled from 'styled-components'

export const MainbgContainer = styled.div`
    background-color: #223a5f;
    min-height: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const HeaderContainer = styled.div`
    border: 2px solid #ffffff;
    border-radius: 10px;
    padding-left: 15px;
    padding-right: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media screen and (min-width: 768px){
        margin-left: 60px;
        margin-right: 60px;
        padding-left: 30px;
        padding-right: 30px;
    }
`
export const Heading = styled.h1`
    font-family: Bree Serif;
    color: #ffffff;
    font-size: 25px;
    font-weight: normal;
`
export const ScoreContainer = styled.div`
    background-color: #ffffff;
    border-radius: 10px;
    padding: 15px;
    width: 105px;
    height: 105px;
`
export const ScoreText = styled.p`
    color: #223a5f;
    font-size: 25px;
    font-family: Bree Serif;
    margin: 0px;
    text-align: center;
`
export const ScoreCount = styled.p`
    color: #223a5f;
    font-size: 40px;
    font-family: Roboto;
    margin: 0px;
    text-align: center;
`
export const GameViewContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style-type: none;
  padding: 0;
  width: 400px;
  margin-top: 65px;
  align-self: center;
`
export const ResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const PlayersContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 400px;
`
export const PlayerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const PlayerHeading = styled.h1`
    font-size: 25px;
    font-family: Roboto;
    color: #ffffff;
`
export const SelectedImage = styled.img`
    width: 150px;
`
export const GameResultCon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const GameResultText = styled.p`
    font-size: 25px;
    font-family: Roboto;
    color: #ffffff;
`
export const PlayAgainButton = styled.button`
    border: none;
    outline: none;
    background-color: #ffffff;
    font-family: Roboto;
    color:  #223a5f;
    border-radius: 6px;
    padding: 10px;
    cursor: pointer;
    width: 120px;
    font-size: 15px;
`
