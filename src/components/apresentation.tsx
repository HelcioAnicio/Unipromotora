import bigLogo from "/bigLogo.png";
import man from "/manBlack.png";
import darkLogo from "/darkLogo.png";
import circle from "/circle.png";

export const Apresentation = () => {
  return (
    <section className="w-full rounded-br-[62px] bg-[#E7F6E9]">
      <div className="m-auto flex w-full max-w-5xl flex-wrap items-center justify-center gap-1 pt-10 sm:justify-between md:gap-0">
        <div className="flex flex-col items-center justify-center gap-7 sm:items-start sm:pl-10">
          <h1 className="max-w-60 text-center text-2xl break-words sm:text-left md:max-w-64 lg:text-4xl 2xl:max-w-80">
            Transforme sua vida com o{" "}
            <span className="font-extrabold text-[#03db66]">
              crédito responsável
            </span>
          </h1>
          <button className="rounded-3xl bg-[#237745] p-2 px-8 text-[#00FF75] hover:bg-[#324d3e] hover:outline-lime-950 active:opacity-85">
            <a href="#form">Simular crédito</a>
          </button>
        </div>
        <figure
          className="relative w-full max-w-xs bg-contain bg-bottom bg-no-repeat sm:self-end md:max-w-md lg:max-w-lg 2xl:max-w-xl"
          style={{ backgroundImage: `url(${bigLogo})` }}
        >
          <div
            className="absolute top-5 -right-4 flex size-28 items-center justify-center bg-[auto_40%] bg-center bg-no-repeat md:size-40 lg:size-44"
            style={{ backgroundImage: `url(${darkLogo})` }}
          >
            <img
              src={circle}
              alt="sentence turning in circle"
              className="animate-wiggle full"
            />
          </div>
          <img
            src={man}
            alt="a man laughing"
            className="m-auto w-72 md:w-96 2xl:w-lg"
          />
        </figure>
      </div>
    </section>
  );
};
