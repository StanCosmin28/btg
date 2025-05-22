function Badge({ children, className }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 ${
        className || ""
      }`}
    >
      {children}
    </span>
  );
}

// Calendar icon SVG
function CalendarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 mr-1"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
      <line x1="16" x2="16" y1="2" y2="6"></line>
      <line x1="8" x2="8" y1="2" y2="6"></line>
      <line x1="3" x2="21" y1="10" y2="10"></line>
    </svg>
  );
}

// Clock icon SVG
function ClockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 mr-1"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );
}

export default function ProjectsCard({ post }) {
  return (
    <article className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-200 hover:shadow-md">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={post.image || "https://via.placeholder.com/600x400"}
          alt={post.title}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="flex-1 p-6 flex flex-col">
        <div className="mb-3">
          <Badge className="font-medium">{post.category}</Badge>
        </div>

        <h3 className="text-xl font-semibold mb-2 line-clamp-2">
          <a
            href={`/blog/${post.id}`}
            className="hover:text-gray-600 transition-colors"
          >
            {post.title}
          </a>
        </h3>

        <p
          className="text-gray-600 mb-4 overflow-hidden"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {post.excerpt}
        </p>

        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          {/* <div className="flex items-center">
            <img
              src={post.author.avatar || "https://via.placeholder.com/40"}
              alt={post.author.name}
              width={32}
              height={32}
              className="rounded-full mr-2"
            />
            <span className="text-sm font-medium">{post.author.name}</span>
          </div> */}

          <div className="flex items-center text-gray-500 text-sm">
            <div className="flex items-center mr-3">
              <CalendarIcon />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <ClockIcon />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
