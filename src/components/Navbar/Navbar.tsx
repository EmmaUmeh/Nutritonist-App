import {useState} from 'react'
import { AboutUrl, BlogUrl, ButtonDiv, CartContainer, CartUrl, Flex, HomeUrl, LinkContainer, LogoCont, LogoUrl, NavContainer, PagesUrl} from "./Navbarstyle"
import LogoImage from '../../images/Logo.svg'
import CartImage from '../../images/icon-cart-nutritionist.svg'
import BrowsePlan from "../Button/BrowsePlan";
import {BiMenuAltRight, BiX} from 'react-icons/bi';
// import  {TfiAngleDown} from 'react-icons/tfi'
interface Person{
    HomeUrl: string,
    AboutUrl: string,  
    PagesUrl: string, 
    BlogUrl: string,
}

export default function Navbar(person: Person){
 const [toggle, setToggle] = useState(false);

 const HandleToggler = () => setToggle(!toggle);

        
    return(
       
        <>
        <NavContainer>
          <Flex>
            
            <LogoCont>
                <LogoUrl src={LogoImage}/>
            </LogoCont>

            <LinkContainer >
                <HomeUrl>{person.HomeUrl}</HomeUrl>
                <AboutUrl>{person.AboutUrl}</AboutUrl>
                <PagesUrl>{person.PagesUrl}</PagesUrl>
                <BlogUrl>{person.BlogUrl}</BlogUrl>

                <CartContainer>
                    <CartUrl src={CartImage}/>
                </CartContainer>

                <BrowsePlan Plansdetail={"Browse plans"} />
            </LinkContainer>

            

            <ButtonDiv onClick={HandleToggler}>
                {
                    toggle
                    ?
                    <BiX size={"40"}/>
                    :
                    <BiMenuAltRight size={"40"}/>
                   
                    
                }
            </ButtonDiv>
          </Flex>
         
        </NavContainer>
        </>
    )
}
