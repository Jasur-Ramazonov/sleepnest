import { useTranslation } from "react-i18next";
import Footer from "./Footer";
import Footer2 from "./Footer2";
import Header from "./Header";
import TelegramButton from "./TelegramButton";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setWishlist } from "./utils/slice";

const Mainpage = () => {
  const { t } = useTranslation();

  const [currentWishlist, setCurrentWishlist] = useState<string[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setWishlist(currentWishlist));
  }, [currentWishlist]);

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

  const news = [
    {
      img: "./new section photo.png",
      smtext: t("News sm text 1"),
      lgtext: t("News lg text 1"),
    },
    {
      img: "./new section photo 2.png",
      smtext: t("News sm text 2"),
      lgtext: t("News lg text 2"),
    },
    {
      img: "./new section photo 3.png",
      smtext: t("News sm text 3"),
      lgtext: t("News lg text 3"),
    },
  ];

  return (
    <main>
      <Header />
      <section className="w-full flex justify-center font-unbounded mb-20 mt-28">
        {/* Hero page */}
        <div className="w-full xl:w-[1538px] px-5 xd:px-10">
          <div className="animation__mainpage w-full h-[350px] xd:h-[500px] lg2:h-[650px] p-2 rounded-[36px] relative overflow-hiden">
            <div
              className="w-[90%] xs:w-full h-[350px] md:h-[500px] lg2:h-full absolute xd:top-16 xs:-left-10 xm:-left-32 xd:-left-40 bg-cover bg-center"
              style={{ backgroundImage: "url('./bed 1.png')" }}
            ></div>
            <div className="float-end p-2 mt-10 flex flex-col gap-3 xd:gap-10 relative z-10">
              <div className="flex flex-col gap-1 xd:gap-3">
                <p className="font-bold text-[#7a5c33] text-lg xs:text-xl lg2:text-2xl text-end">
                  {t("Environmental")}
                </p>
                <p className="font-normal text-[#a17f4a] text-2xl xs:text-4xl lg2:text-6xl text-end">
                  {t("Clean Sleep")}
                </p>
              </div>
              <p className="font-normal text-[#a17f4a] text-3xl xs:text-5xl xm:text-6xl lg2:text-8xl text-end">
                {t("Products main page")}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex justify-center items-center font-unbounded">
        <div className="w-full xl:w-[1538px] px-5 xd:px-10">
          <div className="w-full h-fit py-10">
            <div className="grid grid-cols-2 xm:grid-cols-4 gap-5">
              <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
                <img
                  src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='69.613'%20height='40'%20viewBox='0%200%2069.613%2040'%3e%3cdefs%3e%3cstyle%3e.a{fill:%23f42c37;}%3c/style%3e%3c/defs%3e%3cg%20transform='translate(-5.009%20-24.149)'%3e%3cg%20transform='translate(5.009%2024.149)'%3e%3cpath%20class='a'%20d='M76.464,52.063,74.559,41.837A10.444,10.444,0,0,0,64.3,33.349H54.944a10.449,10.449,0,0,0-10.343-9.2H20.71a8.031,8.031,0,0,0-6.933,3.912,1.123,1.123,0,0,0,1.922,1.16,5.8,5.8,0,0,1,5.011-2.826H44.6a8.189,8.189,0,0,1,8.17,8.078v22.2H33.911a6.34,6.34,0,0,0-12.483,0h-.719A5.843,5.843,0,0,1,15.862,54.1,1.123,1.123,0,0,0,14,55.361a8.084,8.084,0,0,0,6.708,3.559h.713a6.347,6.347,0,0,0,12.5,0H52.857a6.347,6.347,0,0,0,12.5,0h5.454a5.752,5.752,0,0,0,5.658-6.858ZM27.648,61.9a4.1,4.1,0,0,1,0-8.209,4.1,4.1,0,1,1,0,8.209Zm31.434,0A4.085,4.085,0,0,1,55,57.911a1.111,1.111,0,0,0,.012-.114v-.3a4.1,4.1,0,1,1,4.066,4.4Zm14.441-6.5a3.508,3.508,0,0,1-2.715,1.273h-5.46a6.38,6.38,0,0,0-6.264-5.227,6.265,6.265,0,0,0-4.065,1.5V35.594H64.3a8.2,8.2,0,0,1,8.05,6.656l1.906,10.231A3.523,3.523,0,0,1,73.523,55.4Z'%20transform='translate(-6.957%20-24.149)'%3e%3c/path%3e%3cpath%20class='a'%20d='M18.105,40.6a1.123,1.123,0,0,0-1.123-1.123H6.132a1.123,1.123,0,0,0,0,2.245H16.983A1.123,1.123,0,0,0,18.105,40.6Z'%20transform='translate(-5.009%20-27.619)'%3e%3c/path%3e%3cpath%20class='a'%20d='M18.941,51.984a1.123,1.123,0,0,0-1.123-1.123h-8a1.123,1.123,0,1,0,0,2.245h8A1.123,1.123,0,0,0,18.941,51.984Z'%20transform='translate(-5.845%20-30.196)'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e"
                  alt="Free shipping"
                />
                <div className="flex flex-col gap-3 w-full">
                  <p className="font-bold text-sm xs:text-base xm:text-sm xd:text-base text-center lg:text-start">
                    {t("Free Shipping")}
                  </p>
                  <p className="font-normal text-[#aaa] text-center lg:text-start text-xs xs:text-sm xm:text-xs xd:text-sm">
                    {t("Free Shipping text")}
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
                <img
                  src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48.579'%20height='49.552'%20viewBox='0%200%2048.579%2049.552'%3e%3cdefs%3e%3cstyle%3e.a,.b{fill:%23f42c37;}.a{stroke:%23fff;stroke-width:0.35px;}.b,.c{stroke:%23f42c37;}.b{stroke-width:0.3px;}.c,.e{fill:none;}.c{stroke-linecap:round;stroke-width:2.1px;stroke-dasharray:55%2010;}.d{stroke:none;}%3c/style%3e%3c/defs%3e%3cg%20transform='translate(-4.068%20-3.507)'%3e%3cg%20transform='translate(4.254%203.682)'%3e%3cpath%20class='a'%20d='M52.96,31.59l-.876-1.208a1.631,1.631,0,0,1-.009-1.912l.855-1.219a4.107,4.107,0,0,0-1.409-5.99l-1.309-.7a1.636,1.636,0,0,1-.845-1.712l.251-1.469a4.1,4.1,0,0,0-3.865-4.782l-1.491-.06a1.627,1.627,0,0,1-1.5-1.179l-.432-1.42A4.114,4.114,0,0,0,36.76,7.306l-1.369.583a1.654,1.654,0,0,1-1.862-.412l-1-1.108a4.1,4.1,0,0,0-6.151.04l-.967,1.128a1.664,1.664,0,0,1-1.862.443l-1.38-.563a4.177,4.177,0,0,0-1.56-.312,4.108,4.108,0,0,0-3.957,3.02l-.393,1.439a1.635,1.635,0,0,1-1.49,1.2l-1.48.091a4.1,4.1,0,0,0-3.8,4.833l.272,1.46a1.636,1.636,0,0,1-.816,1.731l-1.3.725a4.106,4.106,0,0,0-1.319,6.01l.876,1.2a1.631,1.631,0,0,1,.009,1.912l-.856,1.219a4.108,4.108,0,0,0,1.409,5.99l1.309.7a1.635,1.635,0,0,1,.845,1.712l-.251,1.469A4.1,4.1,0,0,0,13.543,46.6l1.491.06a1.626,1.626,0,0,1,1.5,1.178l.412,1.43A4.113,4.113,0,0,0,22.514,51.9l1.368-.584a1.657,1.657,0,0,1,1.863.413l1,1.106a4.1,4.1,0,0,0,6.154-.04l.975-1.128a1.666,1.666,0,0,1,1.863-.443l1.379.564a4.2,4.2,0,0,0,1.561.312,4.105,4.105,0,0,0,3.956-3.02l.393-1.44a1.64,1.64,0,0,1,1.491-1.2l1.49-.09a4.1,4.1,0,0,0,3.8-4.832l-.272-1.46a1.636,1.636,0,0,1,.816-1.731l1.3-.726a4.1,4.1,0,0,0,1.319-6.01Zm-1.711,2.768a1.627,1.627,0,0,1-.8,1.079l-1.3.725A4.1,4.1,0,0,0,47.1,40.489l.272,1.46a1.636,1.636,0,0,1-1.52,1.933l-1.48.091a4.1,4.1,0,0,0-3.725,3.011l-.393,1.43a1.638,1.638,0,0,1-1.58,1.208,1.682,1.682,0,0,1-.625-.12l-1.38-.564a4.182,4.182,0,0,0-1.56-.313,4.121,4.121,0,0,0-3.1,1.409l-.977,1.119a1.618,1.618,0,0,1-1.239.563,1.6,1.6,0,0,1-1.217-.543l-1-1.108A4.119,4.119,0,0,0,24.52,48.7a4.054,4.054,0,0,0-1.621.332l-1.369.583a1.6,1.6,0,0,1-.643.132,1.642,1.642,0,0,1-1.571-1.179l-.412-1.43a4.115,4.115,0,0,0-3.767-2.96l-1.49-.06a1.588,1.588,0,0,1-1.2-.6,1.605,1.605,0,0,1-.342-1.3l.251-1.469a4.094,4.094,0,0,0-2.114-4.3l-1.308-.7a1.611,1.611,0,0,1-.826-1.068,1.579,1.579,0,0,1,.262-1.319l.856-1.219a4.094,4.094,0,0,0-.04-4.791l-.876-1.2a1.584,1.584,0,0,1-.272-1.319,1.627,1.627,0,0,1,.806-1.077l1.3-.725a4.1,4.1,0,0,0,2.043-4.33l-.262-1.449a1.609,1.609,0,0,1,.321-1.309,1.625,1.625,0,0,1,1.2-.623l1.48-.091A4.108,4.108,0,0,0,18.65,12.21l.393-1.439a1.638,1.638,0,0,1,1.58-1.209,1.7,1.7,0,0,1,.625.121l1.38.563a4.177,4.177,0,0,0,1.56.312,4.12,4.12,0,0,0,3.1-1.409l.977-1.117a1.637,1.637,0,0,1,2.456-.02l1,1.106a4.121,4.121,0,0,0,3.061,1.369,4.066,4.066,0,0,0,1.621-.332l1.369-.583a1.594,1.594,0,0,1,.643-.131,1.64,1.64,0,0,1,1.571,1.177l.412,1.431a4.115,4.115,0,0,0,3.767,2.959l1.49.061a1.623,1.623,0,0,1,1.208.6,1.6,1.6,0,0,1,.343,1.3l-.252,1.471a4.1,4.1,0,0,0,2.114,4.3l1.309.7a1.638,1.638,0,0,1,.574,2.385l-.855,1.219a4.1,4.1,0,0,0,.04,4.793l.876,1.2A1.773,1.773,0,0,1,51.249,34.357Z'%20transform='translate(-5.545%20-5)'%3e%3c/path%3e%3cpath%20class='b'%20d='M48.05,42.37l-5.14,5.11L41.241,45.8a1.176,1.176,0,0,0-1.668,1.659l2.5,2.513a1.17,1.17,0,0,0,1.659,0l5.974-5.936A1.176,1.176,0,1,0,48.05,42.37Z'%20transform='translate(-20.548%20-21.581)'%3e%3c/path%3e%3c/g%3e%3cg%20class='c'%20transform='translate(28.357%2047.837)%20rotate(-135)'%3e%3ccircle%20class='d'%20cx='13.835'%20cy='13.835'%20r='13.835'%3e%3c/circle%3e%3ccircle%20class='e'%20cx='13.835'%20cy='13.835'%20r='12.785'%3e%3c/circle%3e%3c/g%3e%3c/g%3e%3c/svg%3e"
                  alt="Return Guarantee"
                />
                <div className="flex flex-col gap-3 w-full">
                  <p className="font-bold text-sm xs:text-base xm:text-sm xd:text-base text-center lg:text-start">
                    {t("Return Guarantee")}
                  </p>
                  <p className="font-normal text-[#aaa] text-xs xs:text-sm xm:text-xs xd:text-sm text-center lg:text-start">
                    {t("Return Guarantee text")}
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
                <img
                  src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='49.231'%20height='40'%20viewBox='0%200%2049.231%2040'%3e%3cdefs%3e%3cstyle%3e.a{fill:%23f42c37;}.b{fill:none;stroke:%23f42c37;stroke-linecap:round;stroke-width:2.2px;}%3c/style%3e%3c/defs%3e%3cg%20transform='translate(-554%20-5045.521)'%3e%3cpath%20class='a'%20d='M48.077-22.546a4.9,4.9,0,0,0,1.154-3.221,4.9,4.9,0,0,0-1.154-3.221A5.122,5.122,0,0,0,45.1-30.767v-.1a4.655,4.655,0,0,0-3.077-4.712v-2.5a16.77,16.77,0,0,0-5.1-12.308,16.77,16.77,0,0,0-12.308-5.1,16.77,16.77,0,0,0-12.308,5.1,16.77,16.77,0,0,0-5.1,12.308v2.212a3.691,3.691,0,0,0-3.077,3.942v1.154a5.122,5.122,0,0,0-2.981,1.779A4.9,4.9,0,0,0,0-25.767a4.9,4.9,0,0,0,1.154,3.221,5.122,5.122,0,0,0,2.981,1.779v1.154a3.99,3.99,0,0,0,1.2,2.933,3.879,3.879,0,0,0,2.837,1.2h2.115a3.879,3.879,0,0,0,2.837-1.2,3.99,3.99,0,0,0,1.2-2.933V-31.921a3.99,3.99,0,0,0-1.2-2.933,3.879,3.879,0,0,0-2.837-1.2H9.231v-2.019A14.814,14.814,0,0,1,13.75-48.94a14.814,14.814,0,0,1,10.865-4.519A14.814,14.814,0,0,1,35.481-48.94,14.814,14.814,0,0,1,40-38.075v2.019a4.836,4.836,0,0,0-3.606,1.538,5.072,5.072,0,0,0-1.49,3.654v10.192a5.072,5.072,0,0,0,1.49,3.654A4.836,4.836,0,0,0,40-15.479a4.836,4.836,0,0,0,3.606-1.538,5.072,5.072,0,0,0,1.49-3.654v-.1A5.122,5.122,0,0,0,48.077-22.546ZM4.135-22.882a2.773,2.773,0,0,1-2.115-2.885,2.773,2.773,0,0,1,2.115-2.885Zm8.173-9.038v12.308a1.881,1.881,0,0,1-.625,1.442,2.007,2.007,0,0,1-1.394.577H8.173a2.007,2.007,0,0,1-1.394-.577,1.881,1.881,0,0,1-.625-1.442V-31.921a1.881,1.881,0,0,1,.625-1.442,2.007,2.007,0,0,1,1.394-.577h2.115a2.007,2.007,0,0,1,1.394.577A1.881,1.881,0,0,1,12.308-31.921Zm30.769,11.25a3.04,3.04,0,0,1-.865,2.163A2.913,2.913,0,0,1,40-17.594a2.913,2.913,0,0,1-2.212-.913,3.04,3.04,0,0,1-.865-2.163V-30.863a3.04,3.04,0,0,1,.865-2.163A2.913,2.913,0,0,1,40-33.94a2.913,2.913,0,0,1,2.212.913,3.04,3.04,0,0,1,.865,2.163ZM45.1-22.882v-5.769a2.773,2.773,0,0,1,2.115,2.885A2.773,2.773,0,0,1,45.1-22.882Z'%20transform='translate(554%205101)'%3e%3c/path%3e%3cpath%20class='b'%20d='M12.482,1.811A13.234,13.234,0,0,0,0,1.375'%20transform='matrix(0.998,%20-0.07,%200.07,%200.998,%20572.188,%205051.251)'%3e%3c/path%3e%3c/g%3e%3c/svg%3e"
                  alt="24/7 online support"
                />
                <div className="flex flex-col gap-3 w-full">
                  <p className="font-bold text-sm xs:text-base xm:text-sm xd:text-base text-center lg:text-start">
                    {t("24/7 online support")}
                  </p>
                  <p className="font-normal text-[#aaa] text-xs xs:text-sm xm:text-xs xd:text-sm text-center lg:text-start">
                    {t("24/7 online support text")}
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
                <img
                  src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='44.03'%20height='40.804'%20viewBox='0%200%2044.03%2040.804'%3e%3cdefs%3e%3cstyle%3e.a,.b{fill:%23f42c37;stroke:%23f42c37;}.a{stroke-width:0.8px;}.b{stroke-linecap:round;stroke-width:2.6px;}%3c/style%3e%3c/defs%3e%3cg%20transform='translate(-4.6%20-8.021)'%3e%3cpath%20class='a'%20d='M10.951,43.533a.584.584,0,0,1-.576-.576V35.368a.576.576,0,1,1,1.153,0v7.541A.567.567,0,0,1,10.951,43.533ZM44.34,45.015V40.722a.584.584,0,0,0-.576-.576.62.62,0,0,0-.576.576v4.293a2.153,2.153,0,0,1-2.162,2.162H8.362A2.153,2.153,0,0,1,6.2,45.015V20.421A2.153,2.153,0,0,1,8.362,18.26H41.025a2.153,2.153,0,0,1,2.162,2.162v4a.584.584,0,0,0,.576.576.62.62,0,0,0,.576-.576v-4a3.372,3.372,0,0,0-3.362-3.362H8.362A3.372,3.372,0,0,0,5,20.421V45.063a3.372,3.372,0,0,0,3.362,3.362H41.025A3.4,3.4,0,0,0,44.34,45.015ZM48.23,33.342v-1.3a4.92,4.92,0,0,0-4.9-4.9H34.06a4.92,4.92,0,0,0-4.9,4.9v1.3a4.92,4.92,0,0,0,4.9,4.9h9.27A4.92,4.92,0,0,0,48.23,33.342Zm-4.9-5a3.731,3.731,0,0,1,3.7,3.7v1.3a3.731,3.731,0,0,1-3.7,3.7H34.06a3.731,3.731,0,0,1-3.7-3.7v-1.3a3.731,3.731,0,0,1,3.7-3.7h9.27ZM40.017,14.994a.618.618,0,0,0,.288-.817L37.759,8.749a.508.508,0,0,0-.336-.288.819.819,0,0,0-.48,0L25.751,13.745a.612.612,0,0,0,.528,1.1l10.615-5,2.306,4.9a.652.652,0,0,0,.528.336C39.872,15.042,39.968,15.042,40.017,14.994Z'%20transform='translate(0%200)'%3e%3c/path%3e%3cpath%20class='b'%20d='M14.5-7.59H12.234'%20transform='translate(29.267%2040.122)'%3e%3c/path%3e%3c/g%3e%3c/svg%3e"
                  alt="Secure Payment"
                />
                <div className="flex flex-col gap-3 w-full">
                  <p className="font-bold text-sm xs:text-base xm:text-sm xd:text-base text-center lg:text-start">
                    {t("Secure Payment")}
                  </p>
                  <p className="font-normal text-[#aaa] text-xs xs:text-sm xm:text-xs xd:text-sm text-center lg:text-start">
                    {t("Secure Payment text")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* bed section */}
      {/* <section className="w-full flex justify-center items-center font-unbounded my-32">
        <div className="w-full xl:w-[1538px] px-5 xd:px-10">
          <div className="bg-[#464351] w-full h-[700px] lg2:h-80 rounded-[36px] flex items-end lg2:items-center justify-center gap-20 lg2:gap-[420px] relative px-10 py-20">
            <div>
              <p className="font-extrabold text-white text-[90px]">100%</p>
              <p className="font-normal text-white text-xl">Material quality</p>
            </div>
            <div
              className="bg-center bg-cover h-[600px] lg2:h-[500px] w-[600px] lg2:w-[500px] absolute -top-20 lg2:botto-0 left-[30%]"
              style={{ backgroundImage: "url('./bed 2.png')" }}
            ></div>
            <div className="w-full lg2:w-1/3 flex flex-col gap-5 items-start">
              <p className="text-white text-3xl font-semibold">
                "Ecologically Clean Sleep Products"
              </p>
              <p className="text-white text-base w-5/6">
                has been a company producing cotton fabrics for use all over the
                world for many years
              </p>
              <button className="bg-white text-sm px-7 py-3 rounded-[36px]">
                Collection
              </button>
            </div>
          </div>
        </div>
      </section> */}
      {/* Winter collection */}
      <section className="w-full flex justify-center items-center font-unbounded">
        <div className="w-full xl:w-[1538px] px-5 xd:px-10">
          <div className="w-full h-fit py-20">
            <div className="flex flex-col gap-2 xs:gap-5">
              <p className="font-bold text-xl xs:text-4xl text-center">
                {t("Winter collection")}
              </p>
              <p className="text-base text-center">{t("Collection text")}</p>
            </div>
            <div className="grid grid-cols-2 xm:grid-cols-3 xd:grid-cols-4 lg:grid-cols-5 gap-5 xs:gap-10 mt-10">
              {winterBeds.map((bed) => {
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
      {/* Autumn collection */}
      <section className="w-full flex justify-center items-center font-unbounded">
        <div className="w-full xl:w-[1538px] px-5 xd:px-10">
          <div className="w-full h-fit py-20">
            <div className="flex flex-col gap-2 xs:gap-5">
              <p className="font-bold text-xl xs:text-4xl text-center">
                {t("Autumn Collection")}
              </p>
              <p className="text-base text-center">{t("Collection text")}</p>
            </div>
            <div className="grid grid-cols-2 xm:grid-cols-3 xd:grid-cols-4 lg:grid-cols-5 gap-5 xs:gap-10 mt-10">
              {autumnBeds.map((bed) => {
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
      {/* Summer collection */}
      <section className="w-full flex justify-center items-center font-unbounded">
        <div className="w-full xl:w-[1538px] px-5 xd:px-10">
          <div className="w-full h-fit py-20">
            <div className="flex flex-col gap-2 xs:gap-5">
              <p className="font-bold text-xl xs:text-4xl text-center">
                {t("Summer Collection")}
              </p>
              <p className="text-base text-center">{t("Collection text")}</p>
            </div>
            <div className="grid grid-cols-2 xm:grid-cols-3 xd:grid-cols-4 lg:grid-cols-5 gap-5 xs:gap-10 mt-10">
              {summerBeds.map((bed) => {
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
      {/* News section */}
      <section className="w-full flex justify-center items-center font-unbounded mt-20 mb-40">
        <div className="w-full xl:w-[1538px] px-5 xd:px-10">
          <div className="w-full h-fit">
            <div className="flex flex-col gap-2 sm:gap-5 mb-5 sm:mb-10">
              <p className="text-center font-bold text-2xl sm:text-4xl">
                {t("News")}
              </p>
              <p className="text-sm sm:text-base text-[#a5a1a1] text-center">
                {t("Collection text")}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-10 mt-20">
              {news.map((itm) => {
                return (
                  <div className="flex flex-col gap-3 w-full sm:w-1/3">
                    <img
                      src={itm.img}
                      alt="news photo"
                      className="rounded-3xl"
                    />
                    <div className="flex gap-10 items-center text-sm xs:text-base sm:text-sm xd:text-base">
                      <p>10/05/2024</p>
                      <p className="text-[#616060] text-[8px] xs:text-xs sm:text-[8px] xm:text-xs">
                        {t("by admin")}
                      </p>
                    </div>
                    <p className="font-bold text-sm xs:text-xl sm:text-sm xm:text-base xd:text-xl tracking-tighter">
                      {itm.smtext}
                    </p>
                    <p className="text-[#5b5a5a] text-xs xs:text-base sm:text-xs xm:text-sm xd:text-base">
                      {itm.lgtext}
                    </p>
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

export default Mainpage;
