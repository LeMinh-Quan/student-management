function ProductInfo({ brand, price, stock }) {
  return (
    <div className="product-info">
      <p className="product-brand">{brand}</p>
      <p className="product-price">{price.toLocaleString('vi-VN')}</p>
      <p className="product-stock">Số lượng: {stock}</p>
    </div>
  )
}

export default ProductInfo;
