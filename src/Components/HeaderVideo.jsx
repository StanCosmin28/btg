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
        <source src="public/btg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center text-left w-full h-full text-white p-8">
        <h1 className="text-7xl font-bold">
          Proiectăm Viitorul <br /> Inteligent al Clădirilor
        </h1>
      </div>
    </div>
  );
}
