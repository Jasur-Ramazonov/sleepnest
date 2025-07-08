import { useEffect, useState } from "react";
import Footer from "./Footer";
import Footer2 from "./Footer2";
import Header from "./Header";
import TelegramButton from "./TelegramButton";
import { useTranslation } from "react-i18next";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setWishlist } from "./utils/slice";
const Wishlist = () => {
  const { t } = useTranslation();
  const wishlist: string[] = JSON.parse(localStorage.getItem("wishes")!);
  const dispatch = useDispatch();

  const winterBeds = [
    { src: "./bed photo 3.jpg", name: "Squares" },
    { src: "./bed photo 4.jpg", name: "Ikat" },
    { src: "./bed photo 5.jpg", name: "Circle" },
    { src: "./bed photo 6.jpg", name: "Geometry blue" },
    { src: "./bed photo 7.jpg", name: "Tropical leaves" },
    { src: "./bed photo 8.jpg", name: "Bambi" },
    { src: "./bed photo 9.jpg", name: "Byzantium" },
    { src: "./bed photo 10.jpg", name: "Evening garden" },
    { src: "./bed photo 11.jpg", name: "Pat marquis" },
    { src: "./bed photo 12.jpg", name: "Lavender roses" },
  ];

  const autumnBeds = [
    { src: "./bed photo 13.jpg", name: "Safari" },
    { src: "./bed photo 14.jpg", name: "Multicolor amethyst" },
    { src: "./bed photo 15.jpg", name: "Shivali decoration" },
    { src: "./bed photo 16.jpg", name: "Emerald (AB)" },
    { src: "./bed photo 17.jpg", name: "Malachite box" },
    { src: "./bed photo 18.jpg", name: "Scents of spring" },
    { src: "./bed photo 19.jpg", name: "Falling autumn leaves (AB)" },
    { src: "./bed photo 20.jpg", name: "Blue breeze" },
    { src: "./bed photo 21.jpg", name: "Blue water" },
    { src: "./bed photo 22.jpg", name: "Plaid" },
  ];

  const summerBeds = [
    { src: "./bed photo 23.jpg", name: "Vintage style" },
    { src: "./bed photo 24.jpg", name: "Rocking dandelion" },
    { src: "./bed photo 25.jpg", name: "French riviera" },
    { src: "./bed photo 26.jpg", name: "Dolly the sheep" },
    { src: "./bed photo 27.jpg", name: "Alpine plants" },
    { src: "./bed photo 28.jpg", name: "Inspirational" },
    { src: "./bed photo 29.jpg", name: "Green lotus" },
    { src: "./bed photo 30.jpg", name: "Mountain corn" },
    { src: "./bed photo 31.jpg", name: "Sakura branch" },
    { src: "./bed photo 32.jpg", name: "Olive branch" },
  ];

  const allBeds = winterBeds.concat(autumnBeds).concat(summerBeds);

  const [wishlistNames, setWishlistNames] = useState<string[]>(wishlist);

  const [currentWishlist, setCurrentWishlist] = useState<
    {
      src: string;
      name: string;
    }[]
  >([]);

  useEffect(() => {
    const wishes: { src: string; name: string }[] = wishlistNames.map((itm) => {
      return allBeds.find((bed) => bed.name === itm)!;
    });
    setCurrentWishlist(wishes);
  }, []);

  useEffect(() => {
    const wishes: { src: string; name: string }[] = wishlistNames.map((itm) => {
      return allBeds.find((bed) => bed.name === itm)!;
    });
    setCurrentWishlist(wishes);
    dispatch(setWishlist(wishlistNames));
    localStorage.setItem("wishes", JSON.stringify(wishlistNames));
  }, [wishlistNames]);

  return (
    <div>
      <Header />
      <section className="w-full flex justify-center items-center mt-40 mb-20 font-unbounded">
        <div className="w-full xl:w-[1538px] px-5 xd:px-10">
          <div className="w-full">
            <div className="w-full h-fit grid grid-cols-2 xd:grid-cols-3 lg:grid-cols-4 gap-5">
              {currentWishlist[0] ? (
                currentWishlist.map((bed) => {
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
                      <p className="text-xs xs:text-base">{t(bed.name)}</p>
                      <button
                        onClick={() => {
                          if (wishlistNames.some((itm) => itm === bed.name)) {
                            const myWishlist = wishlistNames.filter(
                              (itm) => itm !== bed.name
                            );
                            setWishlistNames([...myWishlist]);
                          } else {
                            setWishlistNames([...wishlistNames, bed.name]);
                          }
                        }}
                        className="w-[25px] xs:w-[40px] h-[25px] xs:h-[40px] bg-[#d4d4d4] rounded-full absolute top-0 right-0 flex items-center justify-center"
                      >
                        {wishlistNames.some((itm) => itm === bed.name) ? (
                          <FaHeart className="text-red-500 xs:text-2xl" />
                        ) : (
                          <FaRegHeart className="text-red-500 xs:text-2xl" />
                        )}
                      </button>
                    </div>
                  );
                })
              ) : (
                <img
                  src="./wishlist photo.png"
                  alt="wishlist photo"
                  className="col-span-2 col-start-2"
                />
              )}
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

export default Wishlist;
