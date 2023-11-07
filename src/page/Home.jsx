import { Carousel } from "react-responsive-carousel";
import { data } from "../data/test"
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import MovieItem from "../components/MovieItem"

function Home() {
    return (  
        <Container>
            <MoviePoster>
                <Carousel
                    showThumbs
                    autoPlay
                    infiniteLoop
                    showStatus={false}
                    transitionTime={3}
                >
                    { data.results.map((movie) => (
                        <MovieItem key={movie.id} movie={movie} />
                    )) }
                </Carousel>
            </MoviePoster>
        </Container>
    );
}

const Container = styled.div`
`

const MoviePoster = styled.div`
    display: flex;
    align-items: center;
`

export default Home;