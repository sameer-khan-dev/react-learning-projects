import './App.css'
import Product from './Product.jsx'

function App() {
  return (
    <>
    <h2>Blockbuster Deals | Shop Now</h2>
  <div className='App'>
  <Product title="Logitech MX Master" idx="0"/>
  <Product title="Apple Pencil(2nd Gen)" idx="1"/>
  <Product title="Zebronics Zeb-transformer" idx="2"/>
  <Product title="Petronics Toad 23" idx="3"/>
    </div>
    </>
  );
}

export default App
