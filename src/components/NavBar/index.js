import './index.css'

const NavBar = props => {
  const {currentScore, isGameInProgress, topScore} = props

  return (
    <nav className="nav-bar-con">
      <div className="nav-bar">
        <div className="logo-con">
          <img
            className="nav-logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
            alt="emoji logo"
          />
          <h1 className="heading">Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="score-con">
            <p className="score">Score: {currentScore}</p>
            <p className="score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}
export default NavBar
