import React from "react";

export const Layout = () => {
    return (
        <header>
            <div>
                <h1>Tienda de música</h1>
                <div>
                    <nav>
                        <ul>
                            <li><a href="#/">Home</a></li>
                            <li><a href="#/guiatarrasybajos">Guitarras y bajos</a></li>
                            <li><a href="#/bateriasypercusion">Baterías y percusión</a></li>
                            <li><a href="#/teclados">Teclados</a></li>
                            <li><a href="#/instrumentostradicionales">Instrumentos tradicionales</a></li>
                            <li><a href="#/instrumentosdeviento">Instrumentos de viento</a></li>
                            <li><a href="#/dj">DJ</a></li>
                            <li><a href="#/otros">Otros</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
