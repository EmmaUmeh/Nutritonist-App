import styled  from "styled-components";

export const NavContainer = styled.div`
    width: 100%;
`;

export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 25px 5px 25px 5px;
`;

export const LogoCont = styled.div`
    width: 15%;

    @media (max-width: 480px) {
        width: 48%;
    }

    @media (min-width: 480px) and (max-width:768px) {
        width: 46%;
    }
`

export const LogoUrl = styled.img`
    
`

export const LinkContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    .blc{
        color: red;
    }

    @media (max-width: 480px) {
      display: block;
        position: fixed;
        justify-content: center;
        top: 55px;
        z-index: 1;
        border: 1px solid #ddd;
        padding: 30px 150px 60px 10px;
        background: #ddd;
        border-radius: 10px;
        box-shadow: 16px, 8px, 16px 8px rgba(0,0,0,0.3);
      
    }

    @media (min-width: 480px) and (max-width: 768px) {
      display: block;
        position: fixed;
        justify-content: center;
        top: 80px;
        z-index: 1;
        border: 1px solid #ddd;
        padding: 30px 150px 60px 10px;
        background: #ddd;
        border-radius: 10px;
        box-shadow: 16px, 8px, 16px 8px rgba(0,0,0,0.1);
       
    }
`

export const HomeUrl = styled.div`
    margin-right: 20px;

    @media (max-width: 768px) {
 margin-bottom: 8px;

    }

    
`

export const AboutUrl = styled.div`

@media (max-width: 768px) {
 margin-bottom: 8px;
    }
    margin-right: 20px;
`

export const PagesUrl = styled.div`
  margin-right: 20px;  
  
  @media (max-width: 768px) {
 margin-bottom: 8px;

    }
`

export const BlogUrl = styled.div`
    margin-right: 20px;

    
    @media (max-width: 768px) {
 margin-bottom: 8px;
    }
`

export const CartUrl = styled.img`
    
    @media (max-width: 768px) {
 margin-bottom: 8px;

    }
`
export const CartContainer = styled.div`
margin-right: 25px;
width: 20%;
display: flex;
.cartnone{
    display: none;
}

@media (max-width: 768px) {
    .cartnone{
    display:block;
    }
}


@media (min-width: 480px) and (max-width: 768px) {
    .cartnone{
    display:block;
    }
    }
`;

export const PagesContainer = styled.div`
display: flex;
`

export const DropdonIcon = styled.span`
   position: relative;
   right: 17px;
   top: 3px;

`

export const ButtonDiv = styled.div`
cursor: pointer;
display: none;

@media (max-width: 768px) {
    display: block;
    

}


`