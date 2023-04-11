import styled  from "styled-components"

interface Plans{
    Plansdetail: 'Browse plans'
}

export default function BrowsePlan(plansSetting: Plans) {
    return(
        <>
          
            <StyledButton>{plansSetting.Plansdetail}</StyledButton>
           
        </>
    )
}




export const StyledButton = styled.button`
    color: rgb(255, 255, 255);
    width: 100%;
    padding: 10px 10px 10px 10px;
    outline: none;
    background: #121212;
    border: none;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;


