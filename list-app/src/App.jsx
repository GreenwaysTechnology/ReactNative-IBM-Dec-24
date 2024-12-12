import { PRODUCTS } from './mock-data/product'

export const ProductList = props => {
    const { products } = props
    return <div>
        {
            products.map(product => {
                return <ProductDetails product={product} key={product.id} />
            })
        }
    </div>
}
export const ProductDetails = ({ product }) => {
    return <div>
        <h2>{product.title}</h2>
        <img src={product.image} height={200} width={200} />
        <h5>Category: {product.category} Price : $ {product.price}</h5>
        <p>{product.description} </p>
        <h3>Rating : {product.rating.rate} Total {product.rating.count}</h3>
    </div>
}

export default function App() {
    return <>
        <ProductList products={PRODUCTS} />
    </>
}