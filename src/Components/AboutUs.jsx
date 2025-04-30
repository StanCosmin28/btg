export default function AboutUs() {
  return (
    <div className="flex w-full min-h-screen justify-center items-center flex-col md:flex-row">
      {/* Left Section: Text and Counters */}
      <div className="flex w-full md:w-1/2 min-h-[50vh] md:min-h-screen flex-col justify-between p-4 sm:p-6 md:p-8">
        <div
          id="left"
          className="flex flex-col justify-between text-left space-y-6 md:space-y-8 lg:ml-20"
        >
          {/* Header */}
          <div className="flex flex-col">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-amber-400">
              DESPRE NOI
            </h3>
            <div className="h-8 w-1 bg-amber-400 md:h-12"></div>
          </div>

          {/* Main Content */}
          <div className="w-full sm:w-[90%] md:w-[80%] space-y-4 md:space-y-6 text-black">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Partenerul tău de încredere în proiectare
            </h2>
            <h3 className="text-base sm:text-lg md:text-xl">
              BTG (BUILDING TECHNOLOGY GROUP) este o companie specializată în
              soluții de automatizare pentru clădiri, oferind sisteme Building
              Management System (BMS) personalizate pentru diverse tipuri de
              spații: rezidențiale, comerciale și industriale.
            </h3>
            <h3 className="text-base sm:text-lg md:text-xl">
              Scopul principal al acestor sisteme este de a îmbunătăți
              Confortul, Siguranța și Eficiența energetică a clădirilor,
              permițând controlul de la distanță al diferitelor funcții ale
              acestora.
            </h3>
            <button className="p-2 sm:p-3 text-base sm:text-lg md:text-xl border-[1px] border-blue-800 text-blue-800 font-bold hover:bg-blue-800 hover:text-white transition-all hover:scale-105 rounded-lg cursor-pointer">
              Descoperă mai mult
            </button>
          </div>

          {/* Counters */}
          <div className="flex flex-row flex-wrap gap-4 p-4 justify-between text-center text-black">
            <div className="flex-1 min-w-[100px] p-2 flex flex-col justify-center items-center gap-2 text-blue-800">
              <h3 className="text-5xl font-bold">15+</h3>
              <p className="text-sm">Ani de experienta</p>
            </div>
            <div className="flex-1 min-w-[100px] p-2 flex flex-col justify-center items-center gap-2 text-blue-800">
              <h3 className="text-5xl font-bold">150+</h3>
              <p className="text-sm">Proiecte livrate cu succes</p>
            </div>
            <div className="flex-1 min-w-[100px] p-2 flex flex-col justify-center items-center gap-2 text-blue-800">
              <h3 className="text-5xl font-bold">50+</h3>
              <p className="text-sm">Viitoare colaborari</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="flex w-full md:w-1/2 min-h-[50vh] md:min-h-screen justify-center items-center p-4">
        <div
          id="right"
          className="flex justify-center items-center w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px]"
        >
          <img
            className="w-full h-auto object-contain"
            src="public/house-plan.svg"
            alt="House plan illustration"
          />
        </div>
      </div>
    </div>
  );
}
