import { PRODUCTS } from './mock-data/product'

export const Products = props => {
    const { products } = props
    return <div>
        {
            products.map(product => {
                return <div key={product.id}>
                    <h2>{product.title}</h2>
                    <img src={product.image} height={200} width={200} />
                    <h5>Category: {product.category} Price : $ {product.price}</h5>
                    <p>{product.description} </p>
                    <h3>Rating : {product.rating.rate} Total {product.rating.count}</h3>
                </div>
            })
        }
    </div>
}



export default function App() {
    return <>
        <Products products={PRODUCTS} />
    </>
}