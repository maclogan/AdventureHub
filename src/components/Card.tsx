import styled from "styled-components"
import Tokyo from '../res/Tokyo.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-regular-svg-icons"

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: ${({theme}) => theme.borderRadius};
    background-color: #FFF;
    -webkit-box-shadow: 4px 8px 20px 0px rgba(0,0,0,0.25);
    -moz-box-shadow: 4px 8px 20px 0px rgba(0,0,0,0.25);
    box-shadow: 4px 8px 20px 0px rgba(0,0,0,0.25);
    width: 325px;
    margin: 20px;
`

const StyledCardImage = styled.img`
    width: 100%:
    object-fit: contain;
    border-radius: 20px 20px 0px 0px;
`

const StyledActionRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    font-weight: 600;
    font-size: 32px;
    line-height: 0rem;
`

const StyledLikeButton = styled.div `
    background-color: transparent;
    border: 3px solid black;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: relative;
    & > svg {
        width: 70%;
        height: 70%;
        position: absolute;
        top: 50%;
        left: 50%;
        translate: -50% -50%;
    }
`

const Card = () => {
    return <StyledCard>
        <StyledCardImage src={Tokyo} alt="Tokyo Image" />
        <StyledActionRow>
            <h3>TOKYO</h3>
            <StyledLikeButton><FontAwesomeIcon icon={faHeart} /></StyledLikeButton>
        </StyledActionRow>
    </StyledCard>
}

export default Card