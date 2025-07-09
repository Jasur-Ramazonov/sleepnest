import { RiTelegram2Fill } from "react-icons/ri";
import "./telegram.css";

const TelegramButton = () => {
  return (
    <div className="telegram">
      <a
        className="telegram__icon"
        href="https://t.me/jasur_ramazonov"
        aria-label="telegram__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="block w-full h-full bg-[#a17f4a]">
          <RiTelegram2Fill className="text-white text-4xl" />
        </span>
        <div className="telegram__ring"></div>
      </a>
    </div>
  );
};

export default TelegramButton;
