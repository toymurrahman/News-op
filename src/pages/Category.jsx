import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const Category = () => {
  const { data: news } = useLoaderData();
  
  return (
    <div>
      <h1 className="font-semibold mb-3"> News-Wave home </h1>
      <div className="flex  flex-col gap-6">
        {
            news.map((eachNews) => (
               <NewsCard key={eachNews._id} news={eachNews} />
            ))
        }
      </div>
    </div>
  );
};

export default Category;
