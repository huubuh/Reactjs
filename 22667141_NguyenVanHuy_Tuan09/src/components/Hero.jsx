import RecipeImg from "../assets/img/Selection.png";
import Avatar from "../assets/img/ava4.png";

const Hero = () => {
  return (
    <div className="relative h-full w-full bg-gray-100">
      <img src={RecipeImg} alt="hero" className="w-full h-full object-cover" />

      <div className="absolute top-1/2 left-20 -translate-y-1/2 bg-white p-6 rounded-[20px] shadow-lg max-w-[400px]">
        {/* Yellow label */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <div className="bg-yellow-400 px-4 py-1 rounded-full text-sm font-medium">
            Recipe of the day
          </div>
        </div>

        <div className="mt-4 flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-pink-600 text-center">
            Salad Caprese
          </h2>
          <p className="text-gray-600 text-sm mt-3 text-center leading-relaxed">
            Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella,
            herbs, olive oil, and balsamic vinegar create a refreshing dish for
            lunch or appetizer
          </p>

          <div className="mt-6">
            <div className="flex flex-col items-center">
              <img
                src={Avatar}
                alt="avatar"
                className="w-15 h-15 rounded-full"
              />
              <span className="text-sm text-gray-600 mt-2">Salad Caprese</span>
            </div>
          </div>

          <div className="w-full flex justify-center mt-6">
            <button className="px-8 py-2 bg-pink-600 text-white rounded-lg text-sm hover:bg-pink-700 flex items-center gap-2">
              View now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
