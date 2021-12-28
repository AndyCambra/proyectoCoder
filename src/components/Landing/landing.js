import './index.css'
import Products from '../ItemListContainer/ItemListContainer'

const Landing = () => {
  return (
    <>
      <div className="container">
        <img
          src="https://res.cloudinary.com/danb0chax/image/upload/c_crop,h_690,w_2048/v1640700982/plantas/peakpx_2_t4ohew.jpg"
          alt="land"
        />
        <h1 className="landing-title">Bienvenidos</h1>
        <div className="back-p"></div>
        <p className="landing-p">
          Somos especialistas en cacus y suculentas. Aquí vas a encontrar los
          más lindos ejemplares para comprar y también consejos de como
          cuidarlos.
        </p>
      </div>
      <div className="separador">
        <p>Elegí entre nuestros productos.</p>
      </div>
      <Products />
    </>
  )
}
export default Landing
