import React from "react";
import { Layout } from "../components/Layout";
import pianoImage from "../../public/img/pexels-photo-8520440.jpeg";
import guitarImage from "../../public/img/istockphoto-596345112-612x612.jpg";
import violinImage from "../../public/img/istockphoto-872697992-612x612.jpg";

export const Home = () => {
  return (
    <>
      <div className="home">
          <h1>Bienvenido a nuestra tienda de música! 🎸</h1>

          <h2>Servicios</h2>

          <div className="services">  
            <div className="services-classes">
              <p>
                Aquí puedes encontrar una variedad de servicios relacionados con la música, incluyendo venta de instrumentos, clases, producción musical y más.
              </p>
              <p>
                Ofrecemos clases de guitarra, piano, batería y otros instrumentos. Nuestros profesores son profesionales con amplia experiencia.
              </p>
              <img src={pianoImage} alt="Clases de música" />
            </div>
            <div className="services-2">
              <p>
                Aquí puedes encontrar una variedad de servicios relacionados con la música, incluyendo venta de instrumentos, clases, producción musical y más.
              </p>
              <p>
                Ofrecemos clases de guitarra, piano, batería y otros instrumentos. Nuestros profesores son profesionales con amplia experiencia.
              </p>
              <img src={guitarImage} alt="Clases de música" />
            </div>
            <div className="services-3">
              <p>
                Aquí puedes encontrar una variedad de servicios relacionados con la música, incluyendo venta de instrumentos, clases, producción musical y más.
              </p>
              <p>
                Ofrecemos clases de guitarra, piano, batería y otros instrumentos. Nuestros profesores son profesionales con amplia experiencia.
              </p>
              <img src={violinImage} alt="Clases de música" />
            </div>
          </div>
          
          <div className="services-prices">
            <div className="services-prices__guitar-prices">
              <p>Clases de guitarra: $80/mes</p>
              <p>Profesores: 
                <ul>
                  <li className="li-juan">Juan Pérez</li>
                  <li className="li-maria">María López</li>
                  <li className="li-pedro">Pedro González</li>
                </ul>
              </p>
            </div>
            <div className="services-prices__piano-prices">
              <p>Clases de piano: $100/mes</p>
              <p>Profesores: 
                <ul>
                  <li className="li-laura">Laura Martínez</li>
                  <li className="li-javier">Javier Fernández</li>
                  <li className="li-carla">Carla Gómez</li>
                </ul>
              </p>
            </div>
            <div className="services-prices__bateria-prices">
              <p>Clases de batería: $70/mes</p>
              <p>Profesores: 
                <ul>
                  <li className="li-andres">Andrés Ramírez</li>
                  <li className="li-lucia">Lucía Torres</li>
                  <li className="li-diego">Diego Martínez</li>
                </ul>
              </p>
            </div>
          </div>

          <p>
              Apúntate a nuestras clases y comienza tu viaje musical hoy mismo.
            </p>
          <footer>
            <p>© 2023 Música Online. Todos los derechos reservados.</p>
          </footer>
      </div>

      
    </>
  );
};
