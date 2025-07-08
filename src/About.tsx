import { useTranslation } from "react-i18next";
import Footer from "./Footer";
import Footer2 from "./Footer2";
import Header from "./Header";
import TelegramButton from "./TelegramButton";

const About = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Header />
      <section className="w-full flex justify-center items-center font-unbounded mt-40 mb-20">
        <div className="w-full xl:w-[1538px] px-5 xd:px-10">
          <div className="w-full h-fit flex flex-col lg2:flex-row justify-between lg2:gap-0 items-center gap-10">
            <div className="w-full lg2:w-[40%] order-2 lg2:order-1">
              <p className="font-bold text-base xs:text-4xl">
                {t("About sm text")}
              </p>
              <p className="flex flex-col gap-2 mt-5 xs:mt-10 text-[#696969] text-xs xs:text-base">
                <span>{t("About lg text 1")}</span>
                <span>{t("About lg text 2")}</span>
                <span>{t("About lg text 3")}</span>
                <span>{t("About lg text 4")}</span>
                <span>{t("About lg text 5")}</span>
                <span>{t("About lg text 6")}</span>
                <span>{t("About lg text 7")}</span>
                <span>{t("About lg text 8")}</span>
                <span>{t("About lg text 9")}</span>
                <span>{t("About lg text 10")}</span>
                <span>{t("About lg text 11")}</span>
              </p>
            </div>
            <div className="w-full lg2:w-[55%] rounded-3xl overflow-hidden shadow-black shadow-2xl order-1 lg2:order-2">
              <img
                src="./About page photo.png"
                alt="photo"
                className="w-full"
              />
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

export default About;
