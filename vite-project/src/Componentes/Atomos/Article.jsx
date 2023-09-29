import styled from "styled-components";

const Article = styled.article `
    width: ${props =>(props.primary? "45%": props.secondary? "60%": "")};
    height: ${props =>(props.primary? "50vh": props.secondary? "60vh": "")};
    padding: ${props =>(props.primary? "1%": props.secondary? "10vh": "")};
    margin: ${props =>(props.primary? "250px 0px": props.secondary? "0": "")};
    background: ${props =>(props.primary? "": props.secondary? "black": "")} ;
    text-align: justify;
    

`;

export default Article;