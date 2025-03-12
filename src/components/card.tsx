import { useState } from "react";

interface Props {
  img: string;
  alt: string;
  heading: string;
  paragraph: string;
  span?: string;
  secondParagraph?: string;
}

export const Card: React.FC<Props> = ({
  img,
  alt,
  heading,
  paragraph,
  span,
  secondParagraph,
}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <>
      <div
        className={`group relative h-[325px] w-[300px] perspective-distant 2xl:h-[425px] 2xl:w-[375px]`}
        onClick={() => setFlipped(!flipped)}
      >
        <div
          className={`absolute h-full w-full max-w-72 transform duration-1000 backface-hidden transform-3d group-hover:rotate-y-180 ${flipped && "rotate-y-180"}`}
        >
          <div className="absolute flex h-full w-full flex-col items-center justify-center gap-5 rounded-2xl bg-[#05D062] px-7 pb-10 text-center text-white shadow-md">
            <div className="-mt-5 flex size-32 items-center justify-center rounded-full bg-[#237745] p-7">
              <img src={img} alt={alt} className="size-20" />
            </div>

            <h4 className="text-xl font-bold">{heading}</h4>
            <p>
              {paragraph}{" "}
              {span !== null && <span className="font-bold"> {span}</span>}{" "}
              {secondParagraph}
            </p>
          </div>

          <div className="absolute flex h-full w-full rotate-y-180 items-center justify-center rounded-2xl bg-[#237745] shadow-md backface-hidden">
            <div className="absolute flex h-full w-full flex-col items-center justify-center gap-5 rounded-2xl bg-[#FAFCFB] px-7 pb-10 text-center shadow-md">
              <div className="-mt-5 flex size-32 items-center justify-center rounded-full bg-[#237745] p-7">
                <img src={img} alt={alt} className="size-20" />
              </div>

              <h4 className="text-xl font-bold">{heading}</h4>
              <p>
                {paragraph}{" "}
                {span !== null && <span className="font-bold"> {span}</span>}{" "}
                {secondParagraph}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
