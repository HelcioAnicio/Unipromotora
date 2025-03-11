import bigLogo from "/bigLogo.png";
import man from "/manBlack.png";
import darkLogo from "/darkLogo.png";
import circle from "/circle.png";

export const Apresentation = () => {
  return (
    <section className="h-[calc(100dvh-80px)] w-full overflow-hidden rounded-br-[62px] bg-[#E7F6E9] xl:h-[calc(100dvh-94px)]">
      <div className="adapte m-auto flex h-full w-full max-w-6xl flex-col items-center justify-between gap-10 pt-10 lg:flex-row">
        <div className="flex flex-col items-center justify-center gap-7 pt-10 md:w-1/2 lg:items-start lg:pl-10">
          <h1 className="max-w-60 text-center text-2xl md:max-w-96 md:text-5xl lg:text-left">
            Transforme sua vida com o{" "}
            <span className="font-extrabold text-[#03db66]">
              crédito responsável
            </span>
          </h1>
          <button className="rounded-3xl bg-[#237745] p-2 px-8 text-[#00FF75] hover:bg-[#324d3e] hover:outline-lime-950 active:opacity-85 md:text-3xl">
            <a href="#form">Simular crédito</a>
          </button>
        </div>
        <figure
          className="relative w-4/5 bg-contain bg-bottom bg-no-repeat lg:self-end"
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
            className="m-auto w-full lg:w-6/7"
          />
        </figure>
      </div>
    </section>
  );
};
