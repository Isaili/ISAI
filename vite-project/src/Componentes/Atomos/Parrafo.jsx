import styled from "styled-components";

const Parrafo = styled.p`
    font-size: ${props =>(props.primary? "16px": props.secondary? "18px": "")};
    color: #f9f9f9;
    justify-content: ${props =>(props.primary? "justify": props.secondary? "0": "")};
    padding: ${props =>(props.primary? "10px 70px": props.secondary? "0px": "")};

`;

export default Parrafo;