import {Component} from 'react'
import GameButtonItem from '../GameButtonItem'
import RulesPopupButton from '../RulesPopupButton'
import {
  MainbgContainer,
  HeaderContainer,
  Heading,
  ScoreContainer,
  ScoreText,
  ScoreCount,
  GameViewContainer,
  ResultContainer,
  PlayersContainer,
  PlayerDiv,
  PlayerHeading,
  SelectedImage,
  GameResultCon,
  GameResultText,
  PlayAgainButton,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class RockPaperScissor extends Component {
  state = {
    yourScore: 0,
    isGameOver: false,
    opponentChoice: choicesList[Math.floor(Math.random() * 3)],
    gameResult: '',
    playerSelected: {},
  }

  playerSelectedChoice = selectedItem => {
    const {opponentChoice} = this.state

    if (selectedItem.id === opponentChoice.id) {
      this.setState({
        isGameOver: true,
        gameResult: 'IT IS DRAW',
        playerSelected: selectedItem,
      })
    } else if (
      (selectedItem.id === 'ROCK' && opponentChoice.id === 'SCISSORS') ||
      (selectedItem.id === 'PAPER' && opponentChoice.id === 'ROCK') ||
      (selectedItem.id === 'SCISSORS' && opponentChoice.id === 'PAPER')
    ) {
      this.setState(prevState => ({
        yourScore: prevState.yourScore + 1,
        isGameOver: true,
        gameResult: 'YOU WON',
        playerSelected: selectedItem,
      }))
    } else {
      this.setState(prevState => ({
        yourScore: prevState.yourScore - 1,
        isGameOver: true,
        gameResult: 'YOU LOSE',
        playerSelected: selectedItem,
      }))
    }
  }

  onClickPlayAgain = () => {
    this.setState({
      isGameOver: false,
      gameResult: '',
      playerSelected: {},
      opponentChoice: choicesList[Math.floor(Math.random() * 3)],
    })
  }

  renderGameView = () => (
    <GameViewContainer>
      {choicesList.map(choice => (
        <GameButtonItem
          key={choice.id}
          choiceDetails={choice}
          onClickChoice={this.playerSelectedChoice}
        />
      ))}
    </GameViewContainer>
  )

  renderGameResultView = () => {
    const {opponentChoice, playerSelected, gameResult} = this.state

    return (
      <ResultContainer>
        <PlayersContainer>
          <PlayerDiv>
            <PlayerHeading>YOU</PlayerHeading>
            <SelectedImage src={playerSelected.imageUrl} alt="your choice" />
          </PlayerDiv>
          <PlayerDiv>
            <PlayerHeading>OPPONENT</PlayerHeading>
            <SelectedImage
              src={opponentChoice.imageUrl}
              alt="opponent choice"
            />
          </PlayerDiv>
        </PlayersContainer>
        <GameResultCon>
          <GameResultText>{gameResult}</GameResultText>
          <PlayAgainButton onClick={this.onClickPlayAgain}>
            Play Again
          </PlayAgainButton>
        </GameResultCon>
      </ResultContainer>
    )
  }

  render() {
    const {yourScore, opponentChoice, isGameOver} = this.state
    console.log(opponentChoice)
    return (
      <MainbgContainer>
        <HeaderContainer>
          <Heading>
            ROCK <br />
            PAPER <br />
            SCISSORS
          </Heading>
          <ScoreContainer>
            <ScoreText>Score</ScoreText>
            <ScoreCount>{yourScore}</ScoreCount>
          </ScoreContainer>
        </HeaderContainer>
        {isGameOver ? this.renderGameResultView() : this.renderGameView()}
        <RulesPopupButton />
      </MainbgContainer>
    )
  }
}
export default RockPaperScissor
