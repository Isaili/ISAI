import styled from "styled-components";

const Card = styled.div `
    width:  ${props =>(props.primary? "80%": props.seconday? "30%" :"")} ;
    height:  ${props =>(props.primary? "85vh":  props.secondary? "30vh":  "40vh")} ;  
    background: ${props =>(props.primary? "#4b047ede": props.secondary? "#4D4D4D" : "#4b047ede")} ;
    display:  ${props =>(props.primary? "flex": props.secondary? "flex" :  "block")} ;
    justify-content: space-between;
    padding:  ${props =>(props.primary? "0px 10%": props.secondary? "5%" :  "0%")};
   

`;
export default Card;

