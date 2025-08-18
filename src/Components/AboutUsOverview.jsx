export default function CardGrid() {
  return (
    <div className="w-full max-w-7xl mx-auto py-6 px-4 sm:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Card 1"
            className="w-full h-32 object-cover rounded-t-lg"
          />
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
            Card 1
          </h3>
          <p className="text-gray-600 text-sm sm:text-base mt-1">
            Descriere scurtă pentru card 1.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Card 2"
            className="w-full h-32 object-cover rounded-t-lg"
          />
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
            Card 2
          </h3>
          <p className="text-gray-600 text-sm sm:text-base mt-1">
            Descriere scurtă pentru card 2.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Card 3"
            className="w-full h-32 object-cover rounded-t-lg"
          />
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
            Card 3
          </h3>
          <p className="text-gray-600 text-sm sm:text-base mt-1">
            Descriere scurtă pentru card 3.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Card 4"
            className="w-full h-32 object-cover rounded-t-lg"
          />
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
            Card 4
          </h3>
          <p className="text-gray-600 text-sm sm:text-base mt-1">
            Descriere scurtă pentru card 4.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Card 5"
            className="w-full h-32 object-cover rounded-t-lg"
          />
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
            Card 5
          </h3>
          <p className="text-gray-600 text-sm sm:text-base mt-1">
            Descriere scurtă pentru card 5.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Card 6"
            className="w-full h-32 object-cover rounded-t-lg"
          />
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
            Card 6
          </h3>
          <p className="text-gray-600 text-sm sm:text-base mt-1">
            Descriere scurtă pentru card 6.
          </p>
        </div>
      </div>
    </div>
  );
}
