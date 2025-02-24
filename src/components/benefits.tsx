import { MdOutlinePix } from "react-icons/md";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { RiCoinsFill } from "react-icons/ri";
import darkLogo from "../assets/darkLogo.png";
import bgWhite from "../assets/bg-white.png";
import womanPointing from "../assets/woman-pointing.png";
import circle from "../assets/circle.png";

export const Benefits = () => {
  return (
    <section className="flex w-full items-center bg-[#00FF75] py-14 lg:py-0">
      <div
        style={{ backgroundImage: `url(${bgWhite})` }}
        className="hidden w-full max-w-md self-end bg-contain bg-right-bottom bg-no-repeat lg:block"
      >
        <div className="relative">
          <div
            className="absolute top-36 right-14 z-20 size-10 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${darkLogo})` }}
          ></div>
          <img
            src={circle}
            alt="company's logo"
            className="animate-wiggle absolute top-28 right-5 z-10 size-28"
          />
        </div>
        <figure>
          <img
            src={womanPointing}
            alt="woman pointing to up"
            className="w-full max-w-sm"
          />
        </figure>
      </div>
      <div className="m-auto flex w-full max-w-sm flex-col items-center gap-5 px-1 md:p-10">
        <h2 className="self-start py-5 text-2xl font-bold">Nossas vantagens</h2>
        <div className="flex w-full max-w-xl items-center gap-2 rounded-4xl bg-[#FAFCFB] p-3 sm:py-5">
          <MdOutlinePix className="size-11 rounded-full bg-[#00FF75] p-2 text-black" />
          <p className="w-full">
            Facilidade na contratação e pagamento rápido,
            <span className="font-bold"> tudo 100% digital via PIX</span>
          </p>
        </div>
        <div className="flex w-full max-w-xl items-center gap-2 rounded-4xl bg-[#FAFCFB] p-3 sm:py-5">
          <FaHandHoldingDollar className="size-11 rounded-full bg-[#00FF75] p-2 text-black" />
          <p className="w-full">
            <span className="font-bold">Sem parcelas mensais</span>, com
            desconto único anual diretamente no FGTS
          </p>
        </div>
        <div className="flex w-full max-w-xl items-center gap-2 rounded-4xl bg-[#FAFCFB] p-3 sm:py-5">
          <FaClock className="size-11 rounded-full bg-[#00FF75] p-2 text-black" />
          <p className="w-full">
            Dinheiro rápido, com{" "}
            <span className="font-bold">liberação em até 24 horas </span>
            úteis ou menos
          </p>
        </div>
        <div className="flex w-full max-w-xl items-center gap-2 rounded-4xl bg-[#FAFCFB] p-3 sm:py-5">
          <RiCoinsFill className="size-11 rounded-full bg-[#00FF75] p-2 text-black" />
          <p className="w-full">
            Contrate <span className="font-bold">a partir de R$ 50 </span>
            de forma simples e rápida
          </p>
        </div>
      </div>
    </section>
  );
};
