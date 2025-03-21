import { FaRegEye, FaStar, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = (props = {}) => {

  const { news } = props || {};
  const { title, author, rating, total_view, thumbnail_url, details } = news;
  
  return (
    <div className="card w-full bg-white shadow-lg rounded-xl border relative">
      {/* Top-right Bookmark & Share Buttons */}
      <div className="absolute top-3 right-3 flex gap-2">
        <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <FaRegBookmark className="text-gray-700" />
        </button>
        <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <FaShareAlt className="text-gray-700" />
        </button>
      </div>

      {/* Author Info */}
      <div className="flex items-center gap-3 p-4">
        <img
          src={author.img}
          alt={author.name}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h3 className="text-sm font-semibold">{author.name}</h3>
          <p className="text-xs text-gray-500">
            {author.published_date.split(" ")[0]}
          </p>
        </div>
      </div>

      {/* News Image */}
      <img
        src={thumbnail_url}
        alt="news"
        className="w-11/12 mx-auto h-80 object-cover object-top rounded-t-lg"
      />

      {/* News Details */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-900">{title}</h2>
        <p className="text-sm text-gray-600 mt-2">
          {details.length > 100 ? details.slice(0, 100) + "..." : details}
        </p>

        {/* Read More */}
        <Link to={`/news/${news._id}`} className="text-orange-500 font-semibold ">
          Read More
        </Link>

        {/* Rating & Views */}
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center gap-1 text-yellow-500">
            <FaStar />
            <span className="text-sm font-medium">{rating.number}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <FaRegEye />
            <span className="text-sm">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
