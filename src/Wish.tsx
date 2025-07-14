import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Footer2 from "./Footer2";
import TelegramButton from "./TelegramButton";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { IoMdStarOutline } from "react-icons/io";
import { MdOutlineStar } from "react-icons/md";
import { useForm } from "react-hook-form";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./utils/store";
import { setIsSetWishes } from "./utils/slice";

const Wish = () => {
  const winterBeds = [
    {
      src: "/bed photo 3.jpg",
      name: "Squares",
      collection: "Winter collection",
    },
    { src: "/bed photo 4.jpg", name: "Ikat", collection: "Winter collection" },
    {
      src: "/bed photo 5.jpg",
      name: "Circle",
      collection: "Winter collection",
    },
    {
      src: "/bed photo 6.jpg",
      name: "Geometry blue",
      collection: "Winter collection",
    },
    {
      src: "/bed photo 7.jpg",
      name: "Tropical leaves",
      collection: "Winter collection",
    },
    {
      src: "/bed photo 8.jpg",
      name: "Bambi",
      collection: "Winter collection",
    },
    {
      src: "/bed photo 9.jpg",
      name: "Byzantium",
      collection: "Winter collection",
    },
    {
      src: "/bed photo 10.jpg",
      name: "Evening garden",
      collection: "Winter collection",
    },
    {
      src: "/bed photo 11.jpg",
      name: "Pat marquis",
      collection: "Winter collection",
    },
    {
      src: "/bed photo 12.jpg",
      name: "Lavender roses",
      collection: "Winter collection",
    },
  ];
  const autumnBeds = [
    {
      src: "/bed photo 13.jpg",
      name: "Safari",
      collection: "Autumn Collection",
    },
    {
      src: "/bed photo 14.jpg",
      name: "Multicolor amethyst",
      collection: "Autumn Collection",
    },
    {
      src: "/bed photo 15.jpg",
      name: "Shivali decoration",
      collection: "Autumn Collection",
    },
    {
      src: "/bed photo 16.jpg",
      name: "Emerald (AB)",
      collection: "Autumn Collection",
    },
    {
      src: "/bed photo 17.jpg",
      name: "Malachite box",
      collection: "Autumn Collection",
    },
    {
      src: "/bed photo 18.jpg",
      name: "Scents of spring",
      collection: "Autumn Collection",
    },
    {
      src: "/bed photo 19.jpg",
      name: "Falling autumn leaves (AB)",
      collection: "Autumn Collection",
    },
    {
      src: "/bed photo 20.jpg",
      name: "Blue breeze",
      collection: "Autumn Collection",
    },
    {
      src: "/bed photo 21.jpg",
      name: "Blue water",
      collection: "Autumn Collection",
    },
    {
      src: "/bed photo 22.jpg",
      name: "Plaid",
      collection: "Autumn Collection",
    },
  ];
  const summerBeds = [
    {
      src: "/bed photo 23.jpg",
      name: "Vintage style",
      collection: "Summer Collection",
    },
    {
      src: "/bed photo 24.jpg",
      name: "Rocking dandelion",
      collection: "Summer Collection",
    },
    {
      src: "/bed photo 25.jpg",
      name: "French riviera",
      collection: "Summer Collection",
    },
    {
      src: "/bed photo 26.jpg",
      name: "Dolly the sheep",
      collection: "Summer Collection",
    },
    {
      src: "/bed photo 27.jpg",
      name: "Alpine plants",
      collection: "Summer Collection",
    },
    {
      src: "/bed photo 28.jpg",
      name: "Inspirational",
      collection: "Summer Collection",
    },
    {
      src: "/bed photo 29.jpg",
      name: "Green lotus",
      collection: "Summer Collection",
    },
    {
      src: "/bed photo 30.jpg",
      name: "Mountain corn",
      collection: "Summer Collection",
    },
    {
      src: "/bed photo 31.jpg",
      name: "Sakura branch",
      collection: "Summer Collection",
    },
    {
      src: "/bed photo 32.jpg",
      name: "Olive branch",
      collection: "Summer Collection",
    },
  ];
  const { t } = useTranslation();
  const [reviews, setReviews] = useState<
    {
      name: string;
      email: string;
      message?: string;
      bedName: string;
      time: string;
      rating: number;
    }[]
  >(JSON.parse(localStorage.getItem("reviews") ?? "[]"));
  const [wishes, setWishes] = useState<string[]>(
    JSON.parse(localStorage.getItem("wishes") ?? "[]")
  );
  const dispatch = useDispatch();
  const isSetWishes = useSelector(
    (state: RootState) => state.myReducer.isSetWishes
  );
  const { productname } = useParams();
  const currentBed = winterBeds
    .concat(autumnBeds)
    .concat(summerBeds)
    .find((bed) => bed.name === productname);

  const [reviewStars, setReviewStars] = useState<number[]>([]);
  const { register, handleSubmit, reset } = useForm<{
    name: string;
    email: string;
    message?: string;
    bedName: string;
    time: string;
    rating: number;
  }>();

  useEffect(() => {
    localStorage.setItem("wishes", JSON.stringify(wishes));
    dispatch(setIsSetWishes(!isSetWishes));
  }, [wishes]);

  function setItem(wish: string) {
    if (wishes.includes(wish)) {
      const reducedWishes = wishes.filter((itm) => itm !== wish);
      setWishes(reducedWishes);
      return;
    }
    setWishes([...wishes, wish]);
  }

  function getCurrentTime() {
    const date = new Date();
    const day =
      date.getDate() +
      "-" +
      (date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()) +
      "-" +
      date.getFullYear();
    const now =
      date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return `${day}, ${now}`;
  }

  return (
    <main>
      <Header />
      <section className="w-full flex justify-center items-center mt-20 xs:mt-40 font-unbounded">
        <div className="w-full xl:w-[1538px] px-5 xd:px-10">
          <div className="flex flex-col gap-20 xs:gap-40">
            <div className="w-full flex flex-col md:flex-row items-center gap-10">
              <div className="overflow-hidden rounded-3xl bg-center bg-cover w-full md:w-1/2">
                <img
                  className="content-center w-full"
                  src={currentBed?.src}
                  alt={currentBed?.name}
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-5">
                <p className="font-bold text-2xl">{t(currentBed?.name + "")}</p>
                <table className="w-full text-sm md:text-[14px] lg:text-base">
                  <tbody>
                    <tr>
                      <td className="p-2 lg:p-4 border border-[#e1e1e1]">
                        {t("Material")}:
                      </td>
                      <td className="p-2 lg:p-4 border border-[#e1e1e1]">
                        100% {t("Cotton Flannel")}
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 lg:p-4 border border-[#e1e1e1]">
                        {t("Pillowcase")}:
                      </td>
                      <td className="p-2 lg:p-4 border border-[#e1e1e1]">
                        50x70{t("cm (2 pieces)")}
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 lg:p-4 border border-[#e1e1e1]">
                        {t("Bedding")}:
                      </td>
                      <td className="p-2 lg:p-4 border border-[#e1e1e1]">
                        260×280{t("cm (1 piece)")}
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 lg:p-4 border border-[#e1e1e1]">
                        {t("Bed")}:
                      </td>
                      <td className="p-2 lg:p-4 border border-[#e1e1e1]">
                        160x220{t("cm (2 pieces)")}
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 lg:p-4 border border-[#e1e1e1]">
                        {t("Size")}:
                      </td>
                      <td className="p-2 lg:p-4 border border-[#e1e1e1]">
                        {t("Custom Size")}
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 lg:p-4 border border-[#e1e1e1]">
                        {t("Manufacturer")}:
                      </td>
                      <td className="p-2 lg:p-4 border border-[#e1e1e1]">
                        {t("Environmental Clean Sleep Product")}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-red-600">
                  {t("Collection")}: {t(currentBed?.collection + "")}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-10 md:flex-row">
              <div className="w-full md:w-1/2 order-2 md:order-1 flex flex-col gap-5">
                <p className="font-bold text-lg xs:text-3xl text-center">
                  {t("Product Reviews")}
                </p>
                <div className="w-full flex flex-col gap-5">
                  {/* buni map qilish kerak */}
                  {reviews
                    .filter((rev) => rev.bedName === currentBed?.name)
                    .map((review, i) => {
                      return (
                        <div
                          key={i}
                          className="border border-red-600 rounded-md w-full px-2 py-3"
                        >
                          <div className="w-full flex justify-between">
                            <p className="font-bold text-base">{review.name}</p>
                            <p className="text-[9px]">{review.time}</p>
                          </div>
                          <div className="flex gap-5 items-center">
                            <p className="font-bold text-[#7c7c7c]">Rating:</p>
                            <p className="text-sm text-[#00f]">
                              {review.rating}/5
                            </p>
                          </div>
                          <p className="text-[#5f02ff] text-sm">
                            {review.message}
                          </p>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-10 order-1 md:order-2">
                <p className="font-bold text-lg xs:text-3xl text-center tracking-tighter">
                  {t("Leave your review")}
                </p>
                <form
                  onSubmit={handleSubmit((data) => {
                    data.bedName = currentBed?.name + "";
                    data.time = getCurrentTime();
                    data.rating = reviewStars.length;
                    setReviews([...reviews, data]);
                    reset();
                    setReviewStars([]);
                    localStorage.setItem(
                      "reviews",
                      JSON.stringify([...reviews, data])
                    );
                  })}
                  className="flex flex-col gap-5"
                >
                  <label className="flex flex-col gap-3">
                    <p className="text-[#3F3F3F] text-sm">
                      {t("Your rating")}:
                    </p>
                    <div className="flex">
                      <span
                        onClick={() => {
                          setReviewStars([1]);
                        }}
                        className="cursor-pointer"
                      >
                        {reviewStars.includes(1) ? (
                          <MdOutlineStar className="text-yellow-500 text-3xl" />
                        ) : (
                          <IoMdStarOutline className="text-3xl" />
                        )}
                      </span>
                      <span
                        onClick={() => {
                          setReviewStars([1, 2]);
                        }}
                        className="cursor-pointer"
                      >
                        {reviewStars.includes(2) ? (
                          <MdOutlineStar className="text-yellow-500 text-3xl" />
                        ) : (
                          <IoMdStarOutline className="text-3xl" />
                        )}
                      </span>
                      <span
                        onClick={() => {
                          setReviewStars([1, 2, 3]);
                        }}
                        className="cursor-pointer"
                      >
                        {reviewStars.includes(3) ? (
                          <MdOutlineStar className="text-yellow-500 text-3xl" />
                        ) : (
                          <IoMdStarOutline className="text-3xl" />
                        )}
                      </span>
                      <span
                        onClick={() => {
                          setReviewStars([1, 2, 3, 4]);
                        }}
                        className="cursor-pointer"
                      >
                        {reviewStars.includes(4) ? (
                          <MdOutlineStar className="text-yellow-500 text-3xl" />
                        ) : (
                          <IoMdStarOutline className="text-3xl" />
                        )}
                      </span>
                      <span
                        onClick={() => {
                          setReviewStars([1, 2, 3, 4, 5]);
                        }}
                        className="cursor-pointer"
                      >
                        {reviewStars.includes(5) ? (
                          <MdOutlineStar className="text-yellow-500 text-3xl" />
                        ) : (
                          <IoMdStarOutline className="text-3xl" />
                        )}
                      </span>
                    </div>
                  </label>
                  <label className="flex flex-col gap-3">
                    <p className="text-[#3F3F3F] text-sm">{t("Name")} *</p>
                    <input
                      {...register("name")}
                      required
                      type="text"
                      className="px-4 py-3 rounded-3xl bg-[#dddddd] w-full outline-none"
                    />
                  </label>
                  <label className="flex flex-col gap-3">
                    <p className="text-[#3F3F3F] text-sm">{t("Email")} *</p>
                    <input
                      {...register("email")}
                      required
                      type="email"
                      className="px-4 py-3 rounded-3xl bg-[#dddddd] w-full outline-none"
                    />
                  </label>
                  <label className="flex flex-col gap-3">
                    <p className="text-[#3F3F3F] text-sm">
                      {t("Your review")} *
                    </p>
                    <textarea
                      {...register("message")}
                      required
                      className="px-4 py-3 rounded-3xl bg-[#dddddd] w-full outline-none resize-none h-[150px]"
                    />
                  </label>
                  <button className="w-full py-3 bg-[#ff0000] text-white rounded-md text-sm">
                    {t("Submit")}
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="w-full mt-40 mb-20 flex flex-col gap-10">
            <p className="text-center font-bold text-4xl">
              {t("Similar Products")}
            </p>
            <div className="grid grid-cols-2 xm:grid-cols-3 xd:grid-cols-4 lg:grid-cols-5 gap-5 xs:gap-10 mt-10">
              {winterBeds.map((bed) => {
                return (
                  <div
                    key={bed.name}
                    className="hover:text-red-500 cursor-pointer duration-75 ease-linear flex flex-col gap-2 relative"
                  >
                    <Link to={`product/${bed.name}`}>
                      <img
                        src={bed.src}
                        alt={bed.name}
                        className="rounded-3xl hover:scale-105 duration-200 ease-linear"
                      />
                    </Link>
                    <p className="text-xs xs:text-base">{t(bed.name)}</p>
                    <button
                      onClick={() => {
                        setItem(bed.name);
                      }}
                      className="w-[25px] xs:w-[40px] h-[25px] xs:h-[40px] bg-[#d4d4d4] rounded-full absolute top-0 right-0 flex items-center justify-center"
                    >
                      {wishes.some((itm) => itm === bed.name) ? (
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
    </main>
  );
};

export default Wish;
