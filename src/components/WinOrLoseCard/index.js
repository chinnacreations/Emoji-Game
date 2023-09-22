import './index.css'

const LoseImage = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WonImage = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLossCard = props => {
  const {isWon, onCLickPLayAgain, score} = props
  const isImageUrl = isWon ? WonImage : LoseImage
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="wonorloss-con">
      <div className="details-sec">
        <h1 className="title">{gameStatus}</h1>
        <p className="score-label">{scoreLabel}</p>
        <p className="score-value">{score}/12</p>
        <button type="button" className="play-btn" onClick={onCLickPLayAgain}>
          Play Again
        </button>
      </div>
      <div className="image-sec">
        <img className="image" src={isImageUrl} alt="win or lose" />
      </div>
    </div>
  )
}
export default WinOrLossCard
