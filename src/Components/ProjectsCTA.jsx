import { Link } from "react-router-dom";
export default function ProjectsCTA() {
  return (
    <div className="max-w-7xl h-auto text-black text-left flex flex-col gap-20 my-40 mx-auto">
      <h2 className="text-4xl font-bold text-blue-900 leading-12">
        Ești gata să faci primul pas <br /> spre un proiect bine planificat?{" "}
      </h2>
      <h3 className="text-xl max-w-md">
        Suntem aici să răspundem întrebărilor tale și să te ajutăm să-ți
        transformi viziunea în realitate.
      </h3>
      <div className="flex flex-row gap-10">
        <button className="cursor-pointer max-w-md text-xl py-4 px-8 bg-blue-800 text-white font-bold border-2 border-blue-800 transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-900 hover:border-blue-900 hover:rounded-xl hover:scale-104">
          Solicita Consultatie
        </button>
        <Link to="/btg/despre-noi">
          <button className="cursor-pointer max-w-md text-xl py-4 px-8  text-blue-800 font-bold border-2 border-blue-800 transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-900 hover:border-blue-900 hover:rounded-xl hover:scale-104">
            Despre Noi
          </button>
        </Link>
      </div>
    </div>
  );
}
