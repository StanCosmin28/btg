export default function AboutUsSection() {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto py-8 px-4 md:px-8 my-10 lg:my-30">
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#CD9C22] mb-2">
          Despre noi
        </h2>
        <div className="w-54 h-1 bg-[#CD9C22] mb-20 mt-6"></div>
        <p className="text-gray-700 mb-10 text-left text-xl">
          Cu peste <span className="font-bold"> 15 ani de experiență, </span>{" "}
          BTGRomania oferă soluții tehnice personalizate pentru orice clădire —
          spitale, școli, instituții, complexe rezidențiale sau birouri. Ne
          concentrăm pe control total, siguranță și eficiență pe termen lung.
        </p>
        <p className="text-gray-700 mb-10 text-left text-xl">
          Proiectăm sisteme integrate care aduc claritate și eficiență încă din
          planificare, colaborând strâns cu fiecare client pentru soluții
          adaptate nevoilor lor.
        </p>
        <p className="text-gray-700 text-left text-xl">
          Valorile noastre, bazate pe zeci de ani de experiență practică, ne
          ghidează și ne motivează să depășim constant așteptările.
        </p>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <img
          src="https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?q=80&w=1379&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="About us cover image"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
