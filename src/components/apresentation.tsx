import bgFigure from "/bg-figure.png";
import woman from "/woman.png";
import darkLogo from "/darkLogo.png";
import circle from "/circle.png";

export const Apresentation = () => {
  return (
    <section className="flex w-full max-w-5xl flex-wrap items-center justify-center gap-1 pt-10 sm:justify-between md:gap-0">
      <div className="flex flex-col items-center justify-center gap-7 sm:items-start sm:pl-10">
        <h1 className="max-w-60 text-center text-2xl font-extrabold break-words sm:text-left md:max-w-64 lg:text-4xl">
          Transforme sua vida com o{" "}
          <span className="text-[#03db66]">crédito responsável</span>
        </h1>
        <button className="rounded-3xl bg-[#237745] p-2 px-8 text-[#00FF75] hover:bg-[#324d3e] hover:outline-lime-950 active:opacity-85">
          <a href="#form">Simular crédito</a>
        </button>
      </div>
      <figure
        className="relative w-full max-w-xs bg-contain bg-bottom bg-no-repeat sm:self-end md:max-w-md lg:max-w-lg"
        style={{ backgroundImage: `url(${bgFigure})` }}
      >
        <div
          className="absolute top-16 right-5 z-20 size-9 bg-contain bg-no-repeat md:top-27 md:right-8 md:size-14 lg:top-32 lg:right-14 lg:size-16"
          style={{ backgroundImage: `url(${darkLogo})` }}
        ></div>
        <img
          src={circle}
          alt="sentence turning in circle"
          className="animate-wiggle absolute top-9 -right-2 z-10 size-24 md:top-16 md:size-36 lg:top-16 lg:size-48"
        />
        <img
          src={woman}
          alt="a woman laughing"
          className="m-auto w-60 md:m-0 md:mr-auto md:w-96 lg:m-0"
        />
      </figure>
    </section>
  );
};
