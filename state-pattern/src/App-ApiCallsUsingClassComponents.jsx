import React from 'react'
import { produce } from 'immer'

class Products extends React.Component {

    state = {
        products: [],
        error: null,
        isLoading: false
    }
    //api call after ui is ready: any async task must go inside componentDidMount

    async componentDidMount() {
        //api calls
        const url = `https://fakestoreapi.com/products`
        try {
            const response = await fetch(url)
            const products = await response.json()
            console.log(products)
            //show the data in ui
            this.setState(produce(this.state, draft => {
                draft.products = products
                draft.isLoading = true
            }))

        } catch (err) {
            //error handling 
            this.setState(produce(this.state, (draft) => {
                draft.error = err
                draft.isLoading = true
            }))
        }
    }

    render() {
        const { error, isLoading, products } = this.state
        //conditional rendering
        if (error) {
            return <h1>Something went Wrong : {error.message}</h1>
        } else if (!isLoading) {
            return <h1>Loading....</h1>
        } else {
            return <>
                <h1>Products</h1>
                <hr />
                <div>
                    {
                        products.map(product => {
                            return <section key={product.id}>
                                <img src={product.image} height={200} width={200} />
                                <h1>{product.title} </h1>
                                <p>{product.description}</p>
                                <h5>{product.price}</h5>
                            </section>
                        })
                    }
                </div>
            </>
        }

    }
}

export default Products
