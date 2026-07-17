import Header from './components/hearder.jsx'
import PD from './components/ProductCard.jsx'
import products from './data/products'
import './App.css'
import './components/header.css'
import './components/productcard.css'
function App(){
    return(
        <div className="content">
            <Header />


            {products.map((p, idx) => (
                <PD
                    key={p.id ?? idx}
                    namePD={p.namePD}
                    brand={p.brand}
                    price={p.price}
                />
            ))}

        </div>
    )
}
export default App