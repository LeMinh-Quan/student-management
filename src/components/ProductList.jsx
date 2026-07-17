import ProductCard from './ProductCard.jsx'

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          namePD={product.namePD}
          brand={product.brand}
          price={product.price}
          stock={product.stock}
          discount={product.discount}
          image={product.image}
          category={product.category}
        />
      ))}
    </div>
  )
}

export default ProductList