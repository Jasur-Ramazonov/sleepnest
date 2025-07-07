import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="flex justify-center items-center font-unbounded w-full relative mt-10">
      <div className="w-full xl:w-[1538px] px-5 xd:px-10 flex flex-col">
        <div className="grid grid-cols-1 xs:grid-cols-2 xm:grid-cols-3 md:grid-cols-4 lg2:grid-cols-6 gap-5">
          <div className="flex flex-col col-span-1 xs:col-span-2 gap-5 w-[80%]">
            <Link to="/">
              <img
                src="./logo sleepnest.png"
                alt="Logo sleeplest"
                className="w-[300px]"
              />
            </Link>
            <p className="font-normal text-[#a7a2a2] text-sm xs:text-base leading-5 tracking-tight">
              {t("Footer text")}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-bold text-black text-2xl">{t("menu")}</p>
            <ul className="flex flex-col gap-1 ">
              <li className="text-[#6c6c6c] font-normal text-sm xs:text-base hover:text-[#fc0000] duration-75 ease-linear transition-colors">
                <Link to="/">{t("Home")}</Link>
              </li>
              <li className="text-[#6c6c6c] font-normal text-sm xs:text-base hover:text-[#fc0000] duration-75 ease-linear transition-colors">
                <Link to="/collection">{t("Collection")}</Link>
              </li>
              <li className="text-[#6c6c6c] font-normal text-sm xs:text-base hover:text-[#fc0000] duration-75 ease-linear transition-colors">
                <Link to="/about">{t("About Us")}</Link>
              </li>
              <li className="text-[#6c6c6c] font-normal text-sm xs:text-base hover:text-[#fc0000] duration-75 ease-linear transition-colors">
                <Link to="/contact">{t("Contacts")}</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-bold text-black text-xl">{t("Contacts")}</p>
            <ul className="flex flex-col gap-1 italic font-normal text-sm text-[#655b53]">
              <li>Bukhara, st. Alpomish 80</li>
              <li>Email: sleepnest@gamil.com</li>
              <li>Telegram: sleepnest</li>
              <li>+998 94 033 72 12</li>
            </ul>
          </div>
          <div className="flex flex-col gap-10 col-span-1 xs:col-span-2">
            <div className="flex flex-col gap-5">
              <p className="font-bold text-black text-sm xs:text-base">
                {t("Subscribe to our email")}
              </p>
              <label className="flex justify-between border border-black rounded-3xl py-1 px-2 focus-within:border-2 overflow-hidden duration-75 ease-linear">
                <input
                  className="outline-none placeholder:font-normal text-base font-sans w-1/2 xs:w-[300px] placeholder:tracking-tighter placeholder:text-sm"
                  required
                  type="email"
                  placeholder={t("Subscribe to our email")}
                />
                <button className="bg-[#ff0000] font-sans font-normal text-sm xs:text-base tracking-tighter xs:tracking-normal text-white px-3 py-3 rounded-3xl">
                  <p className="w-[100px] xs:w-[110px]">{t("Subscribe")}</p>
                </button>
              </label>
            </div>
            <p className="font-normal text-[#4e4e4e] text-sm">
              {t("Select at least one list")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
