import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Dialog } from 'primereact/dialog';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';

import { CgInsertAfterR } from 'react-icons/cg';

export const ProductList = () => {
  const [products, setProducts] = useState([]);
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
    console.log('producto -> ', producto);
  }

  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  }

  const renderFooter = (name) => {
    return (
      <div>
        <Button label="Aceptar" icon="pi pi-check" onClick={() => onHide(name)} autoFocus />
        <Button label="Cancelar" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
      </div>
    );
  }

  const header = (
    <img alt="Card" src="src/images/userLogin.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
  );

  const footer = (
    <span>
      <div className="grid">
        <div className="field col-12 md:col-3">
          <label htmlFor="cantidad" style={{ display: 'block' }}>Cantidad</label>
          <InputNumber inputId="cantidad" value={value} onValueChange={(e) => setValue(e.value)} mode="decimal" showButtons buttonLayout="vertical" style={{ width: '4rem' }}
            decrementButtonClassName="p-button-secondary" incrementButtonClassName="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
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
                  <h5>Responsive</h5>
                  <Button label="Agregar el carrito" icon={<CgInsertAfterR className="mt-2 mr-1 text-2xl" />} onClick={() => onClick('displayResponsive', prod.id)} />
                  <Dialog header={prod.name} visible={displayResponsive} onHide={() => onHide('displayResponsive')} breakpoints={{ '960px': '75vw' }} style={{ width: '50vw' }} footer={renderFooter('displayResponsive')}>
                    <Card title={`${prod.inventoryStatus} - ${prod.quantity}`} subTitle={`$${prod.price}`} style={{ width: '25em' }} footer={footer} header={header}>
                    </Card>
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
