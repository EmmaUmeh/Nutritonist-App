import HeroImage from '../../images/heronutritionist.png'
import BrowsePlanNow from '../Button/BrowsePlanNow'
import ContactMe from '../Button/ContactMe'
import { HeroContainer, HeroFLex,HeroChild, HeroImageContainer, HeroImageUrl, NutritionistDescription, NutritionistInfo, TutorContainer, HeroButtonContainer } from './HeroStyle'
import { motion} from 'framer-motion'

const Herobanner: React.FunctionComponent = () => {
    return(
        <>

        <HeroContainer>
         {
            Herodatas.map((Herodata) => (
                <HeroChild  key={Herodata.id}>

               
                <HeroFLex>
                <motion.div
                    animate={{ opacity: 1, x: "10%"}}
                    transition={{ease: "easeIn", duration: 3,}}
                     initial={{opacity:0}}
                    >
                    <TutorContainer>
                
                    <NutritionistDescription>
                            {Herodata.NutritionistDescription}
                        </NutritionistDescription>
                   
                   <NutritionistInfo>
                        {Herodata.NutritionistInfo}
                   </NutritionistInfo>

                   

                   <HeroButtonContainer>
                   <BrowsePlanNow />
                    <ContactMe Contactdetail='Contact Me' />
                   </HeroButtonContainer>
                   
                    </TutorContainer>
                    </motion.div>

                <motion.div  
              animate={{y:0, opacity:1}} 
              initial={{opacity:0, y:50}} 
              transition={{ease:"easeOut",duration:2}}
                >
                <HeroImageContainer>
                        <HeroImageUrl src={HeroImage}/>
                </HeroImageContainer>
                </motion.div>
                </HeroFLex>

                </HeroChild>
            ))
         }
           

        </HeroContainer>
        </>
    )
}

export const Herodatas = [
    {
        id: 0,
        NutritionistDescription: 'I am Rose Dublin, your nutritionist',
        NutritionistInfo: 'Health pratisionist with quality years of experience, making your health a good term for long lasting life. Giving subsequent measures to my clients/patient to listen to their health and food daily manner'
    }
]

export default Herobanner;