import data from "../Model/data";

export default function AboutUsHeader() {
  return (
    <>
      <div className="w-full h-[60vh] overflow-hidden relative">
        <img
          src={data.blogHeader}
          alt="Blog header image"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] max-w-3xl min-h-[48px] sm:min-h-[60px] bg-[#CD9C22] z-10 flex items-center justify-between p-1">
        <div className="flex flex-row gap-1 sm:gap-2 md:gap-4 lg:gap-6 mx-auto w-full">
          <div className="flex justify-center items-center p-1 sm:p-2 md:p-3">
            <h2 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white whitespace-nowrap">
              Functionalitate Inteligenta
            </h2>
          </div>
          <div className="bg-white grow">
            <h2 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#CD9C22] p-2  md:p-3 whitespace-nowrap">
              Integrata in plan
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
