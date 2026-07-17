import './productcard.css'
import ProductInfo from './ProductInfo.jsx'

function ProductCard({ namePD, brand, price, stock, discount, image, category }) {
    return (
        <div className="product-card">
            <img className="product-image" src={image} alt={namePD} />
            <h3 className="product-name">{namePD}</h3>
            <ProductInfo brand={brand} price={price} stock={stock} />
            <p className="product-discount">Giảm giá: {discount}%</p>
            <button className="detail-btn">Chi tiết</button>
        </div>
    )
}

export default ProductCard