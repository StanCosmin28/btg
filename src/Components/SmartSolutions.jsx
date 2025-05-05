import data from "../Model/data";
export default function SmartSolutions() {
  return (
    <div className="flex w-full min-h-screen justify-center items-center flex-col md:flex-row p-5 bg-white">
      {/* Left Section: Text and Counters */}
      <div className="flex w-full md:w-1/2 min-h-[50vh] md:min-h-screen flex-col justify-center p-4 sm:p-6 md:p-8">
        <div
          id="left"
          className="flex flex-col justify-between text-left space-y-6 md:space-y-8"
        >
          {/* Header */}
          <div className="flex flex-col md:mb-10">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-amber-400">
              SOLUȚII SMART
            </h3>
            <div className="h-8 w-1 bg-amber-400 md:h-12"></div>
          </div>

          {/* Main Content */}
          <div className="w-full sm:w-[90%] md:w-[80%] space-y-4 md:space-y-6 text-black">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Proiectăm sisteme BMS direct pe planul tău.
            </h2>
            <h3 className="text-base sm:text-lg md:text-xl">
              Punem la dispoziție soluții complete de securitate, confort și
              eficiență, adaptate fiecărui spațiu și fiecărei cerințe.
            </h3>
            <h3 className="text-base sm:text-lg md:text-xl">
              Proiectăm sisteme BMS, soluții automate și instalații de
              securitate, personalizate și precise, gata să aducă un plus de
              siguranță și control clădirii tale.
            </h3>
          </div>

          {/* Icons */}
          <div className="flex flex-row flex-wrap md:gap-6 p-4 justify-between text-center text-black sm:mx-auto sm:gap-10 w-full md:max-w-[600px]">
            <div className="flex-1 min-w-[100px] p-2 flex flex-col justify-center items-center gap-2 text-blue-800">
              <img className="w-16" src={data.icon1} alt="" />
              {/* <h3 className="text-5xl font-bold">icon</h3> */}
              <p className="text-sm font-bold">EXPERTIZĂ</p>
            </div>
            <div className="flex-1 min-w-[100px] p-2 flex flex-col justify-center items-center gap-2 text-blue-800">
              <img className="w-16" src={data.icon2} alt="" />
              {/* <h3 className="text-5xl font-bold">icon</h3> */}
              <p className="text-sm font-bold">PRECIZIE</p>
            </div>
            <div className="flex-1 min-w-[100px] p-2 flex flex-col justify-center items-center gap-2 text-blue-800">
              <img className="w-16" src={data.icon3} alt="" />
              {/* <h3 className="text-5xl font-bold">icon</h3> */}
              <p className="text-sm font-bold">FIABILITATE</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="flex w-full md:w-1/2 justify-center items-center ">
        <div
          id="right"
          className="flex justify-center items-start md:items-center w-full max-w-[500px] sm:max-w-[350px] md:max-w-[600px]"
        >
          <img
            className="w-full h-auto"
            src={data.services}
            alt="House plan illustration"
          />
        </div>
      </div>
    </div>
  );
}
