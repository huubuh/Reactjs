import Ava1 from "../assets/img/ava1.png";
import Ava2 from "../assets/img/ava2.png";
import Ava3 from "../assets/img/ava3.png";
import Ava4 from "../assets/img/ava4.png";
import Editor1 from "../assets/img/editor1.png";
import Editor2 from "../assets/img/editor2.png";
import Editor3 from "../assets/img/editor3.png";
import Editor4 from "../assets/img/editor4.png";
import Icon from "../assets/img/Icon Button 73.png";

const EditorCard = ({ image, title, description, author, authorImg, time }) => (
  <div className="flex gap-6 bg-white rounded-2xl p-2 border shadow-sm border-gray-200">
    <img src={image} alt={title} className="w-60 h-60" />
    <div className="flex-1">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-black mt-1">{time} minutes</p>
        </div>
        <div className="w-15 h-15 flex items-center justify-center">
          <img src={Icon} alt="" className="w-8 h-8" />
        </div>
      </div>

      <div className="flex items-center gap-2 mt-3">
        <img src={authorImg} alt={author} className="w-15 h-15 rounded-full" />
        <span className="text-sm font-medium text-gray-700">{author}</span>
      </div>

      <p className="text-sm text-gray-600 mt-3">{description}</p>
    </div>
  </div>
);

const EditorsPick = () => {
  const picks = [
    {
      image: Editor1,
      title: "Stuffed sticky rice ball",
      time: 34,
      description:
        "Stuffed sticky rice balls: A delightful Asian treat with chewy, glutinous rice and a flavorful surprise filling...",
      author: "Jennifer King",
      authorImg: Ava1,
    },
    {
      image: Editor2,
      title: "Strawberry smoothie",
      time: 40,
      description:
        "Savor the refreshing delight of a strawberry smoothie. Made with ripe strawberries, this creamy blend offers...",
      author: "Matthew Martinez",
      authorImg: Ava2,
    },
    {
      image: Editor3,
      title: "Latte Art",
      time: 19,
      description:
        "Latte art is the skillful craft of creating captivating designs on the surface of a latte...",
      author: "Sarah Hill",
      authorImg: Ava3,
    },
    {
      image: Editor4,
      title: "Butter fried noodles",
      time: 16,
      description:
        "Butter fried noodles: Savory noodles cooked in butter for a delicious and satisfying meal...",
      author: "Julia Lopez",
      authorImg: Ava4,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-pink-500">
        Editor's pick
      </h2>
      <p className="text-center text-gray-600 mt-4 text-lg">
        Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        {picks.map((pick, index) => (
          <EditorCard key={index} {...pick} />
        ))}
      </div>
    </div>
  );
};

export default EditorsPick;
