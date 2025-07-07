import Footer from "./Footer";
import Footer2 from "./Footer2";
import Header from "./Header";
import TelegramButton from "./TelegramButton";

const About = () => {
  return (
    <div>
      <Header />
      <section className="w-full flex justify-center items-center font-unbounded mt-40 mb-20">
        <div className="w-full xl:w-[1538px] px-5 xd:px-10">
          <div className="w-full h-fit flex flex-col lg2:flex-row justify-between lg2:gap-0 items-center gap-10">
            <div className="w-full lg2:w-[40%] order-2 lg2:order-1">
              <p className="font-bold text-base xs:text-4xl">
                Ecologically Clean Sleep Products
              </p>
              <p className="flex flex-col gap-2 mt-5 xs:mt-10 text-[#696969] text-xs xs:text-base">
                <span>
                  Our company, which produces cotton fabrics and ecological
                  bags, has been supplying cotton fabrics to the global market
                  for many years.
                </span>
                <span>
                  Our company started its activity 17 years ago and has been
                  gaining the trust of our customers.
                </span>
                <span>
                  The main goal of our company is to create high-quality,
                  durable and environmentally friendly products.
                </span>
                <span>
                  Manufacturing processes are fully environmentally friendly and
                  environmentally friendly.
                </span>
                <span>
                  Using modern technologies, we are able to produce various
                  cotton products at a high level.
                </span>
                <span>
                  Also, we act as the official representative of DongJu weaving
                  equipment in Uzbekistan.
                </span>
                <span>
                  Every year, more than 80 types of products are produced in our
                  factory, as a result of which the company ensures high quality
                  and stable production.
                </span>
                <span>
                  More than 50 looms are operating in our enterprise based on
                  modern technologies.
                </span>
                <span>
                  In our production processes, we ensure the production of only
                  high-quality and environmentally safe products.
                </span>
                <span>
                  According to the requirements of our customers, the production
                  of eco-friendly and modern design bags has been launched.
                </span>
                <span>
                  Our company is always happy to provide quality products and
                  high level of service to its customers.
                </span>
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
