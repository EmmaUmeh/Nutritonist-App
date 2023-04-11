import styled  from "styled-components"

interface Contact{
    Contactdetail: 'Contact Me'
}

export default function ContactMe(contactSetting: Contact) {
    return(
        <>
            <StyledButton>{contactSetting.Contactdetail}</StyledButton>
        </>
    )
}

export const StyledButton = styled.button`
    color: #121212;
    font-weight: 600;
    /* width: 100%; */
    padding: 15px 15px 15px 15px;
    outline: none;
    background: gainsboro;
    /* box-shadow: 8px 8px 8px 8px rgba(0,0,0,0.1); */
    border: none;
    margin-left: 5px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
`