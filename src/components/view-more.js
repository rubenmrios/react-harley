import harley from "../assets/img/harley.png";

const ViewMore = ({model}) => {
  
  return (
    <div className="row">
      <div className="col-6">
        <div className=" banner view-more">
          <h4>{model}</h4>
          <h1>New Rider Course Overview</h1>
          <button type="button" className="btn btn-outline-light  h-orange">
            View ore
          </button>
        </div>
      </div>
      <div className="col-6">
        <div className="iron">
          <img src={harley} alt="harley" />
        </div>
      </div>
      <div className="col-12">
        <p className="text-iron">
          Never ridden before? Don't sweat it. The Harley-Davidson®&nbsp;Riding
          Academy New Rider Course is designed to get you comfortable on a bike
          and give you the skills you need to ride with confidence.Offered at
          select H-D®&nbsp;dealers, the New Rider Course provides you with
          expert guidance from H-D certified coaches.
        </p>
      </div>
    </div>
  );
};

export default ViewMore;
