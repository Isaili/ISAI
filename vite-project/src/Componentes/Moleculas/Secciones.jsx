import Titulo from "../Atomos/Titulo";
import Subtitulo from "../Atomos/SubTitulo";
import Parrafo from "../Atomos/Parrafo";
import Img from "../Atomos/img";
import Article from "../Atomos/Article";
import Contenedor from "../Atomos/Contenedor";
import Informacion from "../../Store/Informacion";
import Card from "../Atomos/Card";

function Secciones() {
    return (
        <>
            {
                Informacion.Secciones.map(Secciones => {
                    return <Contenedor>
                        <Card secondary>
                        <Article secondary>
                            <Titulo> {Secciones.title} </Titulo>
                            <Subtitulo> {Secciones.subtitle} </Subtitulo>
                            <Parrafo secondary> {Secciones.date} </Parrafo>
                        </Article>
                        <Img src={Secciones.img} alt="Imagen"  secondary={true}/> 
                        </Card>
                    </Contenedor>
                })
            }
        </>
    );
}

export default Secciones;