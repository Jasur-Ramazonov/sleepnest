import { RiTelegram2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const TelegramButton = () => {
  return (
    <div className="telegram">
      <Link className="telegram__icon" to="https://t.me/jasur_ramazonov">
        <RiTelegram2Fill className="text-white text-4xl" />
        <div className="telegram__ring"></div>
      </Link>
    </div>
  );
};

export default TelegramButton;
