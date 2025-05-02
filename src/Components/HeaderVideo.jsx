import HeaderContacts from "./HeaderContacts";
import HeroHeaderText from "./HeroHeaderText";
import data from "../Model/data";

export default function HeaderVideo() {
  return (
    <div className="relative w-full h-screen">
      <div className="bg-black opacity-60 absolute w-full h-screen"></div>
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover w-full h-full"
      >
        <source src={data.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex flex-row w-full h-full justify-center">
        <div className="z-10 text-center items-center text-white flex-row justify-center w-full ml-20">
          {/* <h1 className="text-7xl font-bold">
          Proiectăm Viitorul <br /> Inteligent al Clădirilor
        </h1> */}
          <HeroHeaderText />
        </div>
        <div className="absolute bottom-10 text-center z-10 items-center text-white flex-col">
          <HeaderContacts />
        </div>
      </div>
    </div>
  );
}
