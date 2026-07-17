import './header.css'
import products from '../data/products.js'
import {useState} from 'react'

function Header() {
  
const [oldName,newName] = useState('TechStore')

const [oldNum,newNum] = useState(0)

const [searchKeyword, setSearchKeyword] = useState('')

  return (
    <header className="site-header">
      <div>
        <h1 className="site-title">{oldName}</h1>
        <button onClick={() => newName('Đỗ Thị Mỹ Duyên')}>Change Name</button>
        <button onClick={() => newNum(oldNum + 1)}>Click Me</button>
        <a>Click Count: {oldNum}</a>


        <div className="search-box">
          <input 
            type="text" placeholder="Nhập từ khóa tìm kiếm..." value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)} className="search-input"/>
          {searchKeyword && <p className="search-result">Bạn đang tìm: {searchKeyword}</p>}
         <b style={{ marginLeft: "400px", color: "blue" }}>Có {products.length} sản phẩm.</b>
        </div>

        <p className="site-subtitle">Website bán đồ điện tử</p>
        

      </div>
    </header>
  )
}

export default Header