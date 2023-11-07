import { Carousel } from "react-responsive-carousel";
import { data } from "../data/test"
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"

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
                        <div key={movie.id}>
                            <img src={`http://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" />
                        </div>
                    )) }
                </Carousel>
            </MoviePoster>
        </Container>
    );
}

const Container = styled.div``

const MoviePoster = styled.div`
    display: flex;
    align-items: center;
`

export default Home;