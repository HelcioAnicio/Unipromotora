import prataDigital from "../assets/prata-digital.png";
import santander from "../assets/santander.png";
import digital from "../assets/digital.png";
import fitEconomy from "../assets/fitEconomy.png";

export const Caroussel = () => {
  return (
    <section className="group flex items-center gap-96 overflow-hidden py-5 pl-14">
      <div className="group-hover:paused animate-scroll flex gap-16">
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
        className="group-hover:paused animate-scroll flex gap-16"
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
