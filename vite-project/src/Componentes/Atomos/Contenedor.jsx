import styled from "styled-components";

const Contenedor = styled.div`
    width: ${props =>(props.primary? "100%": "100%")};
    height: 100vh;
    background:  ${props =>(props.primary? "black": "#4D4D4D")};
`;
export default Contenedor;