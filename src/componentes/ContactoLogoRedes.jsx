import React from "react"; // Importa React
import "../assets/scss/_03-Componentes/_ContactoLogoRedes.scss";

// Componente ContactoLogoRedes
const ContactoLogoRedes = () => {
  return (
    <div>
      <div className="gridPadreContacto1">
        <div className="contact-logo-rede-container">
          <div className="logo-column">
      
         

            <div className="logo-secondary-container">
             

              <a href="#">
                <img
                  alt="icono"
                  className="logo-img logo-secondary"
                  src="/img/02-logos/logoferiusados-tienda1.png"
                />
              </a>
            </div>
          </div>
          {/* Columna de iconos de contacto */}
          <div className="contact-icons">
            <div className="contact-item">
              <a
                href="https://www.facebook.com/alegondramusic"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-facebook" /> Facebook
              </a>
            </div>
            <div className="contact-item">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram" /> Instagram
              </a>
            </div>
            <div className="contact-item">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-youtube" /> YouTube
              </a>
            </div>
         
            <div className="contact-item">
              <a
                href="mailto:bavaroalejandro@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-person-arms-up" /> Escríbenos un mail <i className="bi bi-envelope" />
              </a>
            </div>
   
    
            <a href="#">
              {/* <img
                alt="icono"
                className="logo-img "
                 src="/img/02-logos/logoheader2.png"
              /> */}
            </a>
          </div>
        </div>
      </div>
      <hr className="transparent-hr" />
    </div>
  );
};

export default ContactoLogoRedes; 