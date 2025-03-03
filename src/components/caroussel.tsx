import prataDigital from "/prata-digital.png";
import santander from "/santander.png";
import digital from "/digital.png";
import fitEconomy from "/fitEconomy.png";

export const Caroussel = () => {
  return (
    <section className="group flex w-full overflow-hidden py-10" id="caroussel">
      <div className="group-hover:paused animate-scroll flex flex-nowrap">
        <img
          src={prataDigital}
          alt="logo Prata Digital"
          className="data-text={text} mx-10 w-32 max-w-none"
        />
        <img
          src={santander}
          alt="logo Santander"
          className="data-text={text} mx-10 w-32 max-w-none"
        />
        <img
          src={fitEconomy}
          alt="logo Fit Economy"
          className="data-text={text} mx-10 w-32 max-w-none"
        />
        <img
          src={digital}
          alt="logo digital"
          className="data-text={text} mx-10 w-32 max-w-none"
        />
        <img
          src={prataDigital}
          alt="logo Prata Digital"
          className="data-text={text} mx-10 w-32 max-w-none"
        />
        <img
          src={santander}
          alt="logo Santander"
          className="data-text={text} mx-10 w-32 max-w-none"
        />
        <img
          src={fitEconomy}
          alt="logo Fit Economy"
          className="data-text={text} mx-10 w-32 max-w-none"
        />
        <img
          src={digital}
          alt="logo digital"
          className="data-text={text} mx-10 w-32 max-w-none"
        />
      </div>
    </section>
  );
};
