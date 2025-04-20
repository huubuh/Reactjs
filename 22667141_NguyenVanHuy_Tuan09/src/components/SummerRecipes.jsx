import Summer1 from "../assets/img/summer1.png";
import Summer2 from "../assets/img/summer2.png";
import Summer3 from "../assets/img/summer3.png";
import Summer4 from "../assets/img/summer4.png";
import Icon from "../assets/img/Icon Button 73.png";

const RecipeCard = ({ image, title, time }) => (
  <div className="flex-1 bg-white rounded-2xl shadow-sm min-w-[250px]">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-pink-500 mt-1">{time} minutes</p>
        </div>
        <div className="w-15 h-15 flex items-center justify-center">
          <img src={Icon} alt="bookmark" className="w-8 h-8" />
        </div>
      </div>
    </div>
  </div>
);

const SummerRecipes = () => {
  const recipes = [
    { image: Summer1, title: "Italian-style tomato salad", time: 14 },
    { image: Summer2, title: "Spaghetti with vegetables", time: 15 },
    { image: Summer3, title: "Lotus delight salad", time: 20 },
    { image: Summer4, title: "Snack cakes", time: 21 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-pink-500">
        This Summer Recipes
      </h2>
      <p className="text-center text-gray-600 mt-4 text-lg">
        We have all your Independence Day sweets covered.
      </p>

      <div className="flex gap-8 mt-12">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} {...recipe} />
        ))}
      </div>
    </div>
  );
};

export default SummerRecipes;
