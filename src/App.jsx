import Header from './components/hearder.jsx'
import Footer from './components/Footer.jsx'
import ProductList from './components/ProductList.jsx'
import products from './data/products'
import './App.css'
import './components/header.css'
import './components/productcard.css'
function App(){
    return(
        <div className="content">
            <Header />

            <ProductList products={products} />

            <Footer />
        </div>
    )
}
export default App