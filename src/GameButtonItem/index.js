import {ChoiceButton, ChoiceImage, ListItem} from './styledComponents'

const GameButtonItem = props => {
  const {choiceDetails, onClickChoice} = props
  const {id, imageUrl} = choiceDetails
  const clickChoiceItem = () => onClickChoice(choiceDetails)

  const dataTestId = () => {
    switch (id) {
      case 'ROCK':
        return 'rockButton'
      case 'PAPER':
        return 'paperButton'
      case 'SCISSORS':
        return 'scissorsButton'
      default:
        return null
    }
  }

  return (
    <ListItem>
      <ChoiceButton
        type="button"
        data-testid={dataTestId()}
        onClick={clickChoiceItem}
      >
        <ChoiceImage src={imageUrl} alt={id} />
      </ChoiceButton>
    </ListItem>
  )
}
export default GameButtonItem
