import React from "react";
import { Layout } from "../components/Layout";

export const Home = () => {
  return (
    <>
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
              <img src="src\img\pexels-photo-8520440.jpeg" alt="Clases de música" />
            </div>
            <div className="services-2">
              <p>
                Aquí puedes encontrar una variedad de servicios relacionados con la música, incluyendo venta de instrumentos, clases, producción musical y más.
              </p>
              <p>
                Ofrecemos clases de guitarra, piano, batería y otros instrumentos. Nuestros profesores son profesionales con amplia experiencia.
              </p>
              <img src="src\img\istockphoto-596345112-612x612.jpg" alt="Clases de música" />
            </div>
            <div className="services-3">
              <p>
                Aquí puedes encontrar una variedad de servicios relacionados con la música, incluyendo venta de instrumentos, clases, producción musical y más.
              </p>
              <p>
                Ofrecemos clases de guitarra, piano, batería y otros instrumentos. Nuestros profesores son profesionales con amplia experiencia.
              </p>
              <img src="src\img\istockphoto-872697992-612x612.jpg" alt="Clases de música" />
            </div>
          </div>
          
          <div className="services-prices">
            <p>Clases de guitarra: $80/mes</p>
            <p>Clases de piano: $100/mes</p>
            <p>Clases de batería: $70/mes</p>
          </div>

          <p>
              Apúntate a nuestras clases y comienza tu viaje musical hoy mismo.
            </p>
          <footer>
            <p>© 2023 Música Online. Todos los derechos reservados.</p>
          </footer>
    </>
  );
};
