import styled from "styled-components";
const Titulo = styled.h1`
    font-size: ${props =>(props.primary? "60px": "50px")};
    color: #ffffff;
    margin-bottom: 8px;

`;
export default Titulo;