function Cards() {
    return (
        <div class="container mt-5">
            <div class="card-group">
                <div class="card">
                    <img src={require('../imagenes/mochila.webp')} class="card-img-top" alt="Mochila" />
                    <div class="card-body">
                        <h5 class="card-title text-center">Mochila Antirrobo</h5>
                        <p class="card-text text-center">$12.799</p>
                        <p class="card-text text-center"><small class="text-muted">Envío Gratis</small></p>
                    </div>
                </div>
                <div class="card">
                    <img src={require('../imagenes/ventilador.webp')} class="card-img-top" alt="ventilador" />
                    <div class="card-body">
                        <h5 class="card-title text-center">Ventilador</h5>
                        <p class="card-text text-center">$8.999</p>
                        <p class="card-text text-center"><small class="text-muted">Envío Gratis</small></p>
                    </div>
                </div>
                <div class="card">
                    <img src={require('../imagenes/ollas.webp')} class="card-img-top" alt="ollas" />
                    <div class="card-body">
                        <h5 class="card-title text-center">Batería de Cocina</h5>
                        <p class="card-text text-center">$10.999</p>
                        <p class="card-text text-center"><small class="text-muted">Envío Gratis</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;