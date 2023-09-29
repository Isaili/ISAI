import styled from "styled-components";

function Img ({src, alt, primary, secondary}){
    return <StyledImg src={src} alt={alt} primary= {primary} secondary ={secondary}></StyledImg>
}

const StyledImg = styled.img `
    width:  ${props =>(props.primary? "50%": props.secondary? "30%": "")} ;
    height:  ${props =>(props.primary? "95vh": props.secondary? "80vh": "")} ;
    padding: ${props =>(props.primary? "10px": props.secondary? "0": "")} ;
    border-radius: ${props =>(props.primary? "30px": props.secondary? "0": "")};
 
`;
export default Img;