import data from "../Model/data";

const Expertiza = () => {
  return (
    <section
      id="expertiza"
      className="w-full min-h-[500px] md:min-h-[700px] sm:h-[500px] relative bg-fit bg-right flex items-center bg-[#f7f8fa] xl:pl-20"
      style={{
        backgroundSize: "auto 100%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${data.housePlan2})`,
      }}
    >
      {/* Gradient Overlay (uncomment if needed for text contrast) */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.25)] to-[rgba(0,0,0,0.25)]"></div> */}

      {/* Content */}
      <div className="w-full md:w-2/3 h-full flex flex-col justify-center items-left p-4 sm:p-6 md:p-8  z-[10] text-left">
        <div className="flex flex-col space-y-6">
          {/* Header */}
          <div className="flex flex-col">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-[#CC9D23]">
              Expertiză
            </h3>
            <div className="h-8 w-1 bg-[#CC9D23] md:h-12"></div>
          </div>

          {/* Main Content */}
          <div className="text-black flex flex-col ">
            <h2 className="text-6xl font-semibold max-[576px]:text-[35px] md:text-5xl sm:text-3xl max-w-sm md:max-w-xl lg:text-5xl lg:max-w-[850px]">
              Soluții personalizate pentru orice tip de clădire
            </h2>
            <p className="text-xl mt-6 max-w-lg max-[376px]:text-sm lg:text-2xl lg:max-w-[550px] ">
              Adaptăm soluții pentru diverse tipuri de clădiri, asigurând
              siguranță sporită, economii de energie și costuri operaționale
              reduse, cu sisteme fiabile și ușor de integrat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertiza;
