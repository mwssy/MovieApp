import { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"
import styled from "styled-components";

function Card({movie}) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        },1000)
    })

    return(
        <Container>
            {loading ? (
                <Item>
                    <SkeletonTheme baseColor="#202020" heightColor="#444">
                        <Skeleton height={300} duration={2}></Skeleton>
                    </SkeletonTheme>
                </Item>
                ) : (
                    <Item>
                        <Img
                            src={`http://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="영화 포스터 사진" 
                        />
                        <Ovelay>
                            <Title>{movie.origin_title}</Title>
                            <SubTitle>{movie.release_date} / ❤️{movie.vote_average}</SubTitle>
                            <Description>{movie.overview}</Description>
                        </Ovelay>
                    </Item>
                )}
        </Container>
    )
}

export default Card;

const Container = styled.div`
`

const Item = styled.div`
    position: relative;
    display: inline-block;
    border-radius: 10px;
    overflow: hidden;
    margin: 0.19rem;
    cursor: pointer;
    min-width: 200px;
    height: 300px;
    z-index: 0;
    transition: transform 0.2s;
    border: 1px solid rgb(99, 99, 99);

    &:hover {
        transform: scale(1.2);
        z-index: 1000;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
`

const Ovelay = styled.div`
    position: absolute;
    bottom: 0;
    padding: 1rem;
    padding-top: 0;
    height: 290px;
    display: flex;
    flex-flow: column;
    width: 100%;
    justify-content: flex-end;
    background-image: linear-gradient(rgb(0, 0, 0, 0), rgb(0, 0, 0, 1));
    opacity: 0;
    transition: opacity 0.2s;

    &:hover {
        opacity: 1;
    }
`

const Img = styled.img`
    height: 300px;
`

const Title = styled.h4`
    font-weight: 900;
    font-size: 1rem;
    margin-bottom: 0.4rem;
`

const SubTitle = styled.h5`
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.75rem;
    margin-bottom: 0.25rem;
`

const Description = styled.p`
    font-size: 0.75rem;
    font-style: italic;    
    width: 85%;
    margin-bottom: 0.25rem;
`