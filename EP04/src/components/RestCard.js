
import { CDN_URL } from "../utils/constants";

const RestCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;

  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="resCard">
      <img className="res-img" src={CDN_URL + cloudinaryImageId} />
      <h3 className="res-name">{name}</h3>
      <h5 className="cusines">{cuisines.join(", ")}</h5>
      <h5 className="rating">{avgRating}</h5>
      <h5 className="price">{costForTwo}</h5>
      <h5 className="timming">{deliveryTime} min</h5>
    </div>
  );
};

export default RestCard;
