import { useTranslation } from "react-i18next";
import Footer from "./Footer";
import Footer2 from "./Footer2";
import Header from "./Header";
import { FaHeart, FaRegHeart, FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { setWishlist } from "./utils/slice";
import TelegramButton from "./TelegramButton";

const Collection = () => {
  const { t } = useTranslation();

  const [currentCollection, setCurrentCollection] = useState(
    t("All collections")
  );
  const [currentCollectionArr, setCurrentCollectionArr] = useState<
    { src: string; name: string }[]
  >([]);
  const [currentWishlist, setCurrentWishlist] = useState<string[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setWishlist(currentWishlist));
  }, [currentWishlist]);

  useEffect(() => {
    switch (currentCollection) {
      case t("All collections"):
        setCurrentCollectionArr(
          winterBeds.concat(autumnBeds).concat(summerBeds)
        );
        break;
      case t("Winter collection"):
        setCurrentCollectionArr(winterBeds);
        break;
      case t("Autumn Collection"):
        setCurrentCollectionArr(autumnBeds);
        break;
      case t("Summer Collection"):
        setCurrentCollectionArr(summerBeds);
        break;
      default:
        break;
    }
  }, [currentCollection]);

  const winterBeds = [
    { src: "./bed photo 3.jpg", name: t("Squares") },
    { src: "./bed photo 4.jpg", name: t("Ikat") },
    { src: "./bed photo 5.jpg", name: t("Circle") },
    { src: "./bed photo 6.jpg", name: t("Geometry blue") },
    { src: "./bed photo 7.jpg", name: t("Tropical leaves") },
    { src: "./bed photo 8.jpg", name: t("Bambi") },
    { src: "./bed photo 9.jpg", name: t("Byzantium") },
    { src: "./bed photo 10.jpg", name: t("Evening garden") },
    { src: "./bed photo 11.jpg", name: t("Pat marquis") },
    { src: "./bed photo 12.jpg", name: t("Lavender roses") },
  ];

  const autumnBeds = [
    { src: "./bed photo 13.jpg", name: t("Safari") },
    { src: "./bed photo 14.jpg", name: t("Multicolor amethyst") },
    { src: "./bed photo 15.jpg", name: t("Shivali decoration") },
    { src: "./bed photo 16.jpg", name: t("Emerald (AB)") },
    { src: "./bed photo 17.jpg", name: t("Malachite box") },
    { src: "./bed photo 18.jpg", name: t("Scents of spring") },
    { src: "./bed photo 19.jpg", name: t("Falling autumn leaves (AB)") },
    { src: "./bed photo 20.jpg", name: t("Blue breeze") },
    { src: "./bed photo 21.jpg", name: t("Blue water") },
    { src: "./bed photo 22.jpg", name: t("Plaid") },
  ];

  const summerBeds = [
    { src: "./bed photo 23.jpg", name: t("Vintage style") },
    { src: "./bed photo 24.jpg", name: t("Rocking dandelion") },
    { src: "./bed photo 25.jpg", name: t("French riviera") },
    { src: "./bed photo 26.jpg", name: t("Dolly the sheep") },
    { src: "./bed photo 27.jpg", name: t("Alpine plants") },
    { src: "./bed photo 28.jpg", name: t("Inspirational") },
    { src: "./bed photo 29.jpg", name: t("Green lotus") },
    { src: "./bed photo 30.jpg", name: t("Mountain corn") },
    { src: "./bed photo 31.jpg", name: t("Sakura branch") },
    { src: "./bed photo 32.jpg", name: t("Olive branch") },
  ];

  return (
    <div>
      <Header />
      <section className="w-full mt-40 flex justify-center items-center font-unbounded mb-40">
        <div className="w-full xl:w-[1538px] px-5 xd:px-10">
          <div className="w-full h-fit flex flex-col sm:flex-row gap-3">
            <aside className="w-full flex flex-col gap-10 sm:hidden">
              <label className="overflow-hidden bg-[#e6e6e6] p-2 rounded-3xl flex justify-between items-center w-full">
                <input
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value) {
                      let searchedCollection: {
                        src: string;
                        name: string;
                      }[] = [];
                      switch (currentCollection) {
                        case t("All collections"):
                          searchedCollection = winterBeds
                            .concat(autumnBeds)
                            .concat(summerBeds)
                            .filter((bed) => bed.name.includes(value));
                          break;
                        case t("Winter collection"):
                          searchedCollection = winterBeds.filter((bed) =>
                            bed.name.includes(value)
                          );
                          break;
                        case t("Autumn Collection"):
                          searchedCollection = autumnBeds.filter((bed) =>
                            bed.name.includes(value)
                          );
                          break;
                        case t("Summer Collection"):
                          searchedCollection = summerBeds.filter((bed) =>
                            bed.name.includes(value)
                          );
                          break;
                        default:
                          break;
                      }

                      setCurrentCollectionArr(searchedCollection);
                    } else {
                      switch (currentCollection) {
                        case t("All collections"):
                          setCurrentCollectionArr(
                            winterBeds.concat(autumnBeds).concat(summerBeds)
                          );
                          break;
                        case t("Winter collection"):
                          setCurrentCollectionArr(winterBeds);
                          break;
                        case t("Autumn Collection"):
                          setCurrentCollectionArr(autumnBeds);
                          break;
                        case t("Summer Collection"):
                          setCurrentCollectionArr(summerBeds);
                          break;
                        default:
                          break;
                      }
                    }
                  }}
                  type="text"
                  placeholder="search for..."
                  className="placeholder:text-xs outline-none bg-transparent ml-2 w-1/2"
                />
                <button className="w-[25px] h-[25px] rounded-full flex justify-center items-center bg-[#ff0000]">
                  <FaSearch className="text-white text-sm" />
                </button>
              </label>
              <ul className="flex gap-2 overflow-auto w-full">
                <li
                  className={clsx(
                    "px-2 py-2 text-xs text-white bg-black rounded-xl w-fit flex items-center",
                    {
                      "bg-red-600": currentCollection === t("All collections"),
                    },
                    {
                      "bg-black": !(currentCollection === t("All collections")),
                    }
                  )}
                >
                  <button
                    onClick={() => {
                      setCurrentCollection(t("All collections"));
                    }}
                    className="w-fit whitespace-nowrap"
                  >
                    {t("All collections")}
                  </button>
                </li>
                <li
                  className={clsx(
                    "px-2 py-2 text-xs text-white bg-black rounded-xl w-fit flex items-center",
                    {
                      "bg-red-600":
                        currentCollection === t("Winter collection"),
                    },
                    {
                      "bg-black": !(
                        currentCollection === t("Winter collection")
                      ),
                    }
                  )}
                >
                  <button
                    className="whitespace-nowrap"
                    onClick={() => {
                      setCurrentCollection(t("Winter collection"));
                    }}
                  >
                    {t("Winter collection")}
                  </button>
                </li>
                <li
                  className={clsx(
                    "px-2 py-2 text-xs text-white bg-black rounded-xl w-fit flex items-center",
                    {
                      "bg-red-600":
                        currentCollection === t("Autumn Collection"),
                    },
                    {
                      "bg-black": !(
                        currentCollection === t("Autumn Collection")
                      ),
                    }
                  )}
                >
                  <button
                    className="whitespace-nowrap"
                    onClick={() => {
                      setCurrentCollection(t("Autumn Collection"));
                    }}
                  >
                    {t("Autumn Collection")}
                  </button>
                </li>
                <li
                  className={clsx(
                    "px-2 py-2 text-xs text-white bg-black rounded-xl w-fit flex items-center",
                    {
                      "bg-red-600":
                        currentCollection === t("Summer Collection"),
                    },
                    {
                      "bg-black": !(
                        currentCollection === t("Summer Collection")
                      ),
                    }
                  )}
                >
                  <button
                    className="whitespace-nowrap"
                    onClick={() => {
                      setCurrentCollection(t("Summer Collection"));
                    }}
                  >
                    {t("Summer Collection")}
                  </button>
                </li>
              </ul>
            </aside>
            <aside className="w-1/3 h-[600px] hidden sm:flex flex-col gap-16">
              <label className="overflow-hidden bg-[#e6e6e6] px-2 py-1 rounded-3xl flex justify-between items-center w-4/5">
                <input
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value) {
                      let searchedCollection: {
                        src: string;
                        name: string;
                      }[] = [];
                      switch (currentCollection) {
                        case t("All collections"):
                          searchedCollection = winterBeds
                            .concat(autumnBeds)
                            .concat(summerBeds)
                            .filter((bed) => bed.name.includes(value));
                          break;
                        case t("Winter collection"):
                          searchedCollection = winterBeds.filter((bed) =>
                            bed.name.includes(value)
                          );
                          break;
                        case t("Autumn Collection"):
                          searchedCollection = autumnBeds.filter((bed) =>
                            bed.name.includes(value)
                          );
                          break;
                        case t("Summer Collection"):
                          searchedCollection = summerBeds.filter((bed) =>
                            bed.name.includes(value)
                          );
                          break;
                        default:
                          break;
                      }

                      setCurrentCollectionArr(searchedCollection);
                    } else {
                      switch (currentCollection) {
                        case t("All collections"):
                          setCurrentCollectionArr(
                            winterBeds.concat(autumnBeds).concat(summerBeds)
                          );
                          break;
                        case t("Winter collection"):
                          setCurrentCollectionArr(winterBeds);
                          break;
                        case t("Autumn Collection"):
                          setCurrentCollectionArr(autumnBeds);
                          break;
                        case t("Summer Collection"):
                          setCurrentCollectionArr(summerBeds);
                          break;
                        default:
                          break;
                      }
                    }
                  }}
                  type="text"
                  placeholder="search for..."
                  className="placeholder:text-sm outline-none bg-transparent ml-2 w-1/2"
                />
                <button className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-[#ff0000]">
                  <FaSearch className="text-white" />
                </button>
              </label>
              <div className="flex flex-col gap-10">
                <p className="font-bold text-2xl">{t("Collection")}</p>
                <ul className="flex flex-col gap-5">
                  <li
                    className={clsx("cursor-pointer", {
                      "text-[#a17f4a]":
                        currentCollection === t("All collections"),
                    })}
                  >
                    <button
                      onClick={() => {
                        setCurrentCollection(t("All collections"));
                      }}
                    >
                      {t("All collections")}
                    </button>
                  </li>
                  <li
                    className={clsx("cursor-pointer", {
                      "text-[#a17f4a]":
                        currentCollection === t("Winter collection"),
                    })}
                  >
                    <button
                      onClick={() => {
                        setCurrentCollection(t("Winter collection"));
                      }}
                    >
                      {t("Winter collection")}
                    </button>
                  </li>
                  <li
                    className={clsx("cursor-pointer", {
                      "text-[#a17f4a]":
                        currentCollection === t("Autumn Collection"),
                    })}
                  >
                    <button
                      onClick={() => {
                        setCurrentCollection(t("Autumn Collection"));
                      }}
                    >
                      {t("Autumn Collection")}
                    </button>
                  </li>
                  <li
                    className={clsx("cursor-pointer", {
                      "text-[#a17f4a]":
                        currentCollection === t("Summer Collection"),
                    })}
                  >
                    <button
                      onClick={() => {
                        setCurrentCollection(t("Summer Collection"));
                      }}
                    >
                      {t("Summer Collection")}
                    </button>
                  </li>
                </ul>
              </div>
            </aside>
            <div className="w-full sm:w-[70%] h-fit grid grid-cols-2 xd:grid-cols-3 lg:grid-cols-4 gap-5">
              {currentCollectionArr.map((bed) => {
                return (
                  <div
                    key={bed.name}
                    className="hover:text-red-500 cursor-pointer duration-75 ease-linear flex flex-col gap-2 relative"
                  >
                    <img
                      src={bed.src}
                      alt={bed.name}
                      className="rounded-3xl hover:scale-105 duration-200 ease-linear"
                    />
                    <p className="text-xs xs:text-base">{bed.name}</p>
                    <button
                      onClick={() => {
                        if (currentWishlist.some((itm) => itm === bed.name)) {
                          const myWishlist = currentWishlist.filter(
                            (itm) => itm !== bed.name
                          );
                          setCurrentWishlist([...myWishlist]);
                        } else {
                          setCurrentWishlist([...currentWishlist, bed.name]);
                        }
                      }}
                      className="w-[25px] xs:w-[40px] h-[25px] xs:h-[40px] bg-[#d4d4d4] rounded-full absolute top-0 right-0 flex items-center justify-center"
                    >
                      {currentWishlist.some((itm) => itm === bed.name) ? (
                        <FaHeart className="text-red-500 xs:text-2xl" />
                      ) : (
                        <FaRegHeart className="text-red-500 xs:text-2xl" />
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Footer2 />
      <TelegramButton />
    </div>
  );
};

export default Collection;
