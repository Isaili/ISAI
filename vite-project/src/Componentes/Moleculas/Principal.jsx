import Contenedor from "../Atomos/Contenedor";
import Titulo from "../Atomos/Titulo";
import Parrafo from "../Atomos/Parrafo";
import Card from "../Atomos/Card";
import Article from "../Atomos/Article";
import Informacion from "../../Store/Informacion";
import Img from "../Atomos/img";
function Principal (){
    return (
        <>
            <Contenedor primary >
                        <Card primary> 
                            <Article primary>
                                <Titulo primary> {Informacion.principal.title} </Titulo>
                                <Parrafo primary> {Informacion.principal.date} </Parrafo>

                                 </Article>
                                 < Img src={Informacion.principal.img} alt="Imagen" primary />
                         </Card>     
            </Contenedor>
        </>
    );
    
}

export default Principal;