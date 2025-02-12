import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNavbar from "../components/layout-components/RightNavbar";


const NewsCardContainer = () => {
  const data = useLoaderData();
  const news = data.data[0];




  return (
    <div className="px-4 py-2">
      <header className="mb-4">
        <Header />
      </header>
      

      <main className="grid md:grid-cols-12 w-11/12 mx-auto pt-4 gap-6">
      
        <section className="col-span-9">
        <h1 className="font-semibold text-2xl mb-3 ml-2">News Wave</h1>
          <div className="card  w-full border-2 gap-4">
            <figure className="px-10 pt-10">
              <img
                src={news.image_url}
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-start text-start gap-4">
              <h2 className="card-title">{news.title}</h2>
              <p>{news.details} </p>
              <div className="card-actions">
                <Link to={`/category/${news?.category_id}`} className="btn btn-neutral">Back to All Category</Link>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-3">
          {" "}
          <RightNavbar />{" "}
        </aside>
      </main>
    </div>
  );
};

export default NewsCardContainer;
