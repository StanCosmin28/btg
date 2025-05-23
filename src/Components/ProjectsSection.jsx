import projectsData from "../Model/projectsData";
import ProjectsCard from "./ProjectsCard";

// function Button({ children, className, onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-gray-900 text-white hover:bg-gray-800 h-10 py-2 px-4 ${
//         className || ""
//       }`}
//     >
//       {children}
//     </button>
//   );
// }

export default function ProjectsSection() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl flex flex-col">
        <h2 className="text-red-600 text-4xl font-bold mb-2 text-left">
          PORTOFOLIU
        </h2>
        <hr className="border-red-600 w-40 border-2 mb-4" />
        <div className="flex flex-col items-start text-left  mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5 text-black">
            BTG construiește viitorul — sustenabil, eficient și tehnologizat.
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mb-5">
            Fiecare proiect este o oportunitate de a integra expertiza în
            construcții civile și industriale cu soluții inteligente, de la
            sisteme BMS la panouri fotovoltaice.
          </p>

          <p className="text-lg text-gray-600 max-w-4xl">
            Ne angajăm să livrăm valoare prin inovație, calitate și respect
            pentru mediu, adaptându-ne nevoilor unice ale clienților noștri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-black">
          {projectsData.map((post) => (
            <ProjectsCard key={post.id} post={post} />
          ))}
        </div>
        <div className="flex justify-center items-center">
          <a
            className="text-gray-900 opacity-50 underline p-2 mt-4 cursor-pointer"
            onClick={() =>
              alert(`no posts yet...come back later or read the ones we have`)
            }
          >
            Load More Posts
          </a>
        </div>
        {/* <div className="mt-12 text-center">
          <a href="/blog" className="inline-block">
            <Button>View All Articles</Button>
          </a>
        </div> */}
      </div>
    </section>
  );
}
