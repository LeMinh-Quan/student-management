import './productcard.css'

function InfoPD({ namePD, brand, price }) {
    return (
        <div className="product-card">
            <h3 className="product-name">{namePD}</h3>
            <p className="product-brand">{brand}</p>
            <p className="product-price">{price.toLocaleString("vi-VN")}</p>
            <button className="detail-btn">Chi tiết</button>
        </div>
    )
}

export default InfoPD