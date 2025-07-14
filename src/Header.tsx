import clsx from "clsx";
import { FaHeart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { Language } from "./utils/defination";
import { useEffect, useState } from "react";
import i18n from "./i18n";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./utils/store";
import { useTranslation } from "react-i18next";
import { setIsOpen } from "./utils/slice";

const Header = () => {
  const location = useLocation();
  const language = localStorage.getItem("i18nextLng") || Language.ENG;
  const [currentLanguage, setCurrentLanguage] = useState(language);
  const isOpen = useSelector((state: RootState) => state.myReducer.isOpen);
  const { t } = useTranslation();
  const [wishlist, setWishlist] = useState<string[]>(
    JSON.parse(localStorage.getItem("wishes") ?? "[]")
  );
  const dispatch = useDispatch();
  const isSetWishes = useSelector(
    (state: RootState) => state.myReducer.isSetWishes
  );

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage]);

  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("wishes") ?? "[]"));
    setWishlist(JSON.parse(localStorage.getItem("wishes") ?? "[]"));
  }, [isSetWishes]);

  return (
    <header className="font-unbounded fixed top-0 w-full z-[50] shadow-md bg-white">
      <div className="w-full flex justify-center items-center">
        <div className="w-full xl:w-[1538px] px-5 xd:px-10 py-1 xd:py-3 flex items-center justify-between">
          <Link to="/" className="block w-[150px] xs:w-[170px]">
            <img src="/logo sleepnest.png" alt="Logo sleepnest" />
          </Link>
          <div className="flex gap-2 xd:gap-5 items-center">
            <ul className="hidden md:flex gap-5 xd:gap-10 items-center">
              <li
                className={clsx(
                  `text-sm xd:text-base lg:text-[20px] lg:leading-normal cursor-pointer hover:text-[#a17f4a] duration-75 ease-linear`,
                  { "font-medium text-[#a17f4a]": location.pathname === "/" },
                  { "text-[#6c6c6c] font-light": location.pathname !== "/" }
                )}
              >
                <Link to="/">{t("Home")}</Link>
              </li>
              <li
                className={clsx(
                  `text-sm xd:text-base lg:text-[20px] lg:leading-normal cursor-pointer hover:text-[#a17f4a] duration-75 ease-linear`,
                  {
                    "font-medium text-[#a17f4a]":
                      location.pathname === "/collection",
                  },
                  {
                    "text-[#6c6c6c] font-light":
                      location.pathname !== "/collection",
                  }
                )}
              >
                <Link to="/collection">{t("Collection")}</Link>
              </li>
              <li
                className={clsx(
                  `text-sm xd:text-base lg:text-[20px] lg:leading-normal cursor-pointer hover:text-[#a17f4a] duration-75 ease-linear`,
                  {
                    "font-medium text-[#a17f4a]":
                      location.pathname === "/about",
                  },
                  {
                    "text-[#6c6c6c] font-light": location.pathname !== "/about",
                  }
                )}
              >
                <Link to="/about">{t("About Us")}</Link>
              </li>
              <li
                className={clsx(
                  `text-sm xd:text-base lg:text-[20px] lg:leading-normal cursor-pointer hover:text-[#a17f4a] duration-75 ease-linear`,
                  {
                    "font-medium text-[#a17f4a]":
                      location.pathname === "/contacts",
                  },
                  {
                    "text-[#6c6c6c] font-light":
                      location.pathname !== "/contacts",
                  }
                )}
              >
                <Link to="/contacts">{t("Contacts")}</Link>
              </li>
            </ul>
            <div className="hidden md:block cursor-pointer relative">
              <Link to="/wishlist">
                <FaHeart className="text-red-600 text-lg xd:text-xl lg:text-2xl" />
              </Link>
              <div className="w-[15px] lg:w-[22px] h-[15px] lg:h-[22px]  text-xs lg:text-base rounded-full absolute bg-black text-white flex items-center justify-center -top-2 -right-2 ">
                {wishlist.length}
              </div>
            </div>
            <select
              defaultValue={currentLanguage}
              onChange={(e) => {
                setCurrentLanguage(e.target.value);
              }}
              className="uppercase py-1 px-2 xd:py-2 xd:px-3 rounded-md bg-[#a17f4a] text-[#ded2c0] text-sm lg:text-base cursor-pointer"
            >
              <option
                value={Language.ENG}
                className="uppercase text-sm lg:text-base"
              >
                {Language.ENG}
              </option>
              <option
                value={Language.RUS}
                className="uppercase text-sm lg:text-base"
              >
                {Language.RUS}
              </option>
              <option
                value={Language.UZB}
                className="uppercase text-sm lg:text-base"
              >
                {Language.UZB}
              </option>
            </select>
            <div className="relative block md:hidden">
              <Button />
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <div
        className={clsx(
          "fixed top-0 z-[99] w-full h-full bg-white duration-300 ease-linear md:-right-[100%] flex justify-center",
          { "right-0": isOpen },
          { "-right-full": !isOpen }
        )}
      >
        <ul className="flex flex-col gap-10 items-center mt-20">
          <li
            className={clsx(
              `text-[20px] lg:leading-normal cursor-pointer hover:text-[#a17f4a] duration-75 ease-linear text-black`,
              { "font-medium": location.pathname === "/" },
              { "font-light": location.pathname !== "/" }
            )}
          >
            <button
              onClick={() => {
                dispatch(setIsOpen(false));
              }}
            >
              <Link to="/">{t("Home")}</Link>
            </button>
          </li>
          <li
            className={clsx(
              `text-[20px] lg:leading-normal cursor-pointer hover:text-[#a17f4a] duration-75 ease-linear text-black`,
              {
                "font-medium": location.pathname === "/collection",
              },
              {
                "font-light": location.pathname !== "/collection",
              }
            )}
          >
            <button
              onClick={() => {
                dispatch(setIsOpen(false));
              }}
            >
              <Link to="/collection">{t("Collection")}</Link>
            </button>
          </li>
          <li
            className={clsx(
              `text-[20px] lg:leading-normal cursor-pointer hover:text-[#a17f4a] duration-75 ease-linear text-black`,
              {
                "font-medium": location.pathname === "/about",
              },
              {
                "font-light": location.pathname !== "/about",
              }
            )}
          >
            <button
              onClick={() => {
                dispatch(setIsOpen(false));
              }}
            >
              <Link to="/about">{t("About Us")}</Link>
            </button>
          </li>
          <li
            className={clsx(
              `text-[20px] lg:leading-normal cursor-pointer hover:text-[#a17f4a] duration-75 ease-linear text-black`,
              {
                "font-medium": location.pathname === "/contacts",
              },
              {
                "font-light": location.pathname !== "/contacts",
              }
            )}
          >
            <button
              onClick={() => {
                dispatch(setIsOpen(false));
              }}
            >
              <Link to="/contacts">{t("Contacts")}</Link>
            </button>
          </li>
          <li className="relative">
            <button
              onClick={() => {
                dispatch(setIsOpen(false));
              }}
            >
              <Link to="/wishlist">
                <FaHeart className="text-red-600 text-2xl cursor-pointer" />
              </Link>
            </button>
            <div className="w-[15px] xm:w-[22px] h-15px xm:h-[22px] text-xs xm:text-base rounded-full absolute bg-black text-white flex items-center justify-center -top-2 -right-2">
              {wishlist.length}
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
