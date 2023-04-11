import {useState} from 'react'
import { AboutUrl, BlogUrl, CartUrl, Flex, HomeUrl, LinkContainer, LogoCont, LogoUrl, NavContainer, PagesUrl, CartContainer, PagesContainer, DropdonIcon, ButtonDiv } from "./Navbarstyle"
import { Navdatas } from "./Navdata"
import LogoImage from '../../images/Logo.svg'
import CartImage from '../../images/icon-cart-nutritionist.svg'
import BrowsePlan from "../Button/BrowsePlan";
import {BiMenuAltRight, BiX} from 'react-icons/bi';
import  {TfiAngleDown} from 'react-icons/tfi'

const Navbar: React.FunctionComponent = () =>{
 const [toggle, setToggle] = useState(false);

 const HandleToggler = () => setToggle(!toggle);
    return(
       
        <>
        <NavContainer >
          
          {
            Navdatas.map((Navdetails) => (
                <Flex key={Navdetails.id}>
                
                    <LogoCont>
                        <LogoUrl src={LogoImage}/>
                    </LogoCont>

                    <LinkContainer toggle={toggle}>
                    <HomeUrl>{Navdetails.HomeUrl}</HomeUrl>
                    <AboutUrl>{Navdetails.AboutUrl}</AboutUrl>
                    <PagesContainer>
                        <PagesUrl>{Navdetails.PagesUrl}</PagesUrl>
                        <DropdonIcon>
                            <TfiAngleDown size="14"/>
                        </DropdonIcon>    
                    </PagesContainer> 
                    <BlogUrl>{Navdetails.BlogUrl}</BlogUrl>
                    
                    <CartContainer>
                      <span className='cartnone'>Cart</span><CartUrl src={CartImage}/>
                    </CartContainer>

                    <BrowsePlan Plansdetail="Browse plans"/>
                    </LinkContainer>

                    <ButtonDiv onClick={HandleToggler}>
                        {
                            toggle
                            ?
                            <BiX size="40"/>
                            :
                            <BiMenuAltRight size="40" />
                        }
                    </ButtonDiv>
                </Flex>
            ))
           }
          
        </NavContainer>
        </>
    )
}


export default Navbar;


