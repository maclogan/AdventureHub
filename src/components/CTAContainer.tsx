import styled from "styled-components"
import { useAuth0 } from "@auth0/auth0-react"

const StyledCTAContainer = styled.div`
    margin: 0 auto;
    display: flex;
    padding: 0px 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    background-color: #FFF;
    -webkit-box-shadow: 4px 8px 20px 0px rgba(0,0,0,0.25);
    -moz-box-shadow: 4px 8px 20px 0px rgba(0,0,0,0.25);
    box-shadow: 4px 8px 20px 0px rgba(0,0,0,0.25);
    border-radius: 20px;
`

const StyledCTAHeader = styled.h2`
    font-size: 24px;
    letter-spacing: 0.04rem;
    color: #1E1E1E;
`

const StyledCTAButton = styled.button`
    color: #FFF;
    padding: 15px 40px;
    border: none;
    border-radius: 20px;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 0.04rem;
    background-color: #48A451;
`

const CTAContainer = () => {
    const {loginWithRedirect} = useAuth0()
    return (
        <StyledCTAContainer>
            <StyledCTAHeader>Let's Get Moving</StyledCTAHeader>
            <StyledCTAButton onClick={()=>{loginWithRedirect()}}>Sign Up</StyledCTAButton>
        </StyledCTAContainer>
    )
}

export default CTAContainer