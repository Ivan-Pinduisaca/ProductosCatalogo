export class ProductService {

    getProductsSmall = async () => {
        const res = await fetch('src/data/products-small.js');
        const data = await res.json();
        return data;
    }
}
