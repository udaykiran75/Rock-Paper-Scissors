import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {
  PopupContainer,
  RulesButton,
  RulesImage,
  RulesContainer,
  CloseButton,
} from './styledComponents'
import {MdClose} from 'react-icons/md'

const RulesPopupButton = () => (
  <PopupContainer>
    <Popup modal trigger={<RulesButton>Rules</RulesButton>}>
      {close => (
        <RulesContainer>
          <CloseButton onClick={() => close()}>
            <MdClose />
          </CloseButton>
          <RulesImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </RulesContainer>
      )}
    </Popup>
  </PopupContainer>
)
export default RulesPopupButton
