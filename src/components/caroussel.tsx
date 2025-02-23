import prataDigital from "../assets/prata-digital.png";
import santander from "../assets/santander.png";

export const Caroussel = () => {
  return (
    <section className="flex gap-14 overflow-hidden py-10 pl-14">
      <img src={prataDigital} alt="logo Prata Digital" className="w-40" />
      <img src={santander} alt="logo Santander" className="w-40" />
    </section>
  );
};
