import { useTranslation } from "react-i18next";
import Footer from "./Footer";
import Footer2 from "./Footer2";
import Header from "./Header";
import TelegramButton from "./TelegramButton";
import "animate.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";

const Contact = () => {
  const { t } = useTranslation();

  const { register, reset, handleSubmit } = useForm<{
    email: string;
    phone: string;
    message?: string;
  }>();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      <Header />
      <section className="w-full flex items-center justify-center mt-20 xs:mt-40 font-unbounded mb-20">
        <div className="w-full xl:w-[1538px] px-5 xd:px-10 flex flex-col lg:flex-row justify-center gap-16">
          <div className="flex flex-col gap-5 xs:gap-10 w-full lg:w-1/2 animate__fadeInLeft animate__animated">
            <p className="font-bold text-2xl xs:text-3xl">{t("Connection")}</p>
            <form
              onSubmit={handleSubmit((d) => {
                const token = "8059436697:AAGS4ZlabmGtV_9V83iBzlRnIAN6kIzUD1U";

                const chatId = "1936754751";
                const url = `https://api.telegram.org/bot${token}/sendMessage`;
                const message = `Email: ${d.email}\nRaqami: ${d.phone}\nXabari: ${d.message}`;
                const data = {
                  chat_id: chatId,
                  text: message,
                };
                axios.post(url, data).then(() => {
                  reset();
                  toast.success("Message sent");
                });
              })}
              className="w-full flex flex-col gap-3 xs:gap-8 items-start"
            >
              <input
                {...register("email")}
                required
                type="text"
                className="px-5 py-2 xs:py-4 bg-[#e4e4e4] rounded-3xl outline-none placeholder:text-sm w-full"
                placeholder={t("Your email")}
              />
              <input
                {...register("phone")}
                required
                type="text"
                className="px-5 py-2 xs:py-4 bg-[#e4e4e4] rounded-3xl outline-none placeholder:text-sm w-full"
                placeholder={t("Your phone number")}
              />
              <textarea
                {...register("message")}
                className="px-5 py-2 xs:py-4 bg-[#e4e4e4] rounded-3xl outline-none placeholder:text-sm w-full resize-none h-[150px] placeholder:font-monospace"
                placeholder={t("Please write if you have a message")}
              />
              <button className="px-16 py-3 rounded-full bg-[#ff0000] text-white text-sm">
                {t("Send")}
              </button>
            </form>
          </div>
          <div className="w-full lg:w-1/2 border border-black">
            <div
              className="w-full flex justify-center xl:justify-end"
              style={{ position: "relative", overflow: "hidden" }}
            >
              <a
                href="https://yandex.uz/maps/org/18459554780/?utm_medium=mapframe&utm_source=maps"
                style={{
                  color: "#eee",
                  fontSize: "12px",
                  position: "absolute",
                  top: "0px",
                }}
              >
                ATM sanita pharma
              </a>
              <a
                href="https://yandex.uz/maps/10335/tashkent/category/management_company/184105510/?utm_medium=mapframe&utm_source=maps"
                style={{
                  color: "#eee",
                  fontSize: "12px",
                  position: "absolute",
                  top: "14px",
                }}
              >
                Boshqaruvchi kompaniya Toshkentda
              </a>
              <iframe
                src="https://yandex.uz/map-widget/v1/?ll=69.324318%2C41.211905&mode=search&oid=18459554780&ol=biz&z=14.8"
                className="w-full h-[600px]"
                style={{ position: "relative" }}
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Footer2 />
      <ToastContainer />
      <TelegramButton />
    </div>
  );
};

export default Contact;
