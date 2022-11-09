function navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="https://www.mercadolibre.com.ar/">E-commerce</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="https://www.mercadolibre.com.ar/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://www.mercadolibre.com.ar/">Ofertas</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="https://www.mercadolibre.com.ar/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Productos
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="https://www.mercadolibre.com.ar/">Tecnología</a></li>
                                    <li><a class="dropdown-item" href="https://www.mercadolibre.com.ar/">Moda</a></li>
                                    <li><a class="dropdown-item" href="https://www.mercadolibre.com.ar/">Hogar</a></li>
                                </ul>
                            </li>
                            
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Buscar productos" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default navbar;