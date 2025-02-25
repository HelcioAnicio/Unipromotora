import prataDigital from "/prata-digital.png";
import santander from "/santander.png";
import digital from "/digital.png";
import fitEconomy from "/fitEconomy.png";

export const Caroussel = () => {
  return (
    <section
      className="group flex w-full items-center justify-start gap-16 overflow-hidden py-10"
      id="caroussel"
    >
      <div className="group-hover:paused animate-scroll flex w-full justify-between gap-16">
        <img
          src={prataDigital}
          alt="logo Prata Digital"
          className="data-text={text}> w-32"
        />
        <img
          src={santander}
          alt="logo Santander"
          className="data-text={text}> w-32"
        />
        <img
          src={fitEconomy}
          alt="logo Fit Economy"
          className="data-text={text}> w-24"
        />
        <img
          src={digital}
          alt="logo digital"
          className="data-text={text}> w-24"
        />
      </div>
      <div
        className="group-hover:paused animate-scroll flex w-full justify-between gap-16"
        aria-hidden="true"
      >
        <img
          src={prataDigital}
          alt="logo Prata Digital"
          className="data-text={text}> w-32"
        />
        <img
          src={santander}
          alt="logo Santander"
          className="data-text={text}> w-32"
        />
        <img
          src={fitEconomy}
          alt="logo Fit Economy"
          className="data-text={text}> w-24"
        />
        <img
          src={digital}
          alt="logo digital"
          className="data-text={text}> w-24"
        />
      </div>
    </section>
  );
};
