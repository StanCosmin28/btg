import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// BlogCard Component
const BlogCard = ({ post }) => {
  const { image, title, description, date, link } = post;

  return (
    <div className="min-w-[280px] max-w-sm flex-shrink-0 bg-white border border-gray-200 rounded-lg shadow-sm mx-2 my-4">
      <a href={link}>
        <img
          className="rounded-t-lg w-full h-48 object-cover"
          src={image || "/api/placeholder/400/320"}
          alt={title}
        />
      </a>
      <div className="p-5 text-left">
        <a href={link}>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">{description}</p>
        <p className="mb-3 text-sm text-gray-500">{date}</p>
        <a
          href={link}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#0655D1] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 hover:font-bold transition-all duration-300 hover:scale-105"
        >
          Read more
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

// Sample blog posts data
const samplePosts = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Proiectare sustenabilă pentru clădiri moderne",
    description:
      "Aflați cum să integrați soluții ecologice în proiectele arhitecturale pentru eficiență energetică maximă.",
    date: "12 Mai 2025",
    link: "/blog/proiectare-sustenabila",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1501889088093-90b27410d97e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Optimizarea spațiului în locuințe mici",
    description:
      "Sfaturi practice pentru a maximiza funcționalitatea și confortul în apartamente și case compacte.",
    date: "8 Mai 2025",
    link: "/blog/optimizare-spatiu",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Sisteme BMS pentru case inteligente",
    description:
      "Descoperiți avantajele integrării tehnologiilor avansate pentru controlul locuinței.",
    date: "3 Mai 2025",
    link: "/blog/sisteme-bms",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Materiale inovatoare în construcții",
    description:
      "Explorați cele mai recente materiale care sporesc durabilitatea și estetica clădirilor.",
    date: "28 Aprilie 2025",
    link: "/blog/materiale-inovatoare",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-14973662105479-4275897b37b7?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Eficiența energetică în proiecte rezidențiale",
    description:
      "Metode dovedite pentru a reduce consumul de energie și costurile în locuințele moderne.",
    date: "20 Aprilie 2025",
    link: "/blog/eficienta-energetica",
  },
];

// Main BlogCarousel Component
export default function BlogCarousel({ posts = samplePosts }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const container = carouselRef.current;
    if (!container) return;

    const scrollAmount = direction === "left" ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });

    // Update scroll position after scrolling completes
    setTimeout(() => {
      setScrollPosition(container.scrollLeft);
    }, 500);
  };

  // Update scroll position when scrolling manually
  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    const handleScroll = () => {
      setScrollPosition(container.scrollLeft);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate if we can scroll more in each direction
  const canScrollLeft = scrollPosition > 0;
  const canScrollRight = carouselRef.current
    ? scrollPosition <
      carouselRef.current.scrollWidth - carouselRef.current.clientWidth - 10
    : true;

  return (
    <section className="py-8 px-4 md:px-8 mt-30 mb-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-400">
            Ultimele Noutăți
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`p-2 rounded-full border ${
                canScrollLeft
                  ? "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                  : "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`p-2 rounded-full border ${
                canScrollRight
                  ? "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                  : "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="flex overflow-x-auto pb-6 scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
