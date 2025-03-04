import prataDigital from "/prata-digital.png";
import santander from "/santander.png";
import digital from "/digital.png";
import fitEconomy from "/fitEconomy.png";

export const Caroussel = () => {
  return (
    <section className="group flex w-full overflow-hidden py-10" id="caroussel">
      <div className="group-hover:paused animate-scroll flex w-full min-w-full flex-nowrap justify-around gap-10">
        <img
          src={prataDigital}
          alt="logo Prata Digital"
          className="data-text={text} w-20 max-w-none lg:w-32 2xl:w-48"
        />
        <img
          src={santander}
          alt="logo Santander"
          className="data-text={text} w-20 max-w-none lg:w-32 2xl:w-48"
        />
        <img
          src={fitEconomy}
          alt="logo Fit Economy"
          className="data-text={text} w-20 max-w-none lg:w-32 2xl:w-48"
        />
        <img
          src={digital}
          alt="logo digital"
          className="data-text={text} w-20 max-w-none lg:w-32 2xl:w-48"
        />
      </div>
      <div
        className="group-hover:paused animate-scroll flex w-full min-w-full flex-nowrap justify-around gap-10"
        aria-label="true"
      >
        <img
          src={prataDigital}
          alt="logo Prata Digital"
          className="data-text={text} w-20 max-w-none lg:w-32 2xl:w-48"
        />
        <img
          src={santander}
          alt="logo Santander"
          className="data-text={text} w-20 max-w-none lg:w-32 2xl:w-48"
        />
        <img
          src={fitEconomy}
          alt="logo Fit Economy"
          className="data-text={text} w-20 max-w-none lg:w-32 2xl:w-48"
        />
        <img
          src={digital}
          alt="logo digital"
          className="data-text={text} w-20 max-w-none lg:w-32 2xl:w-48"
        />
      </div>
      {/* 
      <div
        className="group-hover:paused animate-scroll hidden flex-nowrap lg:flex"
        aria-label="true"
      >
        <img
          src={prataDigital}
          alt="logo Prata Digital"
          className="data-text={text} mx-10 w-32 max-w-none lg:mx-20"
        />
        <img
          src={santander}
          alt="logo Santander"
          className="data-text={text} mx-10 w-32 max-w-none lg:mx-20"
        />
        <img
          src={fitEconomy}
          alt="logo Fit Economy"
          className="data-text={text} mx-10 w-32 max-w-none lg:mx-20"
        />
        <img
          src={digital}
          alt="logo digital"
          className="data-text={text} mx-10 w-32 max-w-none lg:mx-20"
        />
      </div> */}
    </section>
  );
};
