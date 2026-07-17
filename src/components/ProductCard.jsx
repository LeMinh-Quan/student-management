import './productcard.css'

function InfoPD({ namePD, brand, price, stock, discount, image }) {
    return (
        <div className="product-card">
            <img className="product-image" src={image} alt={namePD} />
            <h3 className="product-name">{namePD}</h3>
            <p className="product-brand">{brand}</p>
            <p className="product-price">{price.toLocaleString("vi-VN")}</p>
            <p className="product-stock">Số lượng: {stock}</p>
            <p className="product-discount">Giảm giá: {discount}%</p>
            <button className="detail-btn">Chi tiết</button>
        </div>
    )
}

export default InfoPD