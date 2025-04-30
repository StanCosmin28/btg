export default function FlexSection() {
  return (
    <div className="flex h-full bg-red justify-center items-center md:flex-row flex-col">
      <div className="flex w-full h-full border-1 border-orange-400 justify-between flex-col">
        <div className="w-full p-8 bg-amber-300 h-full text-left">
          <h3>Despre Noi</h3>
          line
          <h2>Partenerul tău de încredere în proiectare</h2>
        </div>
        <div className="w-full p-8 bg-amber-400 h-full text-left">
          <h2 className="">Partenerul tău de încredere în proiectare</h2>
          <h3 className="">
            BTG (BUILDING TECHNOLOGY GROUP) este o companie specializată în
            soluții de automatizare pentru clădiri, oferind sisteme Building
            Management System (BMS) personalizate pentru diverse tipuri de
            spații: rezidențiale, comerciale și industriale. Scopul principal al
            acestor sisteme este de a îmbunătăți Confortul, Siguranța și
            Eficiența energetică a clădirilor, permițând controlul de la
            distanță al diferitelor funcții ale acestora.
          </h3>
          <button className="">Descoperă mai mult</button>
        </div>
        <div className="w-full p-8 bg-amber-500 h-full text-left flex flex-row justify-between">
          <div className="">
            <h3>Counter1</h3>
            <p>Ani de experienta</p>
          </div>
          <div className="">
            <h3>Counter2</h3>
            <p>Proiecte livrate cu succes</p>
          </div>
          <div className="">
            <h3>Counter3</h3>
            <p>Viitoare colaborari</p>
          </div>
        </div>
      </div>
      <div className="flex w-full h-full border-1 border-green-400 justify-center items-center">
        {/* <h1>right</h1> */}
        <img
          className="p-12"
          src="public/house-plan.svg"
          alt="svg house plan"
        />
      </div>
    </div>
  );
}
