import data from "../Model/data";
export default function ProjectsHeader() {
  return (
    <>
      <div className="w-full  h-[60vh] overflow-hidden">
        <img
          src={data.blogHeader}
          alt="Blog header image"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </>
  );
}
