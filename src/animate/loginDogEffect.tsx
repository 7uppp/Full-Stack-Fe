import '../css/loginDogEffect.scss'
const LoginDogEffect = () => {
  return (
    <div className="dog">
      <div className="heart heart--1"></div>
      <div className="heart heart--2"></div>
      <div className="heart heart--3"></div>
      <div className="heart heart--4"></div>

      <div className="head">
        <div className="ear ear--left"></div>
        <div className="ear ear--right"></div>
        <div className="nose"></div>
      </div>

      <div className="face">
        <div className="eye eye--left"></div>
        <div className="eye eye--right"></div>
        <div className="mouth"></div>
      </div>

      <div className="body">
        <div className="chest"></div>
        <div className="back"></div>
        <div className="legs">
          <div className="legs-front legs-front-left"></div>
          <div className="legs-front legs-front-right"></div>
          <div className="legs-back legs-back-left"></div>
          <div className="legs-back legs-back-right"></div>
        </div>
        <div className="tail"></div>
      </div>
    </div>
  )
}

export default LoginDogEffect
