import FeatuedPost from "../../components/featuredpost/featuredpost";
import Products from "../../components/products/products";

const Home = () => {
  return (
    <>
      <FeatuedPost />
      <div className="display-4 m-4">
        <h3>Featured Product</h3>
      </div>
      <div className="d-flex flex-wrap mx-5 justify-content-between">
        <Products />
      </div>
    </>
  );
};

export default Home;
