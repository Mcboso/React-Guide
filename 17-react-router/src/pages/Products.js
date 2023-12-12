import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "product 1" },
  { id: "p2", title: "product 2" },
  { id: "p3", title: "product 3" },
];

const ProductsPage = () => {
  return (
    <>
      <h1>ProductsPage</h1>
      <ul>
        {PRODUCTS.map((prod) => (
          <li key={prod.id}>
            <Link to={prod.id} relative="path">{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductsPage;
