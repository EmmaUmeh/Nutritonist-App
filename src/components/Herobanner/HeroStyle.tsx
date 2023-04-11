import styled from "styled-components";
import {  NavContainer } from "../Navbar/Navbarstyle";
import BackgroundImg from '../../images/line-decorative.svg'

export const HeroContainer = styled(NavContainer)`
    padding: 20px 30px 20px 30px;
    background: url(${BackgroundImg});
    background-repeat: no-repeat;
    background-position: left 180px;
              
   @media (max-width: 480px) {
    background-position: left 40px;
   }

   @media (min-width: 480px) and (max-width: 768px) {
    background-position: left 40px;
   }
`;

export const HeroFLex = styled.div`
    display: flex;
    /* justify-content: center; */
    align-items: center;
    justify-content: space-between;
    

    @media (max-width: 480px) {
       
        flex-direction: column;
        padding-top: 40px;
    }

    @media (min-width: 480px) and (max-width:768px) {
       
        flex-direction: column;
        padding-top: 40px;
    }
`
export const HeroChild = styled.div`

`

export const HeroImageContainer = styled.div`
width: 95%;

@media (max-width: 768px) {
    width: 100%;
}
`;

export const HeroImageUrl = styled.img`
padding: 20px;
`

export const NutritionistDescription = styled.h1`
    font-weight: 700;
    font-size: 4rem;
    width: 80%;
    margin-bottom: 5px;

    @media (max-width: 480px) {
        width: 100%;
        font-size: 2.5rem;
    }
`;

export const NutritionistInfo = styled.p`
width: 80%;
`;

export const TutorContainer = styled.div`

`;

export const HeroButtonContainer = styled.div`
display: flex;
margin-top: 20px;
`;