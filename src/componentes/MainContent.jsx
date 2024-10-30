import React, { useState } from "react";
import Slider from "react-slick";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../assets/scss/_03-Componentes/_MainContent.scss";

function MainContent() {
  const [showSubscriptionForm, setShowSubscriptionForm] = useState(false);
  const [email, setEmail] = useState("");

  const images = [
    "./img/03-img-cuadradas/banner-product-1.jpg",
    "./img/03-img-cuadradas/banner-product-2.jpg",
    "./img/03-img-cuadradas/banner-product-3.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  const handleSubscribeClick = () => {
    setShowSubscriptionForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Suscripción enviada:", email);
    setShowSubscriptionForm(false);
    toast.success("¡Gracias! Te has suscrito a las novedades de nuestra tienda.");
  };

  return (
    <main className="mainContent">
      <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
        className="my-toast-container"
      />

      {/* Sección de Ofertas */}
      <section className="offersSection">
        <h2 className="sectionTitle">Ofertas de la Semana</h2>
        <div className="offersGrid">
          <div className="offerItem">
            <img src="./img/03-img-cuadradas/used-product-1.jpg" alt="Producto Usado 1" className="offerImage" />
            <h3 className="offerTitle">Sillón Vintage</h3>
            <p className="offerDescription">
              Sillón de época en excelente estado. Ideal para decoraciones rústicas.
            </p>
          </div>
          <div className="offerItem">
            <img src="./img/03-img-cuadradas/used-product-2.jpg" alt="Producto Usado 2" className="offerImage" />
            <h3 className="offerTitle">Mesa de Madera Reciclada</h3>
            <p className="offerDescription">
              Mesa construida con madera reciclada. Perfecta para comedor o sala de estar.
            </p>
          </div>
        </div>
      </section>
      
      <hr />

      {/* Sección de Banners */}
      <section className="bannerSection">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="carouselItem">
              <img src={image} alt={`Banner ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </section>

      {/* Sección de Nuevos Productos */}
      <section className="newArrivalsSection">
        <h2 className="sectionTitle">Novedades en Productos Usados</h2>
        <div className="productsGrid">
          <div className="productItem">
            <img src="./img/03-img-cuadradas/used-product-3.jpg" alt="Producto Usado 3" className="productImage" />
            <h3 className="productTitle">Lámpara de Pie Retro</h3>
            <p className="productDescription">Lámpara de pie vintage, en perfecto estado.</p>
          </div>
          <div className="productItem">
            <img src="./img/03-img-cuadradas/used-product-4.jpg" alt="Producto Usado 4" className="productImage" />
            <h3 className="productTitle">Cuadro Decorativo Clásico</h3>
            <p className="productDescription">Cuadro con marco de madera, ideal para decoración clásica.</p>
          </div>
          <div className="productItem">
            <img src="./img/03-img-cuadradas/used-product-5.jpg" alt="Producto Usado 5" className="productImage" />
            <h3 className="productTitle">Reloj de Pared Antiguo</h3>
            <p className="productDescription">Reloj de pared de colección, estilo vintage.</p>
          </div>
        </div>
      </section>

      {/* Sección de Suscripción */}
      <section className="subscriptionSection">
        <img 
          src="./img/09-gif/shop-subscribe.gif" 
          alt="Suscríbete a Novedades" 
          className="productImage" 
        />
        <hr />
        <button className="subscribeButton" onClick={handleSubscribeClick}>Suscribirse a Ofertas</button>
      </section>

      {/* Formulario de Suscripción */}
      {showSubscriptionForm && (
        <div className="subscriptionFormOverlay">
          <form onSubmit={handleFormSubmit} className="subscriptionForm">
            <h2>Suscríbete a Ofertas</h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresa tu correo electrónico"
              required
            />
            <button type="submit" className="submitButton">Enviar</button>
            <button type="button" onClick={() => setShowSubscriptionForm(false)} className="closeButton">Cerrar</button>
          </form>
        </div>
      )}
    </main>
  );
}

export default MainContent;
