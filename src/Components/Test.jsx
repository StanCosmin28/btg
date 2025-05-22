import data from "../Model/data";
export default function Test() {
  return (
    <>
      <div className="h-120 md:h-160 lg:h-100 w-full relative bg-gray-800 flex justify-center lg:block ">
        <div className="flex flex-col gap-4 lg:gap-10 w-full h-full p-5 lg:justify-start lg:items-start max-w-[1440px] lg:relative lg:mx-auto">
          <h2 className="text-[20px] md:text-3xl font-bold text-white mt-10">
            Vrei spații moderne și eficiente? <br /> Hai să discutăm despre
            proiectul tău!
          </h2>
          <button className="bg-red-600 hover:bg-red-800 hover:scale-105 text-white font-medium py-4 px-10 transition duration-300 cursor-pointer">
            CONSULTANȚĂ GRATUITĂ
          </button>
          <img
            className="max-h-80 absolute right-0 bottom-9"
            src={data.CTAsvg}
            alt=""
          />
        </div>
        <div className="h-10 w-full bg-[#2691EA] absolute bottom-0 z-10"></div>
      </div>
    </>
  );
}
