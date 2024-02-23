import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestuarantMenu from "../utils/useRestuarantMenu";

const ResMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestuarantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } = resInfo.cards[2].card.card.info;

  const { itemCards } =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[6].card.card;

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {costForTwoMessage} - {cuisines.join(", ")}
      </p>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {item.card.info.price / 100}Rs
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ResMenu;
