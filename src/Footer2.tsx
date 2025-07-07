import { useTranslation } from "react-i18next";

const Footer2 = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex justify-center items-center bg-black font-unbounded mt-12">
      <div className="w-full xl:w-[1538px] px-5 xd:px-10">
        <p className="text-[#545454] text-sm font-normal py-7">
          © 2024 {t("Footer text 2")}
        </p>
      </div>
    </div>
  );
};

export default Footer2;
