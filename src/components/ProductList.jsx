import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { Header } from "../page/Header";

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  const params = useParams();
  const { seccion } = params;

  useEffect(() => {
    getProducts().then((prod) => setProducts(prod));
  }, []);

  const getProducts = async () => {
    const res = await fetch("src/data/products-small.js");
    const data = await res.json();
    return data;
  };

  const productosFiltrado = products.filter(
    (prod) => prod.category === seccion
  );

  return (
    <div>
      <Header />
      <ul>
        {productosFiltrado.length > 0 ? (
          <>
            {productosFiltrado.map((prod) => {
              return (
                <li key={prod.id}>
                  <img
                    src={`src/images/product/${prod.image}`}
                    alt={prod.name}
                  />
                  <h3>{prod.name}</h3>
                  <h4>$ {prod.price}</h4>
                  <button>Agregar al carrito</button>
                </li>
              );
            })}
          </>
        ) : (
          <>No hay productos</>
        )}
      </ul>
    </div>
  );
};
