import bgFigure from "/bg-figure.png";
import woman from "/woman.png";
import darkLogo from "/darkLogo.png";
import circle from "/circle.png";

export const Apresentation = () => {
  return (
    <section className="flex w-full max-w-5xl flex-wrap items-center justify-center gap-1 pt-10 md:justify-between md:gap-0">
      <div className="flex flex-col items-center justify-center gap-7 md:items-start md:pl-10">
        <h1 className="max-w-60 text-center text-2xl font-extrabold break-words md:max-w-64 md:text-left lg:text-4xl">
          Transforme sua vida com o{" "}
          <span className="text-[#03db66]">crédito responsável</span>
        </h1>
        <button className="rounded-3xl bg-[#237745] px-5 py-2 text-[#00FF75]">
          <a href="#form">Simular crédito</a>
        </button>
      </div>
      <figure
        className="relative w-full max-w-xs bg-contain bg-bottom bg-no-repeat sm:self-end md:max-w-md lg:max-w-lg"
        style={{ backgroundImage: `url(${bgFigure})` }}
      >
        <div
          className="absolute top-16 right-7 z-20 size-6 bg-cover bg-no-repeat md:top-23 md:right-10 lg:top-28 lg:right-24 lg:size-8"
          style={{ backgroundImage: `url(${darkLogo})` }}
        ></div>
        <img
          src={circle}
          alt="sentence turning in circle"
          className="animate-wiggle absolute top-9 right-0 z-10 size-20 md:top-16 md:right-3 lg:top-20 lg:right-16 lg:size-24"
        />
        <img
          src={woman}
          alt="a woman laughing"
          className="m-auto w-60 md:w-96 lg:m-0 lg:mr-auto"
        />
      </figure>
    </section>
  );
};
