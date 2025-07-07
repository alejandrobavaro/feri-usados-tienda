import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "../assets/scss/_03-Componentes/_Promos.scss";

const Promos = () => {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/promos.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la red");
        }
        return response.json();
      })
      .then((data) => setProductos(data))
      .catch((error) => {
        console.error("Error cargando las promociones:", error);
        setError("No se pudieron cargar las promociones.");
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="promos-grid-container">
      <h2 className="promos-title">¡Promociones de Productos Usados!</h2>
      {error && <p className="error-message">{error}</p>}
      <div className="promos-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="promos-card">
            <h3 className="promos-producto-title">{producto.nombre}</h3>
            <img src={producto["imagen portada"]} alt={producto.nombre} className="promos-producto-img" />
            <hr />
            <div className="comments-section">
              <ul>
                {Array.isArray(producto["descripcion"]) && producto["descripcion"].map((detalle, index) => (
                  <li key={`${producto.id}-detalle-${index}`}>{detalle}</li>
                ))}
              </ul>
            </div>

            <Slider {...settings}>
              {Array.isArray(producto["imagenes"]) && producto["imagenes"].map((img, index) => (
                <div key={`${producto.id}-img-${index}`}>
                  <img src={img} alt={`${producto.nombre} - ${index + 1}`} className="carousel-image" />
                </div>
              ))}
            </Slider>

            <div className="promos-info">
              <p>{producto.tipo} | {producto.categoria}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promos;
