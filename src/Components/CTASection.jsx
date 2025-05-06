import data from "../Model/data";
export default function CTAButtonSection() {
  return (
    <div
      className="w-full min-h-[500px] bg-black flex justify-center"
      style={{
        // backgroundSize: "auto 100%",
        backgroundImage: `url(${data.ctaSection})`,
      }}
    >
      <div className="flex flex-col justify-center ">
        <h1 className="text-5xl">
          Ești gata să faci primul pas spre <br />
          un proiect bine planificat?{" "}
        </h1>
        <h3>
          Suntem aici să răspundem întrebărilor tale și să te <br /> ajutăm
          să-ți transformi viziunea în realitate.
        </h3>
        <button className="">SOLITĂ O CONSULTAȚIE</button>
      </div>
    </div>
  );
}
