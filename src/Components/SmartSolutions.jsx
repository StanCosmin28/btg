export default function SmartSolutions() {
  return (
    <div className="flex w-full min-h-screen justify-center items-center flex-col md:flex-row bg-white">
      {/* Left Section: Text and Counters */}
      <div className="flex w-full md:w-1/2 min-h-[50vh] md:min-h-screen flex-col justify-center p-4 sm:p-6 md:p-8">
        <div
          id="left"
          className="flex flex-col justify-between text-left space-y-6 md:space-y-8 lg:ml-20"
        >
          {/* Header */}
          <div className="flex flex-col">
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

          {/* Counters */}
          <div className="flex flex-row flex-wrap gap-4 p-4 justify-between text-center text-black">
            <div className="flex-1 min-w-[100px] p-2 flex flex-col justify-center items-center gap-2 text-blue-800">
              <h3 className="text-5xl font-bold">icon</h3>
              <p className="text-sm">EXPERTIZĂ</p>
            </div>
            <div className="flex-1 min-w-[100px] p-2 flex flex-col justify-center items-center gap-2 text-blue-800">
              <h3 className="text-5xl font-bold">icon</h3>
              <p className="text-sm">PRECIZIE</p>
            </div>
            <div className="flex-1 min-w-[100px] p-2 flex flex-col justify-center items-center gap-2 text-blue-800">
              <h3 className="text-5xl font-bold">icon</h3>
              <p className="text-sm">FIABILITATE</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="flex w-full md:w-1/2 min-h-[50vh] md:min-h-screen justify-center items-center p-4">
        <div
          id="right"
          className="flex justify-center items-center w-full max-w-[500px] sm:max-w-[350px] md:max-w-[400px]"
        >
          <img
            className="w-full h-auto object-contain"
            src="public/services.svg"
            alt="House plan illustration"
          />
        </div>
      </div>
    </div>
  );
}
