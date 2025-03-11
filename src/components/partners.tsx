import womanWorking from "/womanWorking.png";
import bgGreen from "/bgGreen.png";
import logo from "/darkLogo.png";

export const Partners = () => {
  return (
    <section className="-mt-16 flex w-full flex-col bg-[#237745] px-2 py-32">
      <div className="m-auto flex w-full max-w-5xl flex-col items-center justify-center gap-10 lg:flex-row lg:justify-between lg:pr-32">
        <div className="flex flex-col items-start gap-10">
          <p className="w-full max-w-md text-3xl text-white">
            Aumente a
            <span className="font-bold"> rentabilidade do seu negócio </span>
            oferecendo crédito aos seus clientes com a Unipromotora.
          </p>
          <button className="cursor-pointer rounded-3xl bg-[#03DB66] px-5 py-2 text-white transition-all duration-300 hover:bg-[#03db68ba]">
            <a href="#form" className="text-white">
              Chamar no Whatsapp
            </a>
          </button>
        </div>

        <figure className="relative w-full max-w-sm">
          <div
            className="absolute top-14 -right-10 flex size-20 -rotate-12 items-center justify-center bg-contain bg-center bg-no-repeat sm:-right-8 sm:size-24 lg:-right-28 lg:size-28"
            style={{ backgroundImage: `url(${bgGreen})` }}
          >
            <img src={logo} alt="logo of company" className="w-1/2" />
          </div>
          <img
            src={womanWorking}
            alt="man looking to horizont"
            className="w-full max-w-md lg:w-lg"
          />
        </figure>
      </div>
    </section>
  );
};
