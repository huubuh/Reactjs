import Video1 from "../assets/img/video1.png";
import Video2 from "../assets/img/video2.png";
import Video3 from "../assets/img/video3.png";
import Video4 from "../assets/img/video4.png";
import Icon from "../assets/img/Icon Button 73.png";

const VideoCard = ({ image, title, time }) => (
  <div className="flex-1 bg-white rounded-2xl shadow-sm min-w-[250px]">
    <img src={image} alt={title} className="w-full h-48 " />
    <div className="p-4">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-pink-500 mt-1">{time} minutes</p>
        </div>
        <div className="w-15 h-15 flex items-center justify-center">
          <img src={Icon} alt="" className="w-8 h-8" />
        </div>
      </div>
    </div>
  </div>
);

const VideoRecipes = () => {
  const videos = [
    { image: Video1, title: "Salad with cabbage and shrimp", time: 32 },
    {
      image: Video2,
      title: "Salad of cove beans, shrimp and potatoes",
      time: 20,
    },
    { image: Video3, title: "Sunny-side up fried egg", time: 15 },
    { image: Video4, title: "Lotus delight salad", time: 20 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-pink-500">
        Recipes With Videos
      </h2>
      <p className="text-center text-gray-600 mt-4 text-lg">
        Cooking Up Culinary Creations with Step-by-Step Videos
      </p>

      <div className="flex gap-8 mt-12">
        {videos.map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}
      </div>
    </div>
  );
};

export default VideoRecipes;
