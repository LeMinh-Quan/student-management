const ProductList = () => {
    return (
        <div>{

            products.map((product) => (
            <ProduvctCard
            key={product.id}
            name={product.namePD}
            brand={product.brand}
            price={product.price}
            />
        ))
            }
        </div>
    )
}

export default ProductList