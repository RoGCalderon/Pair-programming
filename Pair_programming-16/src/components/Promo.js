import '../css/promo.css';

function Promo(){
    return(
        <div class="container-fluid">
            <div class="row mt-5">
                <div class="col d-flex justify-content-center">
                    <img src={require("../imagenes/icono1.png")} alt="icono"></img>
                </div>
                <div class="col d-flex justify-content-center">
                    <img src={require("../imagenes/icono2.png")} alt=""></img>
                </div>
                <div class="col d-flex justify-content-center">
                    <img src={require("../imagenes/icono3.png")} alt=""></img>
                </div>
                <div class="col d-flex justify-content-center">
                    <img src={require("../imagenes/icono4.png")} alt=""></img>
                </div>
                <div class="col d-flex justify-content-center">
                    <img src={require("../imagenes/icono5.png")} alt=""></img>
                </div>
                <div class="col d-flex justify-content-center">
                    <img src={require("../imagenes/icono6.png")} alt=""></img>
                </div>
                
            </div>
        
        </div>
    );
}

export default Promo;