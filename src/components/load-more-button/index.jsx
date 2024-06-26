import { useEffect, useState } from "react";
import "./style.css";

export default function LoadMore() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disablebutton, setdisablebutton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=30&skip=${
          count === 0 ? 0 : count * 30
        }`
      );

      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((pdata) => [...pdata, ...result.products]);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products.length === 210) {
      setdisablebutton(true);
    } else {
      setdisablebutton(false);
    }
  }, [products]);
  

  if (loading === true) {
    return <div>Loading Please Wait!!</div>;
  }

  return (
    <div className="load-more-container">
        <h1 style={{fontSize:'100px',fontWeight:'lighter',fontStyle:'italic',color:'blue'}}>Load More Button</h1>
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div>
        <button disabled={disablebutton} onClick={() => setCount(count + 1)}>
          Load More
        </button>
        {disablebutton ? <p>You have reached 210 products</p> : null}
      </div>
    </div>
  );
}
