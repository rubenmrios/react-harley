import harley from '../assets/img/harley.png';
import background from '../assets/img/background.png';

const Banner = () => {
  return (
    <div className="row">
      <div className="col-12">
          <img className="harley-img" src={background} alt="harley" />
        <div className="banner">
          <h4>IRON 883™</h4>
          <h1>Raw, Blacked-Out, Stripped-Down Custom Style</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
