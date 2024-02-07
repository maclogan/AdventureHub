import KyotoTravel from '../res/KyotoTravel.webp'
import styled from 'styled-components'

const StyledHero = styled.div`
    max-width: 100%;
    max-height: 100%;
    position: relative;
    z-index: 0;
`
const StyledHeroImage = styled.img`
    width: 100%;
`

const StyledHeroText = styled.h1`
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    color: #FFF;
    font-size: 48px;
    font-weight: 600;
    letter-spacing: 0.04rem;
`

const Hero = () => {
    return <div>
        <StyledHero>
            <StyledHeroImage src={KyotoTravel} alt="hero image"/>
            <StyledHeroText>Explore New Paths - <br /> - Find Adventures</StyledHeroText>
        </StyledHero>
    </div>
}

export default Hero