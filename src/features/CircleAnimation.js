import './circle.css'

function CircleAnimation() {
  return (
    <div className="container">
      <div className="inside-circle-container">
        <div className="inside-circle"></div>
      </div>
      <div className="outside-circle-container">
        <div className="center-text">Let's DO</div>
        <div className="outside-circle">
        </div>
      </div>
    </div>
  );
}

export default CircleAnimation