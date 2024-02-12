import CTAContainer from "../components/CTAContainer"
import Card from "../components/Card"
import Hero from "../components/Hero"
import NavBar from "../components/Navigation/NavBar"

const Home = () => {
    return (
    <div>
        <NavBar />
        <Hero />
        <div style={{marginTop: '-40px', height: '130px', position: 'relative', zIndex: 1}}>
            <CTAContainer />
        </div>
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', maxWidth: '100%', overflowX: 'auto'}}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
    )
}

export default Home