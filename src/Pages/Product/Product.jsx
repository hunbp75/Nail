import Manicure from "../Product/Manicure";
import Pedicure from "../Product/Pedicure";
import Nails from "../Product/Nails";
import Kids from "../Product/Kids";
import "./product.css";

const Product = () => {
  return (
    <div>
      <div className="product_name">
        <h1>Szolgáltatások</h1>
      </div>
      <div className="product_grid">
        <div className="product_item">
          <Manicure />
        </div>
        <div className="product_item">
          <Pedicure />
        </div>
        <div className="product_item">
          <Nails />
        </div>
        <div className="product_item">
          <Kids />
        </div>
      </div>
    </div>
  );
};

export default Product;
