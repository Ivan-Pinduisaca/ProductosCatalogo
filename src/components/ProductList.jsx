import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Dialog } from 'primereact/dialog';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';

import { CgInsertAfterR } from 'react-icons/cg';

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [value, setValue] = useState(0);

  const [displayResponsive, setDisplayResponsive] = useState(false);

  const dialogFuncMap = {
    'displayResponsive': setDisplayResponsive
  }

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

  const onClick = (name, id) => {
    dialogFuncMap[`${name}`](true);
    const producto = products.filter((p) => p.id == id);
    setProduct(producto);
  }

  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
    setValue(1);
  }

  const renderFooter = (name) => {
    return (
      <div>
        <Button label="Aceptar" icon="pi pi-check" onClick={() => onHide(name)} autoFocus />
        <Button label="Cancelar" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
      </div>
    );
  }

  const footer = (
    <span>
      <div className="grid">
        <div className="field col-12 md:col-3">
          <label htmlFor="cantidad" style={{ display: 'block' }}>Cantidad</label>
          <InputNumber inputId="cantidad" value={value} onValueChange={(e) => setValue(e.value)} mode="decimal" showButtons buttonLayout="vertical" style={{ width: '4rem' }}
            decrementButtonClassName="p-button-secondary" incrementButtonClassName="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" 
            min={0} max={product.map((p) => p.quantity)} />
        </div>
      </div>
    </span>
  );

  return (
    <div>
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
                  <Button label="Agregar al carrito" icon={<CgInsertAfterR className="mt-2 mr-1 text-2xl" />} onClick={() => onClick('displayResponsive', prod.id)} />
                  <Dialog header={product.map((p) => p.name)} visible={displayResponsive} onHide={() => onHide('displayResponsive')} breakpoints={{ '960px': '75vw' }} style={{ width: '50vw' }} footer={renderFooter('displayResponsive')}>
                    <div className="card">
                      <div className="flex flex-row flex-wrap card-container">
                        <Card title={`${product.map((p) => p.inventoryStatus)} - ${product.map((p) => p.quantity)}`} subTitle={`$${product.map((p) => p.price)}`} style={{ width: '25em' }} footer={footer} header={<img alt="Card" src={`src/images/product/${product.map((p) => p.image)}`} />}>
                        </Card>
                        <div className="flex flex-column align-items-center justify-content-center m-auto">
                          <h1>Total</h1>
                          <h2>{`$${product.map((p) => p.price*value)}`}</h2>
                        </div>
                      </div>
                    </div>
                  </Dialog>
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
